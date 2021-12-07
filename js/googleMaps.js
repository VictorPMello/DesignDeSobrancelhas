function initMap() {
  const feira = { lat: -12.2733, lng: -38.9556};
  const map = new google.maps.Map(document.getElementById("map"), {
    scaleControl: true,
    center: feira,
    zoom: 12,
  });

  // ! Cria um popup em cima do mapa
  const infowindow = new google.maps.InfoWindow();
  
  // ! Envia um conteúdo para o HTML
  infowindow.setContent("<strong>Feira de Santana</strong>");
  

  // ! Cria um marcador no mapa 
  const marker = new google.maps.Marker({ map, position: feira});

  marker.addListener("click", ()=>{
    infowindow.open(map, marker);
  });
}