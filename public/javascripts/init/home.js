var body = document.querySelector('body');

function initHome() {
	let bNav = document.createElement('div');
	bNav.className = 'nav';
	
	body.appendChild(bNav);
	if(localStorage.getItem('token')){
		let bLogout = document.createElement('a');
		bLogout.innerText = 'Выйти';
		bLogout.href = '/';
		bLogout.onclick = function() {
			localStorage.clear();
		}

		let bGenerate = document.createElement('a');
		bGenerate.innerText = 'Создать новую визитку';
		bGenerate.href = '/generate';

		let bRefresh = document.createElement('a');
		bRefresh.innerText = 'Обновить';
		bRefresh.onclick = function() {
			getSummaryInfo();
		}

		bNav.appendChild(bLogout);
		bNav.appendChild(bGenerate);
		bNav.appendChild(bRefresh);
	} else {
		let bLogin = document.createElement('a');
		bLogin.innerText = 'Войти';
		bLogin.href = '/login';

		let bRegister = document.createElement('a');
		bRegister.innerText = 'Регистрация';
		bRegister.href = '/register';

		bNav.appendChild(bLogin);
		bNav.appendChild(bRegister);
	}

	getRoutes();
}

initHome();