mapboxgl.accessToken = 'pk.eyJ1IjoiY2FsbG1lc3VkbyIsImEiOiJja2FyMGs1dXMwZTlmMnVwcmtnYzFxNmsxIn0.MAuIQ3l9aVvGvo7xtgEAIA';

navigator.geolocation.getCurrentPosition(successlocation, 
    errroLocation, {
        enableHighAccuracy: true
    })

    function successlocation(position) {
        setupMap([position.coords.longitude, position.coords.latitude])
    }

    function errroLocation(){
        setupMap([-2.24, 53.48])
    }

    function setupMap(center){
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom:10
    })

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });
      
      map.addControl(directions, 'top-left');
      
      
      map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        })
    );

}
