
(function(){

var app = angular.module('pomodoroApp',[]);
app.controller("TestController", function() {
  this.test = "test";
    
});
    var breaktime = 5;
    var secessiontime = 25;
    app.controller("BreakController",function(){
        addbreaktime=function(){breaktime++};
        subbreaktime=function(){breaktime--};
        
        });
    app.controller("SecessionController",function(){
        addsecessiontime = function(){secessiontime++};
        subsecessiontime = function(){secessiontime--};
        });
    
    app.controller("",function(){
    });
})();
