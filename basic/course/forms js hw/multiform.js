window.onload = function () {

    //********************BUTTON TRIGERING   */
    // var buttons = document.getElementsByTagName('button');
    // 	if (buttons.length > 0) {
    // 		buttons[0].onclick = getAllValues;
    // 	}


    var forms = document.getElementsByTagName('form');

    for (var j = 0; j < forms.length; j++) {
        var form = forms[j];
        var inputs = form.getElementsByTagName('input');
        var newObj = {};
        for (var i = 0; i < inputs.length; ++i) {
            var inp = inputs[i];
            //***************SUBMIT TRIGERING */
            if (inp.type == "submit") {
                inp.onclick = getAllValues;
            }
            inp.onchange = function () {
                console.log(this.name + ' = ' + this.value);
                newObj[this.name] = this.value;
                console.log(newObj);
                localStorage.newObject = JSON.stringify(newObj);
            };
        }

        if (localStorage.newObject) {


            var newObj = JSON.parse(localStorage.newObject);

            for (names in newObj) {
                document.getElementsByName(names)[0].value = newObj[names];
            }
            alert("loaded from storege")
        }
        if (localStorage['formjs']) {

            alert('loading:\n' + localStorage['formjs']);
            localStorage['formjs'] = '';
        }
    }
};
function getAllValues(e) {

    var form = document.getElementById('formjs');

    var inputs = document.getElementsByTagName('input');

    var isOK = true;
    var str = '';
    for (var i = 0; i < inputs.length; ++i) {
        var inp = inputs[i];
        str += inp.name + ' = ' + inp.value + '\n';
        isOK = isOK && (inp.value !== '');
    }
    if (!isOK) {
        e.preventDefault();
    }
    var myObj = {
        formID: 'formjs',
    };
    localStorage.newObject = {};
    localStorage['formjs'] = str;
    alert('sending:\n' + str);
}