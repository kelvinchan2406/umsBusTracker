const banana = L.Routing.control({
      waypoints: [
      L.latLng(6.035741678830313, 116.11331654733198),
        L.latLng(6.045154278340483, 116.13110931346655)
      ]
    , showAlternatives: true, createMarker: function() { return null; }, addWaypoints: false, draggableWaypoints: false, show: false, lineOptions: {
    styles: [{
      radius: 200, fill: false, opacity: 1, weight: 10, interactive: false
    }]
    }}).addTo(map);

    console.log(banana);