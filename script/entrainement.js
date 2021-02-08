const slider = document.getElementById("slider");
console.log(slider);

slider.style.width = "100%";
slider.style.height = "100%";
slider.style.position = "absolute";

function créerBaliseImage (chemin) {
    var image = document.createElement("img");
    image.src = chemin;
    return image;
}

var test = créerBaliseImage("res/twitter.png");
console.log(test);


function addition (x,y) {
    return x+y;
}

function caisse (a,b,c){
    return (a+b)/c;
}

function somme(tableau){
    var s=0;
    for (var i=0; i<tableau.length; i++){
        var v= t[i];
        s = s + v;
    }
    return s;
}



function moy(tableau){
    var s=0;
    for (var i=0; i<tableau.length; i++){
        var v= t[i]
        s = s + v;
    }
    s= s/tableau.length;
    return s;
}


function supérieur (x,y){
    if(x>y){
        return 1;
    } else {
        return 0;
    }
}

function max (x,y){
    return (x>y) ? x : y;
}

function successifs(n){
    var montableau=[];
    for (var i=0; i<=n; i++){
        if (i%2==0){
            montableau.push(i);
        }

    }
    return montableau;
}




function successifs(n){
    var montableau=[];
    for (var i=0; i<=n; i = i+2){
        montableau.push(i);
    }
    return montableau;
}

function promo (tableau, promotion){
    var somme = 0; //définit la somme totale
    var cher = highest(tableau); //définit la valeur la plus chère du tableau
    var boucle = false; //permet de n'appliquer la promotion qu'une seule fois
    for(var i=0; i<tableau.length; i++){   //boucle d'itération sur l'entièreté du tableau
        var valeur= tableau[i]; //récupère la valeur valeur du tableau à l'index i
        if(valeur==cher && boucle==false){ //sépare l'article éligible à la promo des autres
            var reduc = (cher * (100-promotion))/100; //calcule le prix de l'article après la promotion
            somme = somme + reduc; //ajoute le prix réduit à la somme totale
            boucle = true;//empêche la promotion de s'appliquer à plusieurs articles
        } else{
            somme = valeur + somme; //ajoute le prix de l'article à la somme totale
        }
    }
    return somme; //renvoie la somme totale avec promo appliquée
}

function highest(tableau){
    var s = 0;  //définit le prix de l'article le plus cher
    for (var i=0; i<tableau.length; i++){  //boucle d'itération sur l'entièreté du tableau
        var v= tableau[i]; //récupère la valeur du tableau à l'index i
        if (v>s){  //détecte si la valeur du tableau à l'index i est supérieure au prix de l'article le plus cher
            s = v; //définit la valeur du tableau à l'index i comme le prix de l'article le plus cher
        }
    }
    return s; //renvoie le prix de l'article le plus cher
}
