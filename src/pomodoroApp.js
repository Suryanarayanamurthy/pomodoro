

var app = angular.module('pomoapp',[]);
app.controller("AppController",function(){

    function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return (
      (h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s
    ); 
  }
    var time;
    $scope.updateSecessionTime = function(time)
    {
        
    }
    
});

(function () {
'use strict';
var app = angular.module('pomodoroApp',[]);
app.controller("AppController", function() {
  this.test = "test";

});
    var breaktime = 5;
    var secessiontime{
        var time =25,

    }
    app.controller("BreakController",function(){
        var addbreaktime=function(){breaktime++};
        var subbreaktime=function(){breaktime--};
        });
    app.controller("SecessionController",function(){
        var addsecessiontime = function(){secessiontime++};
        var subsecessiontime = function(){secessiontime--};
        });

    app.controller("timecontrols",function(){
//        pause

    });
})();
