"use strict";

function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ],
        usedColors = {};

    console.log( 'цветов: ' + colorsCount );

    for (var i = 1; i <= colorsCount; i++) {
        
        var n = randomDiap(1,7);
        var value = colors[n];

        if (!(value in usedColors)) {
            usedColors[value] = true;
        } else {
            i--;
        }
    }
    
    console.log(Object.keys(usedColors).toString());
}

mood(3);


// "used strict"

// function randomDiap(n,m) {
//     return Math.floor(Math.random()*(m-n+1))+n;
// }

// function mood(colorsCount) {
//     var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
    


//     console.log( 'цветов: ' + colorsCount );

//     var usedColors = {};

//     for ( var i=1; i<=colorsCount; i++ ) {
//         do {
//            var n = randomDiap(1,7);
//         } while (n in usedColors)

//        if(!(n in usedColors)) usedColors[n] = true;
       
//          console.log(n);
//     }
// }

// mood(3);