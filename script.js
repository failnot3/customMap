// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 42.66264, lng: 23.317780084658974 };
    const mark = { lat: 42.64605630153414, lng: 23.339796895892906 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: uluru,
        mapId: "b26acea981ff127b"
    });
    const marker = new google.maps.Marker({
        position: mark,
        map: map,
        title: 'APM 2 @ NewAvenue',
        icon: {
            url: "green-box.svg",
            scaledSize: new google.maps.Size(40, 40)
        }
    });
    const markerOne = new google.maps.Marker({
        position: { lat: 42.66212822871365, lng: 23.31805707634206 },
        map: map,
        title: 'APM 1 @PUZL',
        icon: {
            url: "green-box.svg",
            scaledSize: new google.maps.Size(40, 40)
        }
    });

}

window.initMap = initMap;
//42.662645514452144, 23.317780084658974
// new avenue 42.64605630153414, 23.339796895892906
// puzl 42.66212822871365, 23.31805707634206