/**
 * Created by xiaoxia on 2017/3/22.
 */
app.controller("myCtrl",function($scope,$http){
    $http.get("src/js/data.json").success(function(data){
        $scope.names=data
    })
})