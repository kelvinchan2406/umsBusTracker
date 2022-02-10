//create and display bus icons








//random coord generator
const getRndLatCoord = () => {
    return (Math.random() * (6.0388393108695215 - 6.036797290609151) + 6.036797290609151);
};
const getRndLongCoord = () => {
    return (Math.random() * (116.12390335404525 - 116.12038024246473) + 116.12038024246473);
};
 const getNewBusCoord = () => {
     return [getRndLatCoord(),getRndLongCoord()];
 }




const myIcon = L.divIcon({
    className: 'my-div-icon',
    html: '<span class="my-div-span">2</span><img class="my-div-image" src="bus.png">',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
});

const setBusMarker = (busCoord) => {
    L.marker(busCoord, {icon: myIcon}).addTo(map);
}




document.getElementsByClassName("addBusMarker")[0].addEventListener("click",function() {setBusMarker(getNewBusCoord(getNewBusCoord()))
});