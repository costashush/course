angular.module('myApp').component('houseOne', {
<<<<<<< HEAD
    templateUrl: 'house-template.html',
    bindings: {
        house: '='
    }
});
// template: `<div>
//                 <p>id:{{$ctrl.house['id']}} </p>
//                 <p>rooms:{{$ctrl.house.rooms}} </p>
//                 <p>price: {{$ctrl.house.price}}</p>
//                 <p>description:{{$ctrl.house.description}}</p>
//                     </div>`
// console.log(ctrl)
//  <p>city: {{ ctrl.house.city }}</p>
//  <p>price: {{ $ctrl.house.price }}</p>
=======
        bindings: {
            house: '=info'
        },
        template: `<div>
                <p>id:{{$ctrl.house['id']}} </p>
                <p>rooms:{{$ctrl.house.rooms}} </p>
                <p>price: {{$ctrl.house.price}}</p>
                <p>description:{{$ctrl.house.description}}</p>
               
                    </div>`
    })
    // console.log(ctrl)
    //  <p>city: {{ ctrl.house.city }}</p>
    //  <p>price: {{ $ctrl.house.price }}</p>
>>>>>>> 38746ce01de04f2bc7cc8e09fbebdd3f1b4b9fa3
