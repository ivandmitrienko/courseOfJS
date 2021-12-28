
// 1     |    *
// 2     |   ***
// 3     |  *****
// 4     | *******
// 5     |*********
// 6     | *******
// 7     |  *****
// 8     |   ***
// 9     |    *

function stars(lines) {
    var maxStars = lines * 2 - 1;

    for (var i = 0; i < lines; i++) {
        var res = '';
        for (var j = 0; j < (maxStars - (i * 2) - 1)/2; j++) {
            res += ' ';
        }
        for (var j = 0; j < (i + 1) * 2 - 1; j++) {
            res += '*';
        }
        
    console.log(res);    
    }
    for (var i = 1; i < lines; i++) {
        var res = '';
        for (var j = 0; j < i; j++) {
            res += ' ';
        }
        for (var j = 0; j < (maxStars - (i * 2)); j++) {
            res += '*';
        }
        
    console.log(res);    
    }
}
stars(5)