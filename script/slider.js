const slider = document.getElementById("slider");

slider.style.width = "100%";
slider.style.height = "100%";
slider.style.position = "absolute";

function créerBaliseImage (chemin) {
    var image = document.createElement("img");
    image.src = chemin;
    image.style.width = "800px";
    image.style.height = "400px";
    return image;
}

var image1 = créerBaliseImage("res/slider/0.jpg");
var image2 = créerBaliseImage("res/slider/1.jpg");

slider.appendChild(image1);
slider.appendChild(image2);

image1.style.display = "none";

var etat = true;

function changerimage(){
    if(etat == true){
        etat = false;
        image1.style.display = "block";
        image2.style.display = "none";
    } else{
        etat = true;
        image1.style.display = "none";
        image2.style.display = "block";

    }
}

setInterval(changerimage, 1000);
