var config = {
  style: "mapbox://styles/jgray456/cmg584t1q009u01qtc7e338cb/",
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
        {
          layer: "river-line",
          opacity: 1,
          duration: 1000,
        },
      ],
      onChapterExit: [
        {
          layer: "river-line",
          opacity: 0,
        },
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
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "fifth-chapter",
      alignment: "right",
      hidden: false,
      title: "Water Marks",
      image: "./images/water-mark.jpg",
      description:
        "Pre-flooding, Camp Mystic was a harmonious retreat for the Christian youth of Central Texas. It hosted over a dozen cabins, tennis courts, a dining hall and a handful of communal spaces. The camp was celebrating its 99th year of opening at the time of the flooding.",
      location: {
        center: [-99.369266, 30.009313],
        zoom: 16.5,
        pitch: 60,
        bearing: 50,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
