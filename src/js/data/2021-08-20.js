dataSetVersion = "2021-08-20"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Faction",
    key: "faction",
    tooltip: "Check this to restrict to specific factions.",
    checked: true,
    sub: [
      { name: "Avengers", key: "A" }
    ]
  }
  ];

dataSet[dataSetVersion].characterData = [
  {
    name: "Dr. Henry Pym / Ant-Man / Giant-Man",
    img: "https://i.imgur.com/v1wbszq.png",
    opts: {
      faction: ["A"]
    }
  },
   {
    name: "Black Panther",
    img: "https://i.imgur.com/adjluAr.png",
    opts: {
      faction: ["A"]
    }
  },
   {
    name: "Captain America",
    img: "https://i.imgur.com/SusNNWz.png",
    opts: {
      faction: ["A"]
    }
  },
   {
    name: "Captain Marvel",
    img: "https://i.imgur.com/KjDPlS4.png",
    opts: {
      faction: ["A"]
    }
  },
   {
    name: "Doctor Strange",
    img: "https://i.imgur.com/cePF3dw.png",
    opts: {
      faction: ["A"]
    }
  },
   {
    name: "Hawkeye",
    img: "https://i.imgur.com/SHbYjTe.png",
    opts: {
      faction: ["A"]
    }
  },
   {
    name: "Hulk",
    img: "https://i.imgur.com/NetRt5h.png",
    opts: {
      faction: ["A"]
    }
  },
   {
    name: "Iron Man",
    img: "https://i.imgur.com/sibZ2cY.png",
    opts: {
      faction: ["A"]
    }
  },
   {
    name: "Spider-Man",
    img: "https://i.imgur.com/XDsdKXk.png",
    opts: {
      faction: ["A"]
    }
  },
   {
    name: "Thor",
    img: "https://i.imgur.com/qZL09wX.png",
    opts: {
      faction: ["A"]
    }
  },

];
