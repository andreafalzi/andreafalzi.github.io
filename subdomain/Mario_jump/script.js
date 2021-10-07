var id = null;

function moveMario(){
    var elem = document.getElementById("mario");
    var pos = 10;
    clearInterval(id);
    id = setInterval(frame, 50);
    function frame(){
        if (pos == 44) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + '%';
        }
    }
}
function jumpMario(){
    var elem = document.getElementById("mario");
    var pos = 16;
    clearInterval(id);
    id = setInterval(frame, 30);
    function frame(){
        if (pos == 32) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.bottom = pos + '%';
        }
    }
}

function resetMario(){
    var elem = document.getElementById("mario");
    var x = document.getElementById("burger");
    elem.style.bottom = 16 + '%';
    elem.style.left = 10 + '%';
    x.style.opacity = 0;
    x.style.transform = "scaleY(0)";
}


function burgerShow(){
    var elem = document.getElementById("burger");
    var opa = 0;
    clearInterval(id);
    id = setInterval(frame, 50);
    function frame() {
      if (opa == 1) {
        clearInterval(id);
      } else {
        opa++;
        elem.style.opacity = opa;
        elem.style.transform = "scaleY(1)";
      }
    }
}

function actionMario() {
    setTimeout(moveMario, 900);
    setTimeout(jumpMario, 3000);
    burgerShow();
}