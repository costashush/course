describe('listCtrl1', function () {
    beforeEach(module('myApp'));

    var homesService;

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));


    beforeEach(inject(function (_homesService_) {
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

        var sortedList = homesService.sort('price');
        var sortedListFlag = checkSortByPrice(sortedList);
        expect(sortedListFlag).toEqual(true);

    });

    it('check markers amount', function () {
        var homes = homesService.getData($controller);
        var markers = $controller.homesService.getMarkers();
        expect(markers.length).toEqual(10);

    });


    // it('check markers amount after 1 next', function () {
    //     homesService.nextHomes();
    //     var homes = homesService.getData();
    //     homesService.initMap1(homes);
    //     var markers = homesService.getMarkers();
    //     expect(markers.length).toEqual(10);

    // });

    // it('check that id start from 11', function () {

    //     homesService.sort("id");
    //     homesService.nextHomes();
    //     var homesNext = homesService.getData();

    //     expect(homesNext[0].id).toEqual(11);

    // });

    // it('check that id end is 20', function () {
    //     homesService.sort("id");
    //     homesService.nextHomes();
    //     var homesNext = homesService.getData();

    //     expect(homesNext[homesNext.length - 1].id).toEqual(20);

    // });




    // it('check that id start from 1  for prev', function () {
    //     homesService.sort("id");
    //     homesService.nextHomes();
    //     homesService.prevHomes();
    //     var homesPrev = homesService.getData();

    //     expect(homesPrev[0].id).toEqual(1);

    // });

    // it('check that id end is 10 for prev', function () {
    //     homesService.sort("id");
    //     homesService.nextHomes();
    //     homesService.prevHomes();
    //     var homesPrev = homesService.getData();

    //     expect(homesPrev[homesPrev.length - 1].id).toEqual(10);

    // });



});

