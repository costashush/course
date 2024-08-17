window.onload = function (){

        var form = document.getElementsByTagName("form");
        for(var j = 0 ; j < form.length; j++){
            var input = form[j].getElementsByTagName("input");
            var formObj = {};
            if(localStorage[form[j].id]){
                formObj =JSON.parse(localStorage[form[j].id]);
                for(var i = 0 ;i < input.length ;++i){  
                    if( (formObj[input[i].name]) != (undefined) )
                    input[i].value = formObj[input[i].name];
                }
           } 
            setInputs(form[j],input,formObj);
       }
}
function setInputs(form,input,formObj){  
    for(var k = 0 ; k < input.length-1 ; ++k){ // loops that gives all input onchange function 
           input[k].onchange =function(){ 
           formObj[this.name] = this.value;
           localStorage[form.id] =JSON.stringify(formObj);
        }
    }
      input[input.length-1].onclick= function() { // set submit ( allways last input at form)
      form.reset();
    }   
}

