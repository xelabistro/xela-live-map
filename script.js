// Create the map
const map = L.map('map', {
    zoomControl: true,
    worldCopyJump: true
}).setView([25, 10], 2);

// Dark map
L.tileLayer(
'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
{
    attribution:'©OpenStreetMap ©CartoDB',
    subdomains:'abcd',
    maxZoom:19
}).addTo(map);

// Gold icon
const goldIcon = L.divIcon({
    className: 'goldPin',
    html: `
        <div style="
            width:16px;
            height:16px;
            background:#d4af37;
            border-radius:50%;
            box-shadow:0 0 18px #d4af37;
            border:2px solid white;
        "></div>
    `,
    iconSize:[16,16],
    iconAnchor:[8,8]
});

// Demo locations
const guests=[

{
city:"Duncanville",
country:"USA",
lat:32.6518,
lng:-96.9083
},

{
city:"Dallas",
country:"USA",
lat:32.7767,
lng:-96.7970
},

{
city:"Fort Worth",
country:"USA",
lat:32.7555,
lng:-97.3308
},

{
city:"Mexico City",
country:"Mexico",
lat:19.4326,
lng:-99.1332
},

{
city:"Toronto",
country:"Canada",
lat:43.6532,
lng:-79.3832
},

{
city:"Berlin",
country:"Germany",
lat:52.5200,
lng:13.4050
},

{
city:"Tokyo",
country:"Japan",
lat:35.6764,
lng:139.6500
}

];

guests.forEach(g=>{

L.marker([g.lat,g.lng],{
icon:goldIcon
})

.addTo(map)

.bindPopup(

"<b>"+g.city+"</b><br>"+g.country

);

});

document.getElementById("visitors").innerHTML=guests.length;

document.getElementById("cities").innerHTML=guests.length;

document.getElementById("states").innerHTML=4;

document.getElementById("countries").innerHTML=4;

document.getElementById("latestVisitor").innerHTML="Berlin, Germany";
