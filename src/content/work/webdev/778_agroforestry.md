---
title: Agroforestry Benefits Website
publishDate: 2024-04-19 00:00:00
img: /assets/preview/778_homepage.png
img_alt: A website with a header and four pages titled Home, Process, Data, and and Results, that currently is one the home page. There is a title that reads "How does agroforestry provide benefits in WI, USA?" and a picture of trees planted in rows.
description: |
  A website that explores the environmental benefits of agroforestry.
tags:
  - UW-Mad Geog778
  - Web
  - ArcGIS-JS
  - ArcGIS-Web-Maps
  - ArcGIS-Experience-Builder
liveLink: https://experience.arcgis.com/experience/0feb9842864540189ec13144deff7652/
---

This project is for UW-Madison Geog 778 class which also serves as my Practicum for my MS degree. This code depends on my student ESRI account key being active so it may not work in the future. Currently the site is live.

My project is a website to explore the environmental benefits of agroforestry, the intentional integration of trees and shrubs into crop and animal farming systems to create environmental, economic, and social benefits. I worked with the Savanna Institute, a nonprofit that researches, promotes, and assists in the implementation of agroforestry, to guide my data analysis on this project. I used raster manipulation and spatial analysis tools to compare Savanna Institute data on suitability of chestnut trees in Wisconsin against exisiting agricultural land, soil susceptible to wind or water erosions, and the Wisconsin DNR’s summary metric of Ecological Index per watershed. My website is a guided exploration that defines agroforestry, discusses my data sources and analysis, and presents the data in 3 interactive maps. I used ESRI’s Experience Builder, taking advantage of built in widgets to display ESRI ArcGIS Online Web Maps that I prepared with my agroforestry analysis.

The end result of my data analysis was two layers on ArcGIS Online:
- Data of agroforestry suitability and comparison per WI county, <a href="https://www.arcgis.com/home/item.html?id=af8501360ce6424f8758b1821767207f" target="_blank"><br>WI_CNTYS_Agroforestry_Summary</a>
- Data of agroforestry suitability and comparison per HUC-12 watershed, <a href="https://www.arcgis.com/home/item.html?id=6745bb0fbc3d4ef28e149ff2dce99e28" target="_blank"><br>WI_HUC12_WTSHDS_Agroforestry_Summary</a>

And I used the watershed layer to create two ArcGIS Online Web Maps, styled using cartographic techniques, paying attention to visual hierarchy, and displaying the information I felt would be useful in my final visualization:
- Watershed level with analysis with the CDL, SSURGO wei and kwact, <a href="https://uw-mad.maps.arcgis.com/home/item.html?id=4722a88d715e478c8adaacc6214961f5" target="_blank"><br>HUC-12  Agroforestry Summary Data</a>
- Watershed level with comparison to WI DNR Ecological Index, <a href="https://uw-mad.maps.arcgis.com/home/item.html?id=66459134bf9a48ed9f463fef5b792900" target="_blank"><br>Agroforestry Summary compared to Ecological Index</a>


Additionally, I have a demonstration available that walks through my website, <a href="https://www.youtube.com/watch?v=yn5mo7OvPQg" target="_blank"><br>Agroforestry Project Demonstration</a>.

Skills: ESRI ArcGIS Online Suite (hosting layers, creating web maps, nesting web maps into widgets, StoryMaps, Experience Builder), front-end web design, UI/UX design, environmental data analysis, data presentation, working with a company/freelance work