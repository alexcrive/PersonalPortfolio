$(document).ready(function() {
	// scroll
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    	highlightSelector:"nav a",
	    	scrollSpeed: 700,
  			scrollingEasing: "easeInOutQuint"
		});
	$("a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    	highlightSelector:"a .mouse_scroll",
	    	scrollSpeed: 700,
  			scrollingEasing: "easeInOutQuint"
		});


	// MixItUp		

		var mixer = mixitup('#filter_projects', {
	        animation: {
	        duration: 900
	   		}
		});

		// fancybox
		$('[data-fancybox="gallery"]').fancybox({
			helpers: {
				overlay: {
					locked: false
				}

			},
			buttons: [
			   'zoom',
			   'fullScreen',
			   'download',
			   'close'
			],
			title: {
	            type: 'inside'
	        },
			loop: true,
			image: {
    			preload: true
  			}
		});

		// jQuery Validate
		$(".contacts-form__form").validate({
			rules: {
				name: {required: true},
				email: {required: true, email: true},
				comment: {required: true}
				/*name
				email
				skype
				phone
				comment*/
			},
			messages: {
				name: "Пожалуйста, введите своё имя",
				email: {
					required: "Пожалуйста, укажите свой email",
					email: "Неправильный формат ввода email!"
				},
				comment: "Пожалуйста, опишите вашу задачу"
			},
			submitHandler: function(form) {
			  ajaxFormSubmit();
			}
		})


		// Функция AJAX запрса на сервер
		function ajaxFormSubmit(){
		var string = $(".contacts-form__form").serialize(); // Соханяем данные введенные в форму в строку. 

		// Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string
			
			// Функция если все прошло успешно
			success: function(html){
				$(".contacts-form__form").slideUp(800);
				$('#answer').html(html);
			}
		});

		// Чтобы по Submit больше ничего не выполнялось - 
		// делаем возврат false чтобы прервать 
		// цепочку срабатывания остальных функций
		return false; 
		}

    
		
	
});