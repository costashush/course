window.onload=implementSettings;




var settingobject = {
    tags: {
        body: { padding: '20px 40px', fontFamily: 'Arial' },
        h1: { color: 'red', fontSize: 30, fontWeight: 'bold' },
        p: { color: '#444', fontSize: 16 }
    },
    ids: {
        main: { background: '#F4F4F4 ', padding: '20px 30px', border: '1px solid #CCC' }
    },
    selectors: {
        "aside p": { color: 'blue', size: 24 },
        "#main h1": { marginTop: 0 }
    }
}

// var q = Object.keys(settingobject.tags);
// console.log(q);


// function implementSettingsObject(item,properties){
// document.getElementsByTagName(item)[i].style    




// }

function implementSettings() {

    var tags = settingobject.tags;


    
    for (var tg in tags) {   
        var items = document.getElementsByTagName(tg);
        var properties=tags[tg];
           
             for(var pr in properties){
        
        
        for (var i = 0; i < items.length; i++) {

                
            document.getElementsByTagName(tg)[i].style[pr]=properties[pr];    
                }

            // implementSettingsObject(items[i],properties)

            
            

        }

    }



}




    



