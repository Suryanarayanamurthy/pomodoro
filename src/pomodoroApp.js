
(function () {
'use strict';
var app = angular.module('pomodoroApp',[]);
app.controller("TestController", function() {
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
