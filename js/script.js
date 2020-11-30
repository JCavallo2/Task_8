$(document).ready(function(){
    $("#in").submit(function(sub){
       
        
        sub.preventDefault();

        let text = $(this).find('input[name="text"]').val();
        
        $("#tasks").empty().prepend(text);
    });
    
});