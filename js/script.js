$(function() {
	// gọi header.html, footer.htll, menu.html
	$('#header').load('header.html');
	$('#footer').load('footer.html');
	$('#menu').load('menu.html');

});

$.getJSON('js/data.json', function(data) {
	// console.log(data); -- done
	let fruit = data.fruit;
	let fruitdatabase = '';
	fruit.forEach(function (element) {
		fruitdatabase += ` 
		<div class="list__sp col-12 col-md-3">
    <a href="product.html"><div>
    <img class="img-fluid"   src="images/${element.img}" alt="anh">
    </div></a>
    <a href="product.html"><p class="list__sp--title">${element.name}</p></a>
    <p class="list__sp--price">${element.price}&#160VND</p>
    </div>
    `
  });  

	fruitdatabase+=`
 <nav class="page__nav">
 <ul class="page__ul">
 <li>
 <a class="page__first" href="#"><&#160 &#160Trang đầu</a>
 </li>
 <li>
 <a class="page__num" href="# ">1</a>
 </li>
 <li>
 <a class="page__num" href="# ">2</a>
 </li>
 <li>
 <a class="page__num" href="# ">2</a>
 </li>
 <li>
 <a class="page__num" href="# ">...</a>
 </li>
 <li>
 <a class="page__num" href="# ">7</a>
 </li>
 <li>
 <a class="page__last" href="#">Trang cuối&#160 &#160></a>
 </li>
 </ul>
 </nav>
 `;

 $('.product__list').html(fruitdatabase);
 $('.vegetable__list').html(fruitdatabase);
 $('.juce__list').html(fruitdatabase);
});

$.getJSON('js/data2.json', function(data) {
  // console.log(data); -- done
  let juice = data.juice;
  let juicedatabase = '';
  juice.forEach(function (element) {
    juicedatabase += ` 
    <div class="same__pro col-12 col-md-2">
    <a href="product.html">
    <div>
    <img class="img-fluid"   src="images/${element.img}" alt="anh">
    </div>
    </a>
    <a href="product.html"><p class="same__name">${element.name}</p></a>
    <p class="same__price">${element.price}&#160VND</p>
    </div>
    `
  });  


 $('.same__row').html(juicedatabase);
});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
      } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
      }
    });
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
      }, 600);
});


var dem = true;
$('.sort').click(function(){

  if(dem==true) {
    $('.sort__hide').css({
      'display': 'block'
    });
    dem = false;
  } else if (dem==false) {
    $('.sort__hide').css({
      'display': 'none'
    });
    dem = true;
  }
});

$('.price__dec').click(function() {
    $('.price__inc').css({
        'background-color': 'white',
        'color': 'black',
    });

    $(this).css({
        'background-color': '#37ca31',
        'color': 'white',
    });
});

$('.price__inc').click(function() {
    $('.price__dec').css({
        'background-color': 'white',
        'color': 'black',
    });

    $(this).css({
        'background-color': '#37ca31',
        'color': 'white',
    });
});

// sort
$.getJSON('js/data.json', function(data) {
  let results = [];
  let compare = {
    price: function(a,b) {
      a = new Date(a);
      b = new Date(b);
      return a - b;
    }
  }

  function renderContent(array) {
    // xoá hết cái ban đầu đi render lại
    $('.product__list').empty();
    //lặp object films để đổ dữ liệu
    array.forEach( function(element) {
      $('.product__list').append(`
        <tr>
          <td>${element.genre}</td>
          <td>${element.title}</td>
          <td>${element.duration}</td>
          <td>${element.date}</td>
        </tr>
      `);
    });
  }
  renderContent(films);

});
