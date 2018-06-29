// Select color input
let cellColor;

// Select size input
let numRow, numCol;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit( function (event) {
    event.preventDefault();
    numRow = $('#inputHeight').val();
    numCol = $('#inputWidth').val();
    makeGrid(numRow, numCol);
});


function makeGrid(row, col) {
    
    //To Create Grid
    $('tr').remove();
    for (let i = 1; i <= row; i++) {
      $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (let j = 0; j < col; j++) {
          $('#table'+ i ).append('<td></td>');    
        }
    }    

    //To add Color
    $('td').click(function addColor() {
        cellColor = $('#colorPicker').val();
        console.log(cellColor);
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + cellColor)
        }
    });

}