
function CrunchifyTableView(objArray, theme, value, header) {

    needHeader = true;
        
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    
    var str = '<table class="' + theme + '">';

    // table body
    str += '<tbody>';
    
        str += (i % 2 == 0) ? '<tr class="alt">' : '<tr>';

        str += '<thead><tr>';
        for (var index in array[0]) {
            if (index == value)
                str += '<th scope="col">' + header + '</th>';
        }

    for (var i = 0; i < array.length; i++) {    
        for (var index in array[i]) {
            if (index == value)
                str += '<td>' + array[i][index] + '</td>';
        }
    }
    str += '</tr></thead>';
    str += '</tbody>'
    str += '</table>';
    return str;
}

function CrunchifyTableViewss(objArray, theme, value) {

    needHeader = true;
        
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    
    var str = '<table class="' + theme + '">';

    // Only create table head if needHeader is set to True..
    if (needHeader) {
        str += '<thead><tr>';
        for (var index in array[0]) {
            if (index == value)
                str += '<th scope="col">' + index + '</th>';
        }
        str += '</tr></thead>';
    }

    // table body
    str += '<tbody>';
    for (var i = 0; i < array.length; i++) {
        str += (i % 2 == 0) ? '<tr class="alt">' : '<tr>';
        for (var index in array[i]) {
            if (index == value)
                str += '<td>' + array[i][index] + '</td>';
        }
        str += '</tr>';
    }
    str += '</tbody>'
    str += '</table>';
    return str;
}