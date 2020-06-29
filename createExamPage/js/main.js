function next() {
    var quantity_temp = document.getElementById("questionOrder").innerText;
    var quantity_int = parseInt(quantity_temp, 10) + 1;
    document.getElementById("questionOrder").innerHTML = quantity_int.toString();

    document.getElementById('question').value = ""
    document.getElementById('ansA').value = "";
    document.getElementById('ansB').value = "";
    document.getElementById('key').value = ""

}

function previous() {
    var quantity_temp = document.getElementById("questionOrder").innerText;
    var quantity_int = parseInt(quantity_temp, 10) - 1;
    document.getElementById("questionOrder").innerHTML = quantity_int.toString();
}


$(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: 'post.php',
            data: $('form').serialize(),
            success: function() {
                alert('form was submitted');
            }
        });

    });
});