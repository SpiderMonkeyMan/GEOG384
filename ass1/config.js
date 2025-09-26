var config = {
  style: "mapbox://styles/mapbox/streets-v12",
  accessToken: window.MAPBOX_TOKEN,
  showMarkers: true,
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
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
  title: "Camp Mystic Controversy",
  subtitle: "The Tragic Story of a Texas Flood",
  byline: "By a I.M. Amapper",
  footer:
    'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
  chapters: [
    {
      id: "slug-style-id",
      alignment: "left",
      hidden: false,
      title: "Central Texas, July 9th, 2025",
      //   image: "images/ein.gif",
      description:
        "The first chapter contains a title, image, and camera view for San Francisco, California. Update the chapter data to make it your own.",
      location: {
        center: [-99.2880556, 30.0005556],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: "second-identifier",
      alignment: "right",
      hidden: false,
      title: "Second Title",
      //   image: "images/globe.png",
      description: "Copy these sections to add to your story.",
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
      title: "Third Title",
      image: "images/pumpkin.jpg",
      description: "Copy these sections to add to your story.",
      location: {
        center: [6.15116, 46.20595],
        zoom: 12.52,
        pitch: 8.01,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "fourth-chapter",
      alignment: "fully",
      hidden: false,
      title: "Fo Title",
      image: "./path/to/image/source.png",
      description: "Copy these sections to add to your story.",
      location: {
        center: [-58.54195, -34.716],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
