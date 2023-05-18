
let latitude = localStorage.getItem('latitude');
let longitude = localStorage.getItem('longitude');
let maxRadius = localStorage.getItem('resource');


document.getElementById('target_lats').textContent = latitude;
document.getElementById('target_longs')
        .textContent = longitude;

document.getElementById('target_res')
        .textContent = maxRadius;

/*
if(latitude!=null && longitude!=null && waterResType!=null){*/

const masterMap = L.map('map')
        .setView([latitude,longitude],10);

console.log(masterMap)

const titleUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const tiles = L.tileLayer(titleUrl,{
    attribution
});



//add tiles to map;
tiles.addTo(masterMap);


const currBoundaryRadius = L.circle([latitude,longitude],{
                        color:'yellow',
                        fillColor:"#9BDCF2",
                        fillOpacity:0.3,
                        radius:maxRadius
                    })
                    .addTo(masterMap)
                    

//marker on my current location .
const currentMarker = L.marker([latitude,longitude])
    .addTo(masterMap)
    .bindPopup("My current Location ")
    .openPopup();


    
async function fetchWaterSourceData(latitude_,longitude_,radius){
    console.log("exe1");
    const query = `[out:json];
    (
        node["natural"="water"](around:${radius},${latitude_},${longitude});
        way["natural"="water"](around:${radius},${latitude_},${longitude_});
        relation["natural"="water"](around:${radius},${latitude_},${longitude_});
    );
    out;`;

    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

    try{
        console.log("exe2");

        const response = await fetch(url);
        const data  = await response.json();
        
        return data;
    }catch(error){
        console.log("exe3 error thrown");

        console.error('Error is thrown water source data', error);
        return null;
    }
} 

const radius = 5000;
console.log("executing function.")
fetchWaterSourceData(latitude,longitude,maxRadius)
    .then(data=>{
        if(data){
            let i=0;
            i = data.elements.length;
           // console.log("size of data - ",data.elements.length);
            console.log("the response : ",data);
            
            let resString="";
            
            for(const feature of data.elements){
                    console.log(feature.tags.name);

                    if(feature.tags.name && feature.tags.natural && feature.tags.water){
                        let s = `Name:${feature.tags.name}, Water-type:${feature.tags.water}, Natural:${feature.tags.natural}.\n\n`;
                        resString+=s;
                    }
                   
                }

            document.getElementById('results').innerText = resString;
            
        }
        else{
            console.log("the response is null.");
        }
        
    });



function createLayout(waterSourceName,natural,water){
    console.log('executed inside')
    
    let tempString = `Source Type: ${water} , Source name:${waterSourceName} , Natural:${natural} \n\n`;
    
    console.log("the string is ",tempString);
    let targetDiv = document.getElementById('waterResponse');

    
    let p = document.createElement("p");
    p.setAttribute("id","waterResponseId");
   
    document.getElementById('waterResponseId').textContent = tempString;
   
    targetDiv.appendChild(p);
   
    console.log("the string is ",tempString);
    // li.textContent = tempString;
   
    // console.log(li.textContent);
    // targetDiv.appendChild(li);

}











