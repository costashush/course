angular.module('myApp').component('singleHouse', {
    bindings: {
        house: '=info'
    },
    template: `<div>
                     <p>city: {{ $ctrl.house.city }}</p>
                     <p>price: {{ $ctrl.house.price }}</p>
                </div>`
})