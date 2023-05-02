$('.screenshot-wrap').slick({
    autoplay: true,
    dots: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    centerPadding: '20%',
    centerMode: true,
    prevArrow: '',
    nextArrow: '',
    responsive: [{

      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        centerPadding: '33.3%'
      }

    },{

      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerPadding: '0'
      }

    }]
});

var testimonialSlider = $('.testimonial-wrap');
testimonialSlider.owlCarousel({
    loop:true,
    dots: true,
    mouseDrag: false,
    autoplay: false,
    autoplayTimeout:4000,
    nav: false,
    items: 1,
});
testimonialSlider.on("translate.owl.carousel", function(){
    $(".single-testimonial-box img, .author-rating").removeClass("animated zoomIn").css("opacity", "0");
});
testimonialSlider.on("translated.owl.carousel", function(){
    $(".single-testimonial-box img, .author-rating").addClass("animated zoomIn").css("opacity", "1");
});
testimonialSlider.on('changed.owl.carousel', function(property) {
    var current = property.item.index;
    var prevRating = $(property.target).find(".owl-item").eq(current).prev().find('.author-img').html();
    var nextRating = $(property.target).find(".owl-item").eq(current).next().find('.author-img').html();
    $('.thumb-prev .author-img').html(prevRating);
    $('.thumb-next .author-img').html(nextRating);
});
$('.thumb-next').on('click', function() {
    testimonialSlider.trigger('next.owl.carousel', [300]);
    return false;
});
$('.thumb-prev').on('click', function() {
    testimonialSlider.trigger('prev.owl.carousel', [300]);
    return false;
});

var heroSlider = $('.hero-area-slider');
heroSlider.owlCarousel({
    loop:true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: true,
    navText: ["<i class='icofont icofont-long-arrow-left'></i>", "<i class='icofont icofont-long-arrow-right'></i>"],
    items: 1,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    mouseDrag: true,
    touchDrag: true,
    responsive:{
        768:{
            mouseDrag: false,
            touchDrag: false,
        }
    }
});

function tampilkan_nilai_form(){
    var nilai_form=document.getElementById("NamaLengkap").value;
    document.getElementById("NamaLengkap").innerHTML=nilai_form;
    var nilai_form=document.getElementById("Usia").value;
    document.getElementById("Usia").innerHTML=nilai_form;
    var nilai_form=document.getElementById("kategori").value;
    document.getElementById("kategori").innerHTML=nilai_form;
    var nilai_form=document.getElementById("poli").value;
    document.getElementById("poli").innerHTML=nilai_form;
    var nilai_form=document.getElementById("submit").value;
    document.getElementById("tombol_form").innerHTML=nilai_form;
}

$(document).ready(function () {
    $("#sukses").hide();
    $(':button[id="tombol_form"]').click(function () {
       var getVal1 = $("#NamaLengkap").val();
       $(".p1").text(getVal1);
       var getVal2 = $("#Usia").val();
       $(".p2").text(getVal2);
       var displayKategori = $("#selectKategori option:selected").text();
       $("#kategori").text(displayKategori);
       // $("#selectKategori").change(function () {
       // })
       var displayPoli = $("#selectPoli option:selected").text();
       $("#poli").text(displayPoli);
       // $("#selectPoli").change(function () {
       // });
       var nomorAntrian = Math.floor(Math.random() *10) + 25;
       document.getElementById("antrian").innerHTML = nomorAntrian;
       if (document.forms["formPendaftaran"]["nama"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["nama"].focus();
        document.getElementById('NamaLengkap').style.borderColor = "red"; 
        return false;
       }
       else {
        document.getElementById('NamaLengkap').style.borderColor ="green";
        }
        if (document.forms["formPendaftaran"]["umur"].value == "") {
            alert("Usia Tidak Boleh Kosong");
            document.forms["formPendaftaran"]["umur"].focus();
            document.getElementById('Usia').style.borderColor = "red"; 
            return false;
        }
        else {
          document.getElementById('Usia').style.borderColor ="green";
          }
        if (document.forms["formPendaftaran"]["Pilih"].value == "--Pilih--") {
            alert('Isi Poli yang di tuju');
            document.getElementById('selectPoli').style.borderColor = "red"; 
            return false; 
        }
        else {
          document.getElementById('selectPoli').style.borderColor ="green";
          }
        if (document.forms["formPendaftaran"]["kategori"].value == "--Pilih--") {
            alert('Isi kategori anda');
            document.getElementById('selectKategori').style.borderColor = "red"; 
            return false; 
        }
        else {
          document.getElementById('selectKategori').style.borderColor ="green";
          }
       $("#sukses").show();
    });
    var nomorPasien = Math.floor(Math.random() *10) + 6;
    document.getElementById("pasienAntrian").innerHTML = nomorPasien;
 });
 function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
       h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
 }
 function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
 }