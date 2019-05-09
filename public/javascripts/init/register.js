var body = document.querySelector('body');

function initRegister() {
	nav();
	form();
}

initRegister();

function nav() {
	let bNav = document.createElement('div');
	bNav.className = 'nav';

	let bBack = document.createElement('a');
	bBack.innerText = 'Назад';
	bBack.href = '/';

	let bLogin = document.createElement('a');
	bLogin.innerText = 'Войти';
	bLogin.href = '/login';	

	bNav.appendChild(bBack);
	bNav.appendChild(bLogin);
	body.appendChild(bNav);
}

function form() {
	let form = document.createElement('form');
	form.action = '/api/auth/login';
	form.enctype = 'multipart/form-data';
	form.method = 'post';

	let fieldBlock = document.createElement('fieldset');

	/*login*/
	let blockLogin = document.createElement('div');
	blockLogin.className = 'fieldLine';

	let lUserName = document.createElement('label');
	lUserName.innerText = 'Логин';
	lUserName.htmlFor = 'login';
	let fUserName = document.createElement('input');
	fUserName.type = 'text';
	fUserName.name = 'login';
	fUserName.id = 'login';

	blockLogin.appendChild(lUserName);
	blockLogin.appendChild(fUserName);
	fieldBlock.appendChild(blockLogin);
	/*login*/
	/*password*/
	let blockPassword = document.createElement('div');
	blockPassword.className = 'fieldLine';

	let lUserPassword = document.createElement('label');
	lUserPassword.innerText = 'Пароль';
	lUserPassword.htmlFor = 'password';
	let fUserPassword = document.createElement('input');
	fUserPassword.type = 'password';
	fUserPassword.name = 'password';
	fUserPassword.id = 'password';

	blockPassword.appendChild(lUserPassword);
	blockPassword.appendChild(fUserPassword);
	fieldBlock.appendChild(blockPassword);
	/*password*/

	button = document.createElement('button');
	button.type = 'submit';
	button.innerText = 'Отправить';

	button.onclick = function(e) {
		e.preventDefault();
		let form = document.querySelector('form');
		var formData = new FormData(form)

		axios({
			method: 'POST',
			url: '/api/auth/login',
			data: formData
		})
		.then(function (response) {
			console.log(response);
			console.log(JSON.parse(response.data));

			let token = JSON.parse(response.data).data.token
			localStorage.setItem('token', 'Bearer ' + token);
			getSummaryInfo();
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	fieldBlock.appendChild(button);
	form.appendChild(fieldBlock);
	body.appendChild(form);
}