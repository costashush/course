    $(document).ready(function() {

        var socket;
        socket = io.connect();
        socket.on('dataload', function(data) {
            display(data)
                // console.log(data);

        });


        //   function submitData() {
        //       var data = document.getElementById("inputdata").value;
        //       socket.emit('submit', data);
        //   };


    });

    function display(categories) {

        for (var i = 0; i < categories.length; i++) {


            var link = $('<a>', { "text": categories[i]['categoties'], href: "/" + categories[i]['id'] });
            var newCateg = $('<h3>');
            newCateg.append(link);
            $('#main').append(newCateg);

        }

    }