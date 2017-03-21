$(document).ready(function() {

	// Блок на весь экран
	function setHeiHeight() {
    $('section').css({
        // height: $(window).height() + 'px'
    });
	}
	setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
	$(window).resize( setHeiHeight );

	// Progress Bar
	$(document).ready(function() {
		$(".skills").skill();
	});


}); 