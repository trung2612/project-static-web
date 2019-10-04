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
            <div>
               <img class="img-fluid"  style="object-fit: cover;height: 175px;" src="images/${element.img}" alt="anh">
            </div>
            <p class="list__sp--title">${element.name}</p>
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