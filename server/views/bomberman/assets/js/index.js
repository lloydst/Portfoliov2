var app = angular.module('bombermanApp',[]);
app.controller('bomberControl', function($scope) {
    $scope.xcord = ['1','2','3','4','5','6','7','8','9','10','11'];
    $scope.ycord = ['1','2','3','4','5','6','7','8','9','10','11'];

    var xcord = $scope.xcord;
    var ycord = $scope.ycord;
    var x = xcord[x];
    var y = ycord[y];

    var xplayer = (xplayer===undefined) ? 5: xplayer;
    var yplayer = (yplayer===undefined) ? 5: yplayer;
    //var xbomb = ;
    //var ybomb = ;

    // makes playerlocation visable
    function playerlocation() {
        $('.path').removeClass("player");
        $('.' + yplayer +' .' + xplayer).addClass("player");

    }
    angular.element(document).ready(function () {
        xplayer = 5;
        yplayer = 5;
        playerlocation();

    });

    function left() {
        if(xplayer == 3){
            if(yplayer == 2){

                 return xplayer=3;
            } else if(yplayer == 4){

                 return xplayer=3;
            } else if(yplayer == 6){

                 return xplayer=3;
            } else if(yplayer == 8){

                 return xplayer=3;
            } else if(yplayer == 10){

                 return xplayer=3;
            }
        } else if(xplayer == 5){
            if(yplayer == 2){

                 return xplayer=5;
            } else if(yplayer == 4){

                 return xplayer=5;
            } else if(yplayer == 6){

                 return xplayer=5;
            } else if(yplayer == 8){

                 return xplayer=5;
            } else if(yplayer == 10){

                 return xplayer=5;
            }
        } else if(xplayer == 7){
            if(yplayer == 2){

                 return xplayer=7;
            } else if(yplayer == 4){

                 return xplayer=7;
            } else if(yplayer == 6){

                 return xplayer=7;
            } else if(yplayer == 8){

                 return xplayer=7;
            } else if(yplayer == 10){

                 return xplayer=7;
            }
        } else if(xplayer == 9){
            if(yplayer == 2){

                 return xplayer=9;
            } else if(yplayer == 4){

                 return xplayer=9;
            } else if(yplayer == 6){

                 return xplayer=9;
            } else if(yplayer == 8){

                 return xplayer=9;
            } else if(yplayer == 10){

                 return xplayer=9;
            }
        } else if(xplayer == 11){
            if(yplayer == 2){

                 return xplayer=11;
            } else if(yplayer == 4){

                 return xplayer=11;
            } else if(yplayer == 6){

                 return xplayer=11;
            } else if(yplayer == 8){

                 return xplayer=11;
            } else if(yplayer == 10){

                 return xplayer=11;
            }
        }

        if (xplayer <= 1) {

            xplayer = 1;

        } else {
            var newPlayer = xplayer - 1;
            xplayer = newPlayer;
            playerlocation()
        }

    }
    function right() {
        if(xplayer == 1){
            if(yplayer == 2){

                 return xplayer=1;
            } else if(yplayer == 4){

                 return xplayer=1;
            } else if(yplayer == 6){

                 return xplayer=1;
            } else if(yplayer == 8){

                 return xplayer=1;
            } else if(yplayer == 10){

                 return xplayer=1;
            }
        } else if(xplayer == 3){
            if(yplayer == 2){

                 return xplayer=3;
            } else if(yplayer == 4){

                 return xplayer=3;
            } else if(yplayer == 6){

                 return xplayer=3;
            } else if(yplayer == 8){

                 return xplayer=3;
            } else if(yplayer == 10){

                 return xplayer=3;
            }
        } else if(xplayer == 5){
            if(yplayer == 2){

                 return xplayer=5;
            } else if(yplayer == 4){

                 return xplayer=5;
            } else if(yplayer == 6){

                 return xplayer=5;
            } else if(yplayer == 8){

                 return xplayer=5;
            } else if(yplayer == 10){

                 return xplayer=5;
            }
        } if(xplayer == 7){
            if(yplayer == 2){

                 return xplayer=7;
            } else if(yplayer == 4){

                 return xplayer=7;
            } else if(yplayer == 6){

                 return xplayer=7;
            } else if(yplayer == 8){

                 return xplayer=7;
            } else if(yplayer == 10){

                 return xplayer=7;
            }
        } else if(xplayer == 9){
            if(yplayer == 2){

                 return xplayer=9;
            } else if(yplayer == 4){

                 return xplayer=9;
            } else if(yplayer == 6){

                 return xplayer=9;
            } else if(yplayer == 8){

                 return xplayer=9;
            } else if(yplayer == 10){

                 return xplayer=9;
            }
        } else if(xplayer == 11){
            if(yplayer == 2){

                 return xplayer=11;
            } else if(yplayer == 4){

                 return xplayer=11;
            } else if(yplayer == 6){

                 return xplayer=11;
            } else if(yplayer == 8){

                 return xplayer=11;
            } else if(yplayer == 10){

                 return xplayer=11;
            }
        }

        if (xplayer >= 11) {

            xplayer = 11;
            playerlocation()
        } else {
            var newPlayer = xplayer + 1;
            xplayer = newPlayer;
            playerlocation()
        }

    }
    function up() {
        if(yplayer == 3){
            if(xplayer == 2){

                 return yplayer=3;
            } else if(xplayer == 4){

                 return yplayer=3;
            } else if(xplayer == 6){

                 return yplayer=3;
            } else if(xplayer == 8){

                 return yplayer=3;
            } else if(xplayer == 10){

                 return yplayer=3;
            }
        } else if(yplayer == 5){
            if(xplayer == 2){

                 return yplayer=5;
            } else if(xplayer == 4){

                 return yplayer=5;
            } else if(xplayer == 6){

                 return yplayer=5;
            } else if(xplayer == 8){

                 return yplayer=5;
            } else if(xplayer == 10){

                 return yplayer=5;
            }
        } else if(yplayer == 7){
            if(xplayer == 2){

                 return yplayer=7;
            } else if(xplayer == 4){

                 return yplayer=7;
            } else if(xplayer == 6){

                 return yplayer=7;
            } else if(xplayer == 8){

                 return yplayer=7;
            } else if(xplayer == 10){

                 return yplayer=7;
            }
        } else if(yplayer == 9){
            if(xplayer == 2){

                 return yplayer=9;
            } else if(xplayer == 4){

                 return yplayer=9;
            } else if(xplayer == 6){

                 return yplayer=9;
            } else if(xplayer == 8){

                 return yplayer=9;
            } else if(xplayer == 10){

                 return yplayer=9;
            }
        } else if(yplayer == 11){
            if(xplayer == 2){

                 return yplayer=11;
            } else if(xplayer == 4){

                 return yplayer=11;
            } else if(xplayer == 6){

                 return yplayer=11;
            } else if(xplayer == 8){

                 return yplayer=11;
            } else if(xplayer == 10){

                 return yplayer=11;
            }
        }
        if (yplayer <= 1) {

            yplayer = 1;
            playerlocation()
        } else {
            var newPlayer = yplayer - 1;
            yplayer = newPlayer;
            playerlocation()
        }

    }
    function down() {

        if(yplayer == 1){
            if(xplayer == 2){

                 return yplayer=1;
            } else if(xplayer == 4){

                 return yplayer=1;
            } else if(xplayer == 6){

                 return yplayer=1;
            } else if(xplayer == 8){

                 return yplayer=1;
            } else if(xplayer == 10){

                 return yplayer=1;
            }
        } else if(yplayer == 3){
            if(xplayer == 2){

                 return yplayer=3;
            } else if(xplayer == 4){

                 return yplayer=3;
            } else if(xplayer == 6){

                 return yplayer=3;
            } else if(xplayer == 8){

                 return yplayer=3;
            } else if(xplayer == 10){

                 return yplayer=3;
            }
        } else if(yplayer == 5){
            if(xplayer == 2){

                 return yplayer=5;
            } else if(xplayer == 4){

                 return yplayer=5;
            } else if(xplayer == 6){

                 return yplayer=5;
            } else if(xplayer == 8){

                 return yplayer=5;
            } else if(xplayer == 10){

                 return yplayer=5;
            }
        } else if(yplayer == 7){
            if(xplayer == 2){

                 return yplayer=7;
            } else if(xplayer == 4){

                 return yplayer=7;
            } else if(xplayer == 6){

                 return yplayer=7;
            } else if(xplayer == 8){

                 return yplayer=7;
            } else if(xplayer == 10){

                 return yplayer=7;
            }
        } else if(yplayer == 9){
            if(xplayer == 2){

                 return yplayer=9;
            } else if(xplayer == 4){

                 return yplayer=9;
            } else if(xplayer == 6){

                 return yplayer=9;
            } else if(xplayer == 8){

                 return yplayer=9;
            } else if(xplayer == 10){

                 return yplayer=9;
            }
        }

        if (yplayer >= 11) {

            yplayer = 11;
            playerlocation()
        } else {
            var newPlayer = yplayer + 1;
            yplayer = newPlayer;
            playerlocation()
        }

    }

    function bomb(){
        var bombLoc = $('.player');
        bombLoc.addClass("bomb");
        setTimeout(function() {
            bombLoc.removeClass("bomb");
            bombLoc.addClass("explosion");
            setTimeout(function() {
                if (bombLoc.hasClass("player")) {
                    alert("You died")
                }
                bombLoc.removeClass("explosion");
            }, 1000);
        }, 3000);
    }
        //   function   key keyid   type:
        //      a    65  left    letter
        // ''   w    87  up      letter
        // ''   s    83  down    letter
        // ''   d   68  right   letter
        // ''   bomb    32  space   spaceBar

        angular.element(document).keydown(function(event) {
            // alert( "Key: " + event.which );
            if (event.which === 65) {
                left()
                playerlocation()
            } else if (event.which === 87) {
                up()
                playerlocation()
            }else if (event.which === 83) {
                down()
                playerlocation()
            } else if (event.which === 68) {
                right()
                playerlocation()
            } else if (event.which === 32) {
                bomb()
                playerlocation()
            }
        });



});
