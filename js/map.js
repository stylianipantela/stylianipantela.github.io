var map = AmCharts.makeChart("mapdiv",{
type: "map",
theme: "dark",
pathToImages : "http://cdn.amcharts.com/lib/3/images/",
panEventsEnabled : true,
backgroundColor : "#535364",
backgroundAlpha : 1,
zoomControl: {
panControlEnabled : true,
zoomControlEnabled : true
},
dataProvider : {
map : "worldHigh",
getAreasFromMap : true,
areas :
[
  {
    "id": "AL",
    "showAsSelected": true
  },
  {
    "id": "BE",
    "showAsSelected": true
  },
  {
    "id": "BG",
    "showAsSelected": true
  },
  {
    "id": "FR",
    "showAsSelected": true
  },
  {
    "id": "GB",
    "showAsSelected": true
  },
  {
    "id": "GR",
    "showAsSelected": true
  },
  {
    "id": "PR",
    "showAsSelected": true
  },
  {
    "id": "US",
    "showAsSelected": true
  },
  {
    "id": "IN",
    "showAsSelected": true
  },
  {
    "id": "SG",
    "showAsSelected": true
  },
  {
    "id": "AU",
    "showAsSelected": true
  }
]
},
areasSettings : {
autoZoom : true,
color : "#B4B4B7",
colorSolid : "#84ADE9",
selectedColor : "#84ADE9",
outlineColor : "#666666",
rollOverColor : "#9EC2F7",
rollOverOutlineColor : "#000000"
}
});