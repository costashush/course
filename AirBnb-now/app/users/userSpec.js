describe('listCtrl1', function () {
    beforeEach(module('myApp'));

    var usersService;


    beforeEach(inject(function (_usersService_) {
        usersService = _usersService_;

    }));


    it('users are not null', function () {
        expect(usersService.getData()).not.toBe(null);

    });




    it('check that image url is return for exist user', function () {
        $scope = {};
        var url = usersService.getImg(2);
        expect(url).not.toBe(null);

    });

    it('check that null is return for user that does not exists', function () {
        $scope = {};
        var url = usersService.getImg(-1);
        expect(url).toBe(null);

    });







    it('users array needs to be 10', function () {
        $scope = {};
        var users = usersService.getData();
        expect(users.length).toEqual(10);

    });






});

