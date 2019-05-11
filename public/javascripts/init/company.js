var body = document.querySelector('body');

function initRoute() {
	nav();
	getCompany();
}

initRoute();

function nav() {
	let bNav = document.createElement('div');
	bNav.className = 'nav';

	let bBack = document.createElement('a');
	bBack.innerText = 'Назад';
	bBack.href = '/';

	bNav.appendChild(bBack);
	body.appendChild(bNav);
}