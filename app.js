//IIFE
(function(){
  'use strict';

//create angular module LunchCheck
  var app = angular.module('LunchCheck',[]);
  //create angular controller 'LunchCheckController'
  app.controller('LunchCheckController', LunchCheckController);
  LunchCheckController.inject = ['$scope']; //inject scope
  function LunchCheckController ($scope){

    //function to check on submit
    $scope.calculate = function(){
      //reset the flags
      $scope.isNoData=false;
      $scope.isSucess=false;
      $scope.isError =false;

      //get the input given by user
      var inputStr = $scope.lunchItems;

      if(!inputStr){
        $scope.isNoData =true;   //if input is Empty then show 'Please enter data first'
      }else{
        var  count=0;
        var arr = inputStr.split(","); //split the string on comma

        //disregard the Empty string i.e. ',,'
        for(var i=0;i<arr.length; i++){
          if(arr[i]){
            count++; //count only when there is a string present
          }
        }

        if(count<=3 && count >0){
          $scope.isSucess=true; //more than 1 and less than 3 then show "Enjoy!"
        }else if(count ==0){
          $scope.isNoData=true; //if user entered only ',,' then count as empty
        }
        else{
          $scope.isError = true; //more than 3. show "Too much!"
        }
      }
    }
  }
})();
