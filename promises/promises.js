var doActionPromise = new Promise(function(resolve, reject) {

    if (isOk()) {
        resolve('All good');
    } else {
        reject('crap!!');
    }
});


doActionPromise
    .then(function(result) {

    })

















//////////////////
var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.onerror = reqError;
oReq.open('get', "http://api.icndb.com/jokes/random/1", true);
oReq.send();



function reqListener(res) {
    var data = JSON.parse(this.responseText);

    console.log(data.value[0].joke);
}

function reqError(err) {

    console.log('Fetch Error :-S', err);
}