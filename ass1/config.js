var config = {
  style: "mapbox://styles/jgray456/cmg584t1q009u01qtc7e338cb",
  accessToken: window.MAPBOX_TOKEN,
  showMarkers: false,
  markerColor: "#3FB1CE",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: true,
  insetOptions: {
    markerColor: "orange",
  },
  insetPosition: "bottom-right",
  theme: "dark",
  use3dTerrain: true, //set true for enabling 3D maps.
  auto: false,
  title: "Camp Mystic Controversy",
  subtitle: "The Tragic Story of a Texas Flood",
  byline: "By Jack Putnam, Jonah Gray, Sam Dummer",
  footer:
    'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
  chapters: [
    {
      id: "slug-style-id",
      alignment: "left",
      hidden: false,
      title: "Central Texas, July 4th, 2025",
      //   image: "images/ein.gif",
      description:
        "Our storymap focuses on flooding along the Guadalupe River in Central Texas, USA starting on the morning of July 4th, 2025. 135 people were killed in the midst of the flooding, including 27 at Camp Mystic, a historic summer camp built in the river’s floodplains. In only 45 minutes the Guadalupe River’s water level increased 26 feet.",
      location: {
        center: [-99.2880556, 30.0005556],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "second-identifier",
      alignment: "right",
      hidden: false,
      title: "Centerpoint, TX",
      //   image: "images/globe.png",
      description:
        '<div class="video-wrapper"><iframe width="360" height="203" src="https://www.youtube.com/embed/HqXXbjN-hhs?start=2100&amp;end=2265" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><p class="caption" style="text-align:center;">Here is a bridge over the Guadalupe River in Center Point, Texas on July 4th. This video demonstrates the immense destructive nature of the flooding. As you can see, the water carries an entire house along the river bank.</p>',
      location: {
        center: [-99.03769, 29.946594],
        zoom: 16,
        pitch: 0,
        bearing: 50,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "third-identifier",
      alignment: "left",
      hidden: false,
      title: "Guadalupe River",
      //   image: "images/pumpkin.jpg",
      description:
        "The 28 mile stretch of River between the previously shown bridge and Camp Mystic.",
      location: {
        center: [-99.3280556, 30.0005556],
        zoom: 11,
        pitch: 8.01,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "clip-river-featurestojson-2cr27u", visibility: "visible" },
        { layer: "map1-8xzsu1", visibility: "visible" },
      ],
      onChapterExit: [
        { layer: "clip-river-featurestojson-2cr27u", visibility: "none" },
        { layer: "map1-8xzsu1", visibility: "none" },
      ],
    },
    {
      id: "fourth-chapter",
      alignment: "right",
      hidden: false,
      title: "Camp Mystic",
      image: "./images/mystic_camp.png",
      description:
        "Pre-flooding, Camp Mystic was a harmonious retreat for the Christian youth of Central Texas. It hosted over a dozen cabins, tennis courts, a dining hall and a handful of communal spaces. The camp was celebrating its 99th year of opening at the time of the flooding.",
      location: {
        center: [-99.369266, 30.009313],
        zoom: 16.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "map1-8xzsu1", visibility: "visible", opacity: 0.8 },
      ],
      onChapterExit: [{ layer: "map1-8xzsu1", visibility: "none" }],
    },
    {
      id: "fifth-chapter",
      alignment: "right",
      hidden: false,
      title: "Flood Zone",
      // image: "./images/water-mark.jpg",
      description:
        "These FEMA (Federal Emergency Management Agency) flood zones indicate a one percent risk of a flood per year or, in other words, an 100 year flood zone. A handful Camp Mystic’s buildings are seen within the dangerous flood zone - and the entire camp is built upon the Guadalupe’s floodplain. To make matter worse, in 2013 Camp Mystic requested that many of their buildings be taken off the high risk flood zones. FEMA granted their request, therefore saving the camp money from expensive flood insurance but also putting the young campers at greater.",
      location: {
        center: [-99.369266, 30.009313],
        zoom: 16.5,
        pitch: 60,
        bearing: 50,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "map1-8xzsu1", visibility: "visible", opacity: 0.8 },
        {
          layer: "s-fld-haz-arse-featurestojso-b765rn",
          visibility: "visible",
          opacity: 0.6,
        },
      ],
      onChapterExit: [
        { layer: "s-fld-haz-arse-featurestojso-b765rn", visibility: "none" },
        { layer: "watermarkcampmysticnewdata", visibility: "none" },
      ],
    },
    {
      id: "sixth-chapter",
      alignment: "left",
      hidden: false,
      title: "High-Water Makrs",
      image: "./images/water-mark.jpg",
      description:
        "Also displayed are High-Water Marks set by the US Geological Survey. These are “real-time water-monitoring sites throughout the Nation that record continuous stream stage (height of a river)” and they are “invaluable during floods and high water to allow the public and emergency responders to know where dangerous flooding might be occurring.” The numbers shown indicate the height-above ground in which the flood waters reached.",
      location: {
        center: [-99.369266, 30.009313],
        zoom: 16.5,
        pitch: 60,
        bearing: 50,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "watermarkcampmysticnewdata", visibility: "visible" },
        { layer: "map1-8xzsu1", visibility: "visible", opacity: 0.8 },
        {
          layer: "s-fld-haz-arse-featurestojso-b765rn",
          visibility: "visible",
          opacity: 0.6,
        },
      ],
      onChapterExit: [],
    },
  ],
};
