var subj = "i polli";

var randomItem = function(lista) {
	return lista[Math.floor(Math.random()*lista.length)];
}

// Fixed
var sconv  		= "Ho seguito %1$s fino ai loro nidi. Quello che ho visto, m'ha sconvolto.";
var turba  		= "La vista de %1$s ancora mi turba.";
var rovina 		= "%1$s sono la rovina dei viventi.";
var ossa   		= "A ricordo dell'incontro, rimane solo un mucchietto d'ossa.";
var poverinoi 	= "Se tali creature dovessero esistere, per noi non ci sarebbe più scampo.";
var uomo		= "Spero nessun uomo debba mai incontrarli.";
var horadrim 	= "La sola vista de %1$s ha portato uno degli horadrin alla pazzia.";
var ph1 		= "%1$s sono stati assemblati da un male superiore.";
var ph2 		= "Essi si aggirano in branchi %2$s attaccando %3$s viandanti.";
var ph3 		= "Queste %5$s creature sono mutate da %2$s sortilegi.";
var ph4		 	= "E' risaputo che %1$s sono di origine demoniaca.";
var ph5 		= "Si nutrono della loro stessa %6$s prole.";


var Fixed = [sconv, turba, rovina];

// Aggettivi Mob
var AggettiviMobSing 	= ["turpe","maligno","oscuro","caracollante","goffo","lento"]
var AggettiviMobPlur 	= ["turpi","maligni","oscuri","caracollanti","goffi","lenti"]
var AggettiviMobSingFem = ["turpe","maligna","oscura","caracollante","goffa","lenta"]
var AggettiviMobPlurFem	= ["turpi","maligne","oscure","caracollanti","goffe","lente"]

var AggettiviViandanti = ["ignari","innocenti","stolti"]

// $1 = Soggetto
// $2 = Aggettivi Plurali
// $3 = Aggettivi Viandanti
// $4 = Aggettivi Singolari
// $5 = Aggettivi Plurali Femminili
// $6 = Aggettivi Singolari Femminili
var AssemblatoreDemoniaco = function(frase) {
	var frasotta = randomItem(frase);
	var i = frase.indexOf(frasotta);
	if(i != -1) {
		frase.splice(i, 1);
	}
	return sprintf(frasotta,subj,randomItem(AggettiviMobPlur),randomItem(AggettiviViandanti),
		randomItem(AggettiviMobSing),randomItem(AggettiviMobPlurFem),randomItem(AggettiviMobSingFem));
}

var MaleSuperiore = function() {
	var Opening = [turba,rovina,ph1,ph4,sconv];
	var Mid = [ph2,ph3,ph5];
	var End = [ossa,poverinoi,uomo];
	var result = "";
	result += AssemblatoreDemoniaco(Opening) + "<br>";
	result += AssemblatoreDemoniaco(Mid)  + "<br>";
	result += AssemblatoreDemoniaco(Mid)  + "<br>";
	result += AssemblatoreDemoniaco(End)  + "<br>";
	return result;
}

var chiedi = function() {
	var desc = document.getElementById("desc");
	desc.innerHTML = MaleSuperiore();
}

var inputText = document.getElementById("descbox");

var button = document.getElementById("cainchiedi");
button.addEventListener('click', function(){
	subj = inputText.value;
    chiedi();
});