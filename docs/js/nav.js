$(document).ready(function() {
	// menu nav
	let navigationButton = $('.menu-button');
	let menuLink = $('.menu a');
	let menuList = $('.nav-list');
	let menuListOpen = 'nav-list--open';
	let toggle = $('.cmn-toggle-switch__htx');


	
	navigationButton.on('click', function(e){
		e.preventDefault();
		menuList.toggleClass(menuListOpen);
		if (toggle.hasClass("active")) {
          toggle.removeClass("active");
      	} else {
          toggle.addClass("active");
      	}
	})

	menuLink.on('click', function(e){
		menuList.removeClass(menuListOpen);
		toggle.removeClass("active");

	})
	
});