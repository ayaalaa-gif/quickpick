$(function() {
    $('#products').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $('.video-play').click(function() {
        $('#myModal').show();
    })
    $("span.close").click(function() {
        $('#myModal').hide();
    })
    $('a.order-pro').click(function(e) {
        e.preventDefault();
        $('#myModal').show();
    })
    $("span.close").click(function() {
        $('#myModal').hide();
    })

})
var modal = document.getElementById("myModal");

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }