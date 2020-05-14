var now = new Date();
var annee = now.getFullYear();
var heure = now.getHours();

var ane = document.getElementById('year');
ane.innerHTML = annee;
var le = document.getElementById('hour');
le.innerHTML = (`| ${heure} hrs`);