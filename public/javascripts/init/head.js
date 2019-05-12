document.addEventListener("DOMContentLoaded", initHead);

function initHead() {
	let body = document.querySelector('body');
	let head = document.createElement('div');
	head.className = 'head';

	let menu = document.createElement('div');
	menu.className = 'headMenu';

	let l_home = document.createElement('a');
	l_home.innerText = 'Главная';
	l_home.href = '/';

	let l_flight = document.createElement('a');
	l_flight.innerText = 'Рейсы';
	l_flight.href = '/flight/';

	let l_company = document.createElement('a');
	l_company.innerText = 'Компании';
	l_company.href = '/company/';

	let l_personnel = document.createElement('a');
	l_personnel.innerText = 'Персонал';
	l_personnel.href = '/personnel/';

	let l_personnelPosition = document.createElement('a');
	l_personnelPosition.innerText = 'Должности персонала';
	l_personnelPosition.href = '/personnel/position/';

	let l_route = document.createElement('a');
	l_route.innerText = 'Маршруты';
	l_route.href = '/route/';

	let l_stop = document.createElement('a');
	l_stop.innerText = 'Остановки';
	l_stop.href = '/stop/';

	let l_bus = document.createElement('a');
	l_bus.innerText = 'Автотранспорт';
	l_bus.href = '/bus/';

	let l_busModel = document.createElement('a');
	l_busModel.innerText = 'Модели автотранспорта';
	l_busModel.href = '/bus/model/';

	let l_busBrand = document.createElement('a');
	l_busBrand.innerText = 'Бренды автотранспорта';
	l_busBrand.href = '/bus/brand/';

	let l_busType = document.createElement('a');
	l_busType.innerText = 'Типы автотранспорта';
	l_busType.href = '/bus/type/';

	let l_busStatus = document.createElement('a');
	l_busStatus.innerText = 'Статусы автотранспорта';
	l_busStatus.href = '/bus/status/';

	menu.appendChild(l_home);
	menu.appendChild(l_flight);
	menu.appendChild(l_company);
	menu.appendChild(l_personnel);
	menu.appendChild(l_personnelPosition);
	menu.appendChild(l_route);
	menu.appendChild(l_stop);
	menu.appendChild(l_bus);
	menu.appendChild(l_busModel);
	menu.appendChild(l_busBrand);
	menu.appendChild(l_busType);
	menu.appendChild(l_busStatus);

	head.appendChild(menu);

	let menuNav = document.createElement('div');
	menuNav.className = 'headMenuNav';

	if(document.location.pathname != '/') {
		let l_back = document.createElement('a');
		l_back.innerText = 'Назад';
		l_back.onclick = function() {
			window.history.back();
		}
		menuNav.appendChild(l_back);
	}

	if(localStorage.getItem('token')){
		let l_logout = document.createElement('a');
		l_logout.innerText = 'Выйти';
		l_logout.href = '/';
		l_logout.onclick = function() {
			localStorage.clear();
		}
		menuNav.appendChild(l_logout);
	} else {
		let l_login = document.createElement('a');
		l_login.innerText = 'Войти';
		l_login.href = '/login';

		let l_register = document.createElement('a');
		l_register.innerText = 'Регистрация';
		l_register.href = '/register';

		menuNav.appendChild(l_login);
		menuNav.appendChild(l_register);
	}

	head.appendChild(menuNav);

	body.appendChild(head);
}