"use strict"
$(document).on('click', '.open', function() {
	$(this).siblings('.cont').toggleClass('hide');
});
$(document).on('click', 'button', function () {
	alert('Ничего не найдено)');
});