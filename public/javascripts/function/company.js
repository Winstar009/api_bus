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

		printCompany(JSON.parse(response.data).data, companyId);
	})
	.catch(function (error) {
		console.log(error);
	});
}

function printCompany(data, companyId) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Компания: ' + data[0].name;
	block.appendChild(blockName);

	let el = document.createElement('div');
	el.className = 'info';

	let foundingDate = document.createElement('p');
	foundingDate.innerText = 'Дата основания: ' + convertDate(data[0].foundingDate);

	let address = document.createElement('p');
	address.innerText = 'Адрес: ' + data[0].address;

	let phone = document.createElement('p');
	phone.innerText = 'Телефон: ' + data[0].phone;

	let email = document.createElement('p');
	email.innerText = 'Email: ' + data[0].email;

	let license = document.createElement('p');
	license.innerText = 'Лицензия на перевозки: ' + data[0].license;

	let linkBus = document.createElement('a');
	linkBus.innerText = 'Подробнее';
	linkBus.href = '/bus/company/' + companyId;

	let countBus = document.createElement('p');
	countBus.innerText = 'Размер автопарка: ' + data[0].countBus + ' ';

	let linkPersonnel = document.createElement('a');
	linkPersonnel.innerText = 'Подробнее';
	linkPersonnel.href = '/personnel/company/' + companyId;

	let countPersonnel = document.createElement('p');
	countPersonnel.innerText = 'Количество сотрудников: ' + data[0].countPersonnel + ' ';

	countBus.appendChild(linkBus);
	countPersonnel.appendChild(linkPersonnel);

	el.appendChild(foundingDate);
	el.appendChild(address);
	el.appendChild(phone);
	el.appendChild(email);
	el.appendChild(license);
	el.appendChild(countBus);
	el.appendChild(countPersonnel);

	block.appendChild(el);

	body.appendChild(block);
}

/*====================================================================================*/

function getCompanyList() {
	axios({
		method: 'POST',
		url: '/company/getCompanyList'
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printCompanyList(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);
	});
}

function printCompanyList(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Компании';
	block.appendChild(blockName);

	data.forEach(elem => {
		let el = document.createElement('div');
		el.className = 'picture';

		let link = document.createElement('a');
		link.className = 'companyLink';
		link.innerText = elem.name;
		link.href = '/company/' + elem.companyId;

		let name = document.createElement('h2');
		name.className = 'companyName';

		let time = document.createElement('p');
		time.className = 'time';
		time.innerText = convertDate(elem.foundingDate);

		name.appendChild(link);
		el.appendChild(name);
		el.appendChild(time);

		block.appendChild(el);
	});

	body.appendChild(block);
}

/*====================================================================================*/

function getCompanyAll() {
	axios({
		method: 'POST',
		url: '/company/getCompanyList'
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printCompanyAll(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);
	});
}

function printCompanyAll(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Компании';
	block.appendChild(blockName);

	let table = document.createElement('table');
	table.className = 'table';

	let headTable = document.createElement('thead');
	let headLine = document.createElement('tr');

	let column_name = document.createElement('th');
	column_name.innerText = 'Название';

	let column_foundingDate = document.createElement('th');
	column_foundingDate.innerText = 'Дата основания';

	let column_address = document.createElement('th');
	column_address.innerText = 'Адрес';

	let column_phone = document.createElement('th');
	column_phone.innerText = 'Телефон';

	let column_email = document.createElement('th');
	column_email.innerText = 'Email';

	let column_license = document.createElement('th');
	column_license.innerText = 'Лицензия на перевозки';

	let column_countBus = document.createElement('th');
	column_countBus.innerText = 'Количество автотранспорта';

	let column_countPersonnel = document.createElement('th');
	column_countPersonnel.innerText = 'Количество персонала';

	let column_link = document.createElement('th');

	headLine.appendChild(column_name);
	headLine.appendChild(column_foundingDate);
	headLine.appendChild(column_address);
	headLine.appendChild(column_phone);
	headLine.appendChild(column_email);
	headLine.appendChild(column_license);
	headLine.appendChild(column_countBus);
	headLine.appendChild(column_countPersonnel);
	headLine.appendChild(column_link);

	headTable.appendChild(headLine);
	table.appendChild(headTable);

	let bodyTable = document.createElement('tbody');

	data.forEach(elem => {
		let bodyLine = document.createElement('tr');
		let c_name = document.createElement('th');
		c_name.innerText = elem.name;

		let c_foundingDate = document.createElement('th');
		c_foundingDate.innerText = convertDate(elem.foundingDate);

		let c_addess = document.createElement('th');
		c_addess.innerText = elem.address;

		let c_phone = document.createElement('th');
		c_phone.innerText = elem.phone;

		let c_email = document.createElement('th');
		c_email.innerText = elem.email;

		let c_license = document.createElement('th');
		c_license.innerText = elem.license;

		let c_countBus = document.createElement('th');
		let countBus = document.createElement('a');
		countBus.innerText = elem.countBus;
		countBus.href = '/bus/company/' + elem.companyId;
		c_countBus.appendChild(countBus);

		let c_countPersonnel = document.createElement('th');
		let countPersonnel = document.createElement('a');
		countPersonnel.innerText = elem.countPersonnel;
		countPersonnel.href = '/personnel/company/' + elem.companyId;
		c_countPersonnel.appendChild(countPersonnel);

		let c_link = document.createElement('th');
		let link = document.createElement('a');
		link.innerText = 'Подробнее';
		link.href = '/company/' + elem.companyId;
		c_link.appendChild(link);

		bodyLine.appendChild(c_name);
		bodyLine.appendChild(c_foundingDate);
		bodyLine.appendChild(c_addess);
		bodyLine.appendChild(c_phone);
		bodyLine.appendChild(c_email);
		bodyLine.appendChild(c_license);
		bodyLine.appendChild(c_countBus);
		bodyLine.appendChild(c_countPersonnel);
		bodyLine.appendChild(c_link);
		bodyTable.appendChild(bodyLine);
	})

	table.appendChild(bodyTable);
	block.appendChild(table);
	body.appendChild(block);
}