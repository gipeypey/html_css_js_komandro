$(document).ready(function() { // ini memberi tahu bahwa jQuery siap digunakan
    $(".btn").click(function() {
        $(".container").slideToggle();
    });
});

$(document).ready(function () {
    $(".btn").click(function () {
        $(".container").hide("slow", function () {
            alert("The Paragraph is now hidden");
        });
    });
});
    
    