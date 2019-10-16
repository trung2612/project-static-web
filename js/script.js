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