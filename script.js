window.addEventListener("load", eventWindowLoaded, false);
      function eventWindowLoaded() {
        canvasApp();
      } 
      function canvasSupport(e) {
        return !!e.getContext;
      } 

      function canvasApp() {
        var canvas = document.getElementById("matrix");

        if (!canvasSupport(matrix)) {
          return;
        }

        var ctx = canvas.getContext("2d");
        var w = (canvas.width = window.innerWidth);
        var h = (canvas.height = window.innerHeight);
        var yPosition = Array(300).join(0).split("");


        function runMatrix() {
           if (typeof Game_Interval != "undefined") clearInterval(Game_Interval);
            Game_Interval = setInterval(drawScreen, 33)
        }

        function drawScreen() {
         ctx.fillStyle = "rgba(0,0,0,.06)";
         ctx.fillRect(0, 0, w, h);
         ctx.fillStyle = "#0f0";
         ctx.font = "15px IBM Plex Sans";
         yPosition.map(function(y, index) {
           text = String.fromCharCode(1e2 + Math.random() * 33);
           x = index * 10 + 10;
           ctx.fillText(text, x, y);
           if (y > 100 + Math.random() * 1e4) {
            yPosition[index] = 0;
           }else {
            yPosition[index] = y + 10;
           }
         });
        }
        runMatrix();
      }  




      $(document).ready(function(){
        var $randomString = $(".str");
        var $timer = 80;
        var $it;
        var $data = 0;
        var $index;
        var $change;
        var $letters = ["H","A","R","U","N","P","E","H","L ","İ","V","A","N"];
        var $letters = ["","M","O","W","A","F","F","A","Q","K","U","R","D","I"," "]; 

        $randomString.each(function(){
          $change = Math.round(Math.random()*100);
          $(this).attr('data-change', $change)
        });

        function random(){
          return Math.round(Math.random()*9);
        }
        function select(){
          return Math.round(Math.random()*$randomString.length+1);
        }

        function value(){
          $(".str:nth-child("+select()+")").html(''+random()+'');
          $(".str:nth-child("+select()+")").attr('data-number', $data);
          $data++;

          $randomString.each(function(){
            if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change')) ) {
              $index = $('.ltr').index(this);
              $(this).html($letters[$index]);
              $(this).removeClass('str');
            }
          });

        };

        $it = setInterval(value, $timer);

      }); 