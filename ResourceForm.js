
let resourceSelected;

function onDropDown(dropDown){
let selectedItem = dropDown.options[dropDown.selectedIndex].value
resourceSelected = selectedItem;
}

function launch(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            function(position){
              
                if(typeof resourceSelected != undefined){

                    localStorage.setItem('latitude',position.coords.latitude);
                    localStorage.setItem('longitude',position.coords.longitude);
                    localStorage.setItem('resource',resourceSelected);


                    window.location.href='Centroid.html';
                }
                   
            }
        )
    }
}

function onReset(){
    document.getElementById('latitude').value = "";
    document.getElementById('longitude').value="";
    document.getElementById('resource-type').value="Select a resource type";
}

function onEntry(){
    console.log("button clicked")
    let latsElement =  document.getElementById('latitude').value;
    let longsElement = document.getElementById('longitude').value;
    let requestResource = resourceSelected;


    if(latsElement != null && longsElement!= null && requestResource != null){
        localStorage.setItem('latitude',latsElement);
        localStorage.setItem('longitude',longsElement);
        localStorage.setItem('resource',resourceSelected);
        console.log(latsElement)
        console.log(longsElement)
        console.log(resourceSelected)

        window.location.href='Centroid.html';
    }



    let onCurrLocationBtn = document.getElementById("onRealTimeEntry")
                    .addEventListener('click',()=>{
                        alert('hello real time!')
                    })
}