// const { Marker } = require("leaflet");

//const { default: axios } = require("axios");
let _latitude = 0 , _longitude=0;



navigator.geolocation.getCurrentPosition(function(position){
        let currLocationDiv = document.getElementById("current-location");

       _latitude = position.coords.latitude;
       _longitude = position.coords.longitude;

       const map = L.map('map')
        .setView([_latitude,_longitude],15);

        

        //getting the selected water resource
       /* const w_resource = localStorage.getItem('resource');*/
       /* const w_resource = "lake";
       if(resource!=null){

                //get the water resource of the selected type

                let url = "https://api.openstreetmap.org/api/water_sources/nearby?lat="+_latitude+"&lon="+_longitude+"&water_resource_type="+w_resource;

                fetch(url)
                .then(response=>response.json())
                .then(waterResource=>{
                       let waterResourcesDiv = document.getElementById("map");

                       waterResource.forEach(waterResources => {
                                var markerUniq = new L.Marker([waterResource.latitude,waterResource.longitude]);

                             //   markerUniq.addTo(map);
                       });
                       markerUniq.addTo(map);

                       var nameDiv = document.createElement("div");
                       nameDiv.className="name";
                       nameDiv.textContent = waterResource.name;
                       waterResourcesDiv.appendChild(nameDiv);

                       //add the description of the water
                       var descriptiveDiv = document.createElement("div");
                       descriptiveDiv.className = "description";
                       descriptiveDiv.textContent = waterResource.description;
                       waterResourcesDiv.appendChild(descriptiveDiv);
                });

               
        }*/


        
        const titleUrl ='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

        const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

        //creating a layers
        //1.tile layer
        const tiles = L.tileLayer(titleUrl,{
                attribution
        });
        




        let circle = L.circle([_latitude,_longitude],{
                color:'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 50
        }).addTo(map);


        tiles.addTo(map)

});


const lats = localStorage.getItem('lats');
const longs = localStorage.getItem('longs');


if(lats!=null && longs!=null && resource != null){

        console.log("In home page - "+lats)
        console.log("In home page - "+longs)
        console.log("In home page - "+resource)
}

//get the current lats and longs of user




