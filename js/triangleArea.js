function getTriangleArea(a , h) {
    if (a <= 0 || h <= 0) {
        return "Nieprawidłowe dane";
    } else {
        return a * h / 2;
    }
}


console.log(getTriangleArea(10,6));

var triangle1Area = getTriangleArea(2,4),
    triangle2Area = getTriangleArea(3,-5),
    triangle3Area = getTriangleArea(3,3);


/*******************************************
 * 
 *     Version with exceptions
 * 
 * *************************************/


function getTriangleArea2(a, h) {
    if (a > 0 && h > 0) {
        return a * h / 2;
    } else { 
       throw {   
           name: "Błąd danych wejściowych!",
           message: (a > 0 ? "" : "\nDługość musi być większa od zera. Wprowadzono a = " + a +".") + (h > 0 ? "" : "\nWysokość musi byc większa od zera. Wprowadzono h = " + h + ".")
       };
   }
}


var a = prompt("Podaj długość boku"),
    h = prompt("Podaj wysokość");

try {
    console.log(getTriangleArea2(a, h));
} catch(e) {
    alert(e.name, e.message);
}



