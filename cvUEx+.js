// ==UserScript==
// @name         cvUEx+
// @namespace    http://campusvirtual.unex.es
// @version      0.1
// @description  Script que ayudará a mejorar la visibilidad del campus!
// @author       Sergio Casero Hernández
// @match        http://campusvirtual.unex.es/zonauex/avuex/course/view.php?id=*
// @grant        none
// @require 	 http://code.jquery.com/jquery-latest.js 
// ==/UserScript==

$(document).ready(function(){
    $("head").append('<script src="https://apis.google.com/js/platform.js" async defer></script>');    
    
    var link = window.document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'http://sergiocasero.es/cvuex_styles.css';
    document.getElementsByTagName("HEAD")[0].appendChild(link);
    
    var header = $("#menuwrap");
    header.addClass("header");
    header.attr("id","menuwrap1");
    var actividades = $(".activityinstance");
    
    for(var i = 0; i < actividades.length; i++){
        /*alert(actividades.eq(i).attr("class"));*/
        var div = actividades.eq(i);
        var imagen = div.find("img");
        var enlace = div.find("a");
        var tipo = imagen.attr("src");
        
        var padre = div.parent();
        padre = padre.parent();
        padre = padre.parent();
        padre.addClass("customClass");
        
        if(tipo.indexOf("quiz") >= 0){
			padre.addClass("testClass");           
        }	
        if(tipo.indexOf("assign") >= 0){
			padre.addClass("assignClass");
        }
        if(tipo.indexOf("core") >= 0){
			padre.addClass("coreClass");
            var gDrive = '<div class="contenedorDrive"> <div class="g-savetodrive" data-src="' + enlace.attr("href") + '" data-filename="' + enlace.text() + '" data-sitename="cvUEx+"> </div></div>';
        	padre.append(gDrive);
        }
        
        if(tipo.indexOf("choice") >= 0){
			padre.addClass("choiceClass");
        }
        if(tipo.indexOf("forum") >= 0){
			padre.addClass("forumClass");
        }
        
        if(tipo.indexOf("url") >= 0){
			padre.addClass("urlClass");
        }
        
        if(tipo.indexOf("page") >= 0){
        	padre.addClass("pageClass");
        }

        if(tipo.indexOf("folder") >= 0){
            padre.addClass("folderClass");
        }
    }
});