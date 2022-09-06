if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showLocation)
    console.log(navigator.geolocation)
}

function showLocation(position){
    const long = position.coords.longitude;
    const lat = position.coords.latitude;

    console.log(long)
    console.log(lat)

   const url = `https://maps.google.com/maps?q=${lat},${long}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

   window.open(url, 'map')
}


