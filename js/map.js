function initMap(){
  var school = {lat: 37.4963111, lng: 126.95745959999999};
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 16, center: school
    }
  );
  var marker = new google.maps.Marker({
    position: school,
    map: map
  });
}
