---
title: Shiny for Python Application
publishDate: 2024-03-04 00:00:00
img: /assets/preview/777_cancer-nitrate.png
img_alt: A simple web page with a title that reads "Exploring the Influence of Well Nitrate Levels on Cancer Rates in WI, USA" and shows two side by side maps that show counties of WI, colored by Cancer Rate or Nitrate Level.
description: |
  A website application that explores the relationship between nitrate level and cancer rate in WI, USA, using Shiny for Python.
tags:
  - UW-Mad Geog777
  - Web
  - Shiny for Python
  - Python
---

This project is for my UW-Madison Geog 777 class in which we demonstrate data analysis with two shapefiles, one for nitrate level and one for cancer rate, converting data as needed to run an Inverse Distance Weighted (IDW) interpolation live with user-input.

My application is a scroll-based website that allows the user to explore the nitrate concentration dataset compared to the cancer rates dataset through interactive statistical analysis. My application is created with the web framework Shiny for python. Shiny has syntax for interactive UI elements, HTML structure, file handling, and data manipulation. My application uses a combination of open source python libraries for analysis on the given cancer rate and nitrate level shapefile data.

One of the goals I wanted for my application was to use open source options only. I saw from one student example how using arcpy would be straightforward, but I wanted to see if I could find something more ‘flexible’ that doesn’t depend on a subscription. Maybe ironically, I think my network of required python libraries is not very flexible because it is dependent on many libraries being maintained, and I think it can be clunky to learn. But it is at least open source.


The code is available on github, <a href="https://github.com/steslowj/geog777_proj1/" target="_blank">https://github.com/steslowj/geog777_proj1/</a>.

Skills: Python coding, Shiny for Python, Visual Studio Code, statistical analysis, front-end web design, UI/UX design