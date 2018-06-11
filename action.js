
function servicios(){
    var confirmados = [
        {
          "id":"0001",
          "city":"CDMX",
          "customer":"Román López",
          "addres_street": "Zamora 177, Int 101",
          "addres_neighborhood": "Condesa",
          "service_type": "Recurrente",
          "date": "30 feb",
          "hour": "7:00 AM",
          "lenght": "4",
          "lat_service": "19.412901",
          "long_service": "-99.180274"
        },
        {
          "id":"0002",
          "city":"CDMX",
          "customer":"Mauricio Morales",
          "addres_street": "Amatlán 18",
          "addres_neighborhood": "Condesa",
          "service_type": "Expres",
          "date": "30 feb",
          "hour": "12:00 AM",
          "lenght": "3",
          "lat_service": "19.413958",
          "long_service": "-99.174357"
        },
        {
          "id":"0003",
          "city":"CDMX",
          "customer":"Roberto Salgado",
          "addres_street": "Atlixco 5",
          "addres_neighborhood": "Condesa",
          "service_type": "Recurrente",
          "date": "30 feb",
          "hour": "4:00 PM",
          "lenght": "3",
          "lat_service": "19.415771",
          "long_service": "-99.172825"
        }
      ];
    
    var content = "";

    for(var i = 0; i < confirmados.length; i++){

        
      content += "<div class='container-fluid'>";
      content += "<div class='row'>";
      content += "<div class='col-12'";
      content += "<p>Dirección</p>";
      content += "<h4>" + confirmados[i].addres_street + ", " + confirmados[i].addres_neighborhood + ", " + confirmados[i].city + "</h4>";
      content += "</div";
      content += "<div class='col-12'>";
      content += "<p>Fecha</p>" + "<p>" + confirmados[i].date + "</p>";
      content += "</div>";
      content += "<div class='col-12'>";
      content += "<p>Hora</p>" + "<p>" + confirmados[i].hour + "</p>";
      content += "</div>";
      content += "<p>Duración</p>" + "<p>" + confirmados[i].lenght + "</p>" + "<p>horas</p>";
      content += "</div>";
      content += "</div>";
      content += "</div>"

    }
    document.getElementById("result").innerHTML = content;
   
}

function disponibles(){
  var disponibles = [
    {
      "id":"0001",
      "city":"CDMX",
      "customer":"Juan Pérez",
      "addres_street": "Zamora 177, Int 101",
      "addres_neighborhood": "Condesa",
      "service_type": "Recurrente",
      "date": "31 feb",
      "hour": "7:00 AM",
      "lenght": "4",
      "lat_service": "19.412901",
      "long_service": "-99.180274"
    },
    {
      "id":"0002",
      "city":"CDMX",
      "customer":"Lupita Gómez",
      "addres_street": "Amatlán 18",
      "addres_neighborhood": "Condesa",
      "service_type": "Recurrente",
      "date": "31 feb",
      "hour": "7:00 AM",
      "lenght": "4",
      "lat_service": "19.413958",
      "long_service": "-99.174357"
    },
    {
      "id":"0003",
      "city":"CDMX",
      "customer":"Carla Robledo",
      "addres_street": "Amsterdam 43",
      "addres_neighborhood": "Condesa",
      "service_type": "Expres",
      "date": "31 feb",
      "hour": "10:00 AM",
      "lenght": "4",
      "lat_service": "19.415621",
      "long_service": "-99.169068"
    },
    {
      "id":"0004",
      "city":"CDMX",
      "customer":"Gabriela Viloria",
      "addres_street": "Cuernavaca 88, Int. 132",
      "addres_neighborhood": "Condesa",
      "service_type": "Unica vez",
      "date": "31 feb",
      "hour": "11:00 AM",
      "lenght": "6",
      "lat_service": "19.413013",
      "long_service": "-99.175914"
    },
    {
      "id":"0005",
      "city":"CDMX",
      "customer":"Luis Sánchez",
      "addres_street": "Cuautla 12",
      "addres_neighborhood": "Condesa",
      "service_type": "Recurrente",
      "date": "31 feb",
      "hour": "3:00 PM",
      "lenght": "4",
      "lat_service": "19.414728",
      "long_service": "-99.175573"
    },
    {
      "id":"0006",
      "city":"CDMX",
      "customer":"Valeria Román",
      "addres_street": "Cozumel 20, Int 32",
      "addres_neighborhood": "Condesa",
      "service_type": "Unica vez",
      "date": "31 feb",
      "hour": "5:00 PM",
      "lenght": "3",
      "lat_service": "19.420301",
      "long_service": "-99.171112"
    },
    {
      "id":"0007",
      "city":"CDMX",
      "customer":"Diana Martínez",
      "addres_street": "Atlixco 5",
      "addres_neighborhood": "Condesa",
      "service_type": "Expres",
      "date": "31 feb",
      "hour": "9:00 AM",
      "lenght": "4",
      "lat_service": "19.415771",
      "long_service": "-99.172825"
    }
  ];
  var content="";

  for(var i=0; i<disponibles.length; i++){
        content += "<div class='container-fluid'>";
        content += "<div class='row'>";
        content += "<div class='col-12'";
        content += "<p>Dirección</p>";
        content += "<h4>" + disponibles[i].addres_street + disponibles[i].addres_neighborhood + disponibles[i].city + "</h4>";
        content += "<div class='col-12'>";
        content += "<p>Fecha</p>" + "<p>" + disponibles[i].date + "</p>";
        content += "</div>";
        content += "<p>Hora</p>" + "<p>" + disponibles[i].hour + "</p>";
        content += "<p>Duración</p>" + "<p>" + disponibles[i].lenght + "</p>" + "<p>horas</p>";
        content += "</div>";
        content += "</div>";
        content += "</div>"

    }
    document.getElementById("result1").innerHTML = content;
}

function myMap(){
  var mapOptions ={
    center: new google.maps.LatLng(19.412901, -99.180274),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}




