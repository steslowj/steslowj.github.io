import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

//wrap everything in an anonymous function which is immediately invoked
//also prevents items in this JS file being in global scope
window.onload = function(){

  let geojson = {}

  let context = d3.select('#globe canvas')
    .node()
    .getContext('2d');

  let projection = d3.geoOrthographic()
    .scale(200)
    .center([0, 0])
    .rotate([112,-40,0])
    .translate([600/2, 400/2]);

  let path = d3.geoPath()
    .projection(projection)
    .pointRadius(4)
    .context(context);

  // Graticule
  let graticule = d3.geoGraticule().step([10,10]); //place graticule lines every 20 deg of long and lat;


  function render(land, countries) {
    context.clearRect(0, 0, 800, 600);
    context.beginPath();
      context.arc(300,200,200,0, 2* Math.PI),
      context.stroke(),
      context.fillStyle = "#fafafa",
      context.fill();
    context.beginPath(), path(graticule()), 
        context.strokeStyle = "#ccc",
        context.lineWidth = 0.3,
        context.stroke();
    context.beginPath(), path(land), 
        context.strokeStyle = "#cb2a42",
        context.lineWidth = 1,
        context.stroke();
    context.fillStyle = "#00000011",
        context.fill();
    context.beginPath(), path(countries), 
        context.strokeStyle = "#cb2a42aa",
        context.lineWidth = 1,
        context.stroke();
  }




  // REQUEST DATA
  var promises = [d3.json("../data/land-110m.json"), d3.json("../data/countries-110m.json")];
  Promise.all(promises).then(callback);

  function callback(data){

    var land110 = data[0], countries = data[1];

    var baseLand = topojson.feature(land110, land110.objects.land);
    var countryBoundaries = topojson.feature(countries, countries.objects.countries);

    geojson = baseLand;

    render(baseLand, countryBoundaries);

    d3.select(context.canvas)
        .call(drag(projection)
        .on("drag.render", () => render(baseLand, countryBoundaries))
        .on("end.render", () => render(baseLand, countryBoundaries)))
        .call(() => render(baseLand, countryBoundaries))

  } //end of callback


  function drag(projection) {
    let v0, q0, r0, a0, l;

    function pointer(event, that) {
      const t = d3.pointers(event, that);

      if (t.length !== l) {
        l = t.length;
        if (l > 1) a0 = Math.atan2(t[1][1] - t[0][1], t[1][0] - t[0][0]);
        dragstarted.apply(that, [event, that]);
      }

      // For multitouch, average positions and compute rotation.
      if (l > 1) {
        const x = d3.mean(t, p => p[0]);
        const y = d3.mean(t, p => p[1]);
        const a = Math.atan2(t[1][1] - t[0][1], t[1][0] - t[0][0]);
        return [x, y, a];
      }

      return t[0];
    }

    function dragstarted({x, y}) {
      v0 = versor.cartesian(projection.invert([x, y]));
      q0 = versor(r0 = projection.rotate());
    }

    function dragged(event) {
      const v1 = versor.cartesian(projection.rotate(r0).invert([event.x, event.y]));
      const delta = versor.delta(v0, v1);
      let q1 = versor.multiply(q0, delta);

      // For multitouch, compose with a rotation around the axis.
      const p = pointer(event, this);
      if (p[2]) {
        const d = (p[2] - a0) / 2;
        const s = -Math.sin(d);
        const c = Math.sign(Math.cos(d));
        q1 = versor.multiply([Math.sqrt(1 - s * s), 0, 0, c * s], q1);
      }

      projection.rotate(versor.rotation(q1));

      // In vicinity of the antipode (unstable) of q0, restart.
      if (delta[0] < 0.7) dragstarted.apply(this, [event, this]);
    }

    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged);
  }


  class Versor {
    static fromAngles([l, p, g]) {
      l *= Math.PI / 360;
      p *= Math.PI / 360;
      g *= Math.PI / 360;
      const sl = Math.sin(l), cl = Math.cos(l);
      const sp = Math.sin(p), cp = Math.cos(p);
      const sg = Math.sin(g), cg = Math.cos(g);
      return [
        cl * cp * cg + sl * sp * sg,
        sl * cp * cg - cl * sp * sg,
        cl * sp * cg + sl * cp * sg,
        cl * cp * sg - sl * sp * cg
      ];
    }
    static toAngles([a, b, c, d]) {
      return [
        Math.atan2(2 * (a * b + c * d), 1 - 2 * (b * b + c * c)) * 180 / Math.PI,
        Math.asin(Math.max(-1, Math.min(1, 2 * (a * c - d * b)))) * 180 / Math.PI,
        Math.atan2(2 * (a * d + b * c), 1 - 2 * (c * c + d * d)) * 180 / Math.PI
      ];
    }
    static interpolateAngles(a, b) {
      const i = Versor.interpolate(Versor.fromAngles(a), Versor.fromAngles(b));
      return t => Versor.toAngles(i(t));
    }
    static interpolateLinear([a1, b1, c1, d1], [a2, b2, c2, d2]) {
      a2 -= a1, b2 -= b1, c2 -= c1, d2 -= d1;
      const x = new Array(4);
      return t => {
        const l = Math.hypot(x[0] = a1 + a2 * t, x[1] = b1 + b2 * t, x[2] = c1 + c2 * t, x[3] = d1 + d2 * t);
        x[0] /= l, x[1] /= l, x[2] /= l, x[3] /= l;
        return x;
      };
    }
    static interpolate([a1, b1, c1, d1], [a2, b2, c2, d2]) {
      let dot = a1 * a2 + b1 * b2 + c1 * c2 + d1 * d2;
      if (dot < 0) a2 = -a2, b2 = -b2, c2 = -c2, d2 = -d2, dot = -dot;
      if (dot > 0.9995) return Versor.interpolateLinear([a1, b1, c1, d1], [a2, b2, c2, d2]); 
      const theta0 = Math.acos(Math.max(-1, Math.min(1, dot)));
      const x = new Array(4);
      const l = Math.hypot(a2 -= a1 * dot, b2 -= b1 * dot, c2 -= c1 * dot, d2 -= d1 * dot);
      a2 /= l, b2 /= l, c2 /= l, d2 /= l;
      return t => {
        const theta = theta0 * t;
        const s = Math.sin(theta);
        const c = Math.cos(theta);
        x[0] = a1 * c + a2 * s;
        x[1] = b1 * c + b2 * s;
        x[2] = c1 * c + c2 * s;
        x[3] = d1 * c + d2 * s;
        return x;
      };
    }
  }


}();
