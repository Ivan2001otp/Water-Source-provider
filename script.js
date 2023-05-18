//AIzaSyD3critITsQ9rpHXbHknk1DLTtzB5Y4IZA--google api key
let map;
async function initMap(){
   
    const position = { lat: -25.344, lng: 131.031 };

    //request needed libraries
    const{Map}=await google.maps.importLibrary("maps");
    const {AdvancedMarkerView}=await google.maps.importLibrary("marker");

    //the map centered at position
    map = new Map(document.getElementById("map"),{
        zoom:4,
        center:position,
        mapId:"DEMO_MAP_ID",
    });

    //the marker positioned at position
    const marker = new AdvancedMarkerView({
        map:map,
        position:position,
        title:"Uluru",
    })
}

initMap();