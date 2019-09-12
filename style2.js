var persona = []
var acc = document.getElementsByClassName("accordion");
var i;
var set;
var loadFile = function  (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    set=image.src;
	
};
$(document).on('DOMContentLoaded', function () {
	$('#button').on('click', function (e) {
		e.preventDefault();
        MyFunction();
        $(document).on('click', '.close', function (e) {
            var element =$(event.target)
            var b= element.parent().parent();
            var y = $("#data-index")		
            //$('#todoList').find(event.target.parentNode.parentNode).remove();	
            b.remove()		
            CancelFunction(persona, y);
        });
        
        });$ (document).on("click",'.accordion', function(e) {
            var element =$(event.target)
            var b= element.parent().parent();
           var c = $("#panel");
            this.classList.toggle("active");

            });
            
       })
       
    
function MyFunction(){
        var n = $('#nome').val();
        var c = $('#cognome').val();
        var data = $('#data').val();
        var cit = $('#citta').val();
        var cap = $('#cap').val();
        var f = set
        

        if (n === '') {
            alert("Scrivi Qualcosa!");
        } if (c === '') {
            alert("Scrivi Qualcosa!");
        }if (data === '') {
            alert("Scrivi Qualcosa!");
        }if (cit === '') {
            alert("Scrivi Qualcosa!");
        }if (cap === '') {
            alert("Scrivi Qualcosa!");
        }else{
            persona.push({
                nome: n,cognome: c,data: data,citta: cit,cap: cap,foto: f,
            });
            $("#resiList").html('');
            $.each(persona,function(index){
            var t = returnHtml(persona[index],index); 
            $("#resiList").append(t);      
		});
        }
    }
    function returnHtml(persona,index){
        
        return '<li class="lista"  data-index=' + index + '> <p style="text-align:left;"> '+'<button class="accordion">' + '<center>'+persona.nome+' <br>'+persona.cognome+'</center><div class="panel">Nome:'+persona.nome+'<br>Cognome:' +persona.cognome+'<br>Data di nascità:' +persona.data+'<br>Città:' +persona.citta +'<br>Cap:'+persona.cap +'<img class="foto" src="'+persona.foto +'" width="200"><br></div>' +'<span class="close" style="float:right;">\u00D7</span> </p>  </li></button>';
        
        
    
    }

    function CancelFunction(persona, data) {
        persona.splice(data, 1);
    }
    