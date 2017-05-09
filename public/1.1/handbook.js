var nArray = [];
var corInputFile = "";
var divArr = [];
var theInputFile = "";


window.onload = function() {
   // var fileInput = document.getElementById('fileInput');
var fileDisplayArea = document.getElementById('fileDisplayArea');
$.get( "index.html" )
  .done(function( data ) {
    theInputFile = data;
      displayHandbook();
  });
            
$('#submitbtn').click(function() {
        
        var htmldoc = document.documentElement.outerHTML;
        var name = $('#inputname').val();
        var email = $('#inputemail').val();
        if (name == ""){
            alert("Please fill out your name");
            return;
        }else{
            
             $.post("http://192.168.0.100:3000/handbook",{user: name, email: email, data: htmldoc}, function(data){
            if(data==='success')
              {
                alert("save success");
                $('#submitbtn').attr("disabled", true);
              }
          });
        }
        
       
        
    });
window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = 'It looks like you have been editing something. '
                            + 'If you leave before saving, your changes will be lost.';

    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
});
}

function displayHandbook(){
    
            theInputFile = replaceAll(theInputFile,"data-src","src");
    
            fileDisplayArea.innerHTML = theInputFile;
               
        //add the reveal div to the dom
            var div = document.createElement("div");
            div.innerHTML = $('div.reveal')[0].innerHTML;
            document.getElementById("main").appendChild(div);
             
             
           
        //create a zlide wrapper for every slide and 
            $("section").wrap("<zlide></zlide>");
            $(".stack").parent().addClass("stack");
            $("section.stack").contents().unwrap();
            
        //add handbook notes to a new div     
            for (i = 0; i < $('div.handbook').length; i++) 
            {
               nArray[i] = $('div.handbook')[i].innerHTML;
            }
           
            for (i = 0; i < $('section').length; i++)
            {
                divArr[i] = document.createElement("div");
                divArr[i].setAttribute('class', 'hdiv');

                $('zlide:not(.stack)')[i].appendChild(divArr[i]);
                $('div.hdiv')[i].innerHTML = nArray[i];
            }  
             
        //clear out the old dom content 
             fileDisplayArea.innerHTML = "";
             
        //remove the slblock divs
            $('div.sl-block').removeAttr("style");
            $('div.sl-block-content').removeAttr("style");
            // $('div.sl-block').contents().unwrap();
            // $('div.sl-block-content').contents().unwrap();
        //remove logo and cpright
            $( "p:contains('Proprietary and confidential')" ).remove();
            $('zlide').find('.handbook').remove();
            
        //Add Note input field
            $('zlide').append("<div class='notesfield'></div>");
    
            var notesfield =$('.notesfield');
            for (i=0; i < notesfield.length; i++){
                notesfield[i].innerHTML = '<button type="button" id="pb'+i+'" class="postbutton" onclick="postnotes('+i+')">Post</button>';
            };
            notesfield.prepend("<textarea class='txtarea'> Notes </textarea>");
            notesfield.prepend('<div class="postnotes"></div>');
            
            //$('.notesfield').append('<button type="button" class="postbutton" onclick="postnotes(this)">Post</button>');
           
               
            
        //remove notes and handbook notes for stack slides
            $('zlide.stack').children('.notesfield').remove()
            $('zlide.stack').children('.hdiv').remove()
   
        //delete all empty paragraphs
            $("*").filter(function() {
                return $.trim($(this).html()) == '&nbsp;';
            }).remove();
         
             
        //move headings to the top of the section/slide
           for (i=0; i < $("section:has(h2)").length; i++)
             {
                var h2section = $("section:has(h2)")[i];
                var h2 = $(h2section).find("h2")[0];
                h2.remove();
                
                 try{
                    h2section.prepend(h2); 
                    } catch(err){console.log(i+""+h2+""+err);break;}   
             }
             //same but h1
             for (i=0; i < $("section:has(h1)").length; i++)
             {
                var h2section = $("section:has(h1)")[i];
                var h2 = $(h2section).find("h1")[0];
                h2.remove();
                
                 try{
                    h2section.prepend(h2); 
                    } catch(err){console.log(i+""+h2+""+err);break;}   
             }

             
             
        //set the correct background color
            for (i=0; i < $('section[data-background-color]').length; i++){
                var theSlide = $('section[data-background-color]')[i];
                var color = $(theSlide).attr("data-background-color");
                $(theSlide).css("background-color", color);
                console.log("the color is now "+color);
             } 
             
        //set the correct background image
             for (i=0; i < $('section[data-background-image]').length; i++){
                var theSlide = $('section[data-background-image]')[i];
                var image = $(theSlide).attr("data-background-image");
                $(theSlide).css("background-image", "url('"+image+"')");
                console.log("the color is now "+image);
             }
             
        //Give light/dark class based on bg color
             for(i=0; i <$('section').length; i++){
                 var theSec = $('section')[i];
                 $(theSec).colourBrightness();
             }
             

}


function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function countingCorr(thecount){
    if (thecount==0)
    {
        return thecount;
    }
    else {
        return thecount -1; 
    }
}

function postnotes(id){
    console.log(id);
    var placeToPut = $( '.postnotes');
    var theInputTxt = $('.txtarea');
    
    if (placeToPut[id].innerHTML != ""){
        var r = confirm("This will override current notes on this slide. Are you sure?");
        if (r == true) {
            placeToPut[id].innerHTML = theInputTxt[id].value.replace(/\n/g, '<br/>');
            //theInputTxt[id].value = "";
            
        } else {
            return;
        }
    }
    
    placeToPut[id].innerHTML = theInputTxt[id].value.replace(/\n/g, '<br/>');
    //theInputTxt[id].value = "";
   
};


