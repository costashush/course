app.controller('dicControler', ['dicService', function(dicService) {


    this.dicService = dicService;
    this.initRouter = dicService.initRouter();

}]);