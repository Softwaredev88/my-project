$(document).ready(function() {
    $("#AM").click(function(){
        $('#output').load('sabah.html');
    });
    $("#PM").click(function(){
        $('#output').load('masa.html');
     });
     $("#QUR").click(function(){
         $("#output").load('quran.html');
     });
     $("#QURS").click(function(){
         $("#output").load('qurSound.html');
     });
});   