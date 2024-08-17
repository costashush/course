describe('listCtrl1', function () {
    beforeEach(module('myApp'));

    var homesService;
    var $controller;


    beforeEach(inject(function (_$controller_, _homesService_) {
        $controller = _$controller_;
        homesService = _homesService_;

    }));



    it('check the sort by price', function () {
        var checkSortByPrice = function (homes) {
            for (var i = 0; i < homes.length - 1; i++) {
                if (homes[i].price > homes[i + 1].price) {
                    return false;
                }
            }
            return true;
        }

        $scope = {};
        var listCtrl = $controller('listController', { $scope: $scope });
        var sortedList = listCtrl.sort( 'price');
        var sortedListFlag = checkSortByPrice(sortedList);
        expect(sortedListFlag).toEqual(true);

    });
});
