var contact=(function(){
	//Инициализирует наш модуль
	var init = function(){
		_setUpListners();
	};
	//Прослушивает события
	var _setUpListners = function(){
		$('#contact-form').on('submit', _submitForm);

	};
	var _submitForm = function(ev){
		ev.preventDefault();
		var form = $(this),
			url = 'contacts.php',
			defObj = _ajaxForm(form, url);
	};
	var _ajaxForm = function(form, url){
		if(!validation.validateForm(form)) return false;
			
	};
	//Возращает объект
	return{
		init:init
	};

})();
contact.init();