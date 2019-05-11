function getCompany() {
	let path = document.location.pathname;
	let companyId = path.replace('/company/', '');

	axios({
		method: 'POST',
		url: '/company/getCompany/' + companyId
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printCompany(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);
	});
}

function printCompany(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'companyDetail';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Компания: ' + data[0].name;
	block.appendChild(blockName);

	let el = document.createElement('div');
	el.className = 'infoCompany';

	let fondingDate = document.createElement('p');
	fondingDate.className = 'fondingDate';
	fondingDate.innerText = 'Дата основания: ' + convertDate(data[0].foundingDate);

	let address = document.createElement('p');
	address.className = 'address';
	address.innerText = 'Адрес: ' + data[0].address;

	let phone = document.createElement('p');
	phone.className = 'phone';
	phone.innerText = 'Телефон: ' + data[0].phone;

	let email = document.createElement('p');
	email.className = 'email';
	email.innerText = 'Email: ' + data[0].email;

	let license = document.createElement('p');
	license.className = 'license';
	license.innerText = 'Лицензия на перевозки: ' + data[0].license;

	let countBus = document.createElement('p');
	countBus.className = 'countBus';
	countBus.innerText = 'Размер автопарка: ' + data[0].countBus;

	let countPersonnel = document.createElement('p');
	countPersonnel.className = 'countPersonnel';
	countPersonnel.innerText = 'Количество сотрудников: ' + data[0].countPersonnel;

	el.appendChild(fondingDate);
	el.appendChild(address);
	el.appendChild(phone);
	el.appendChild(email);
	el.appendChild(license);
	el.appendChild(countBus);
	el.appendChild(countPersonnel);

	block.appendChild(el);

	body.appendChild(block);
}