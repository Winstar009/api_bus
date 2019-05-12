function getPersonnelListCompany() {
	let path = document.location.pathname;
	let companyId = path.replace('/personnel/company/', '');

	axios({
		method: 'POST',
		url: '/personnel/getPersonnelListByCompany/' + companyId,
		headers: {
			'Authorization': localStorage.getItem('token')
		}
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printPersonnelListByCompany(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);

		let body = document.querySelector('body');
		let block = document.createElement('div');
		block.className = 'list';

		let blockName = document.createElement('h1');
		blockName.className = 'title';
		blockName.innerText = 'Персонал';
		block.appendChild(blockName);

		let exception = document.createElement('p');
		exception.className = 'exception';
		exception.innerText = 'Эта станица вам недоступна.'
		
		block.appendChild(exception);
		body.appendChild(block);
	});
}

function printPersonnelListByCompany(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Персонал';
	block.appendChild(blockName);

	let table = document.createElement('table');
	table.className = 'table';

	let headTable = document.createElement('thead');
	let headLine = document.createElement('tr');
	let column_fio = document.createElement('th');
	column_fio.innerText = 'ФИО';

	let column_phone = document.createElement('th');
	column_phone.innerText = 'Телефон';

	let column_email = document.createElement('th');
	column_email.innerText = 'Email';

	let column_position = document.createElement('th');
	column_position.innerText = 'Должность';

	let column_countFlight = document.createElement('th');
	column_countFlight.innerText = 'Количество рейсов';

	let column_link = document.createElement('th');

	headLine.appendChild(column_fio);
	headLine.appendChild(column_phone);
	headLine.appendChild(column_email);
	headLine.appendChild(column_position);
	headLine.appendChild(column_countFlight);
	headLine.appendChild(column_link);
	headTable.appendChild(headLine);
	table.appendChild(headTable);

	let bodyTable = document.createElement('tbody');

	data.forEach(elem => {
		let bodyLine = document.createElement('tr');
		let c_fio = document.createElement('th');
		c_fio.innerText = elem.fio;

		let c_phone = document.createElement('th');
		c_phone.innerText = elem.phone;

		let c_email = document.createElement('th');
		c_email.innerText = elem.email;

		let c_position = document.createElement('th');
		c_position.innerText = elem.position;

		let c_countFlight = document.createElement('th');
		c_countFlight.innerText = elem.countFlight;

		let c_link = document.createElement('th');
		let link = document.createElement('a');
		link.innerText = 'Подробнее';
		link.href = '/personnel/' + elem.personnelId;
		c_link.appendChild(link);

		bodyLine.appendChild(c_fio);
		bodyLine.appendChild(c_phone);
		bodyLine.appendChild(c_email);
		bodyLine.appendChild(c_position);
		bodyLine.appendChild(c_countFlight);
		bodyLine.appendChild(c_link);
		bodyTable.appendChild(bodyLine);
	})

	table.appendChild(bodyTable);
	block.appendChild(table);
	body.appendChild(block);
}

/*====================================================================================*/

function getPersonnel() {
	let path = document.location.pathname;
	let personnelId = path.replace('/personnel/', '');

	axios({
		method: 'POST',
		url: '/personnel/getPersonnelById/' + personnelId,
		headers: {
			'Authorization': localStorage.getItem('token')
		}
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printPersonnel(JSON.parse(response.data).data, personnelId);
	})
	.catch(function (error) {
		console.log(error);

		let body = document.querySelector('body');
		let block = document.createElement('div');
		block.className = 'list';

		let blockName = document.createElement('h1');
		blockName.className = 'title';
		blockName.innerText = 'Сотрудник';
		block.appendChild(blockName);

		let exception = document.createElement('p');
		exception.className = 'exception';
		exception.innerText = 'Эта станица вам недоступна.'
		
		block.appendChild(exception);
		body.appendChild(block);
	});
}

function printPersonnel(data, personnelId) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Сотрудник';
	block.appendChild(blockName);

	let el = document.createElement('div');
	el.className = 'info';

	let fio = document.createElement('p');
	fio.innerText = 'ФИО: ' + data[0].fio;

	let phone = document.createElement('p');
	phone.innerText = 'Телефон: ' + data[0].phone;

	let email = document.createElement('p');
	email.innerText = 'Email: ';
	if(data[0].email != null) email.innerText += data[0].email;

	let position = document.createElement('p');
	position.innerText = 'Должность: ' + data[0].position;

	let countFlight = document.createElement('p');
	countFlight.innerText = 'Количество рейсов: ' + data[0].countFlight;

	let link = document.createElement('a');
	link.className = 'companyLink';
	link.innerText = data[0].companyName;
	link.href = '/company/' + data[0].companyId;

	let company = document.createElement('p');
	company.className = 'company';
	company.innerText = 'Компания: ';
	company.appendChild(link);

	el.appendChild(fio);
	el.appendChild(phone);
	el.appendChild(email);
	el.appendChild(position);
	el.appendChild(countFlight);
	el.appendChild(company);

	block.appendChild(el);
	body.appendChild(block);

	getPositionPersonnel(personnelId);
}

/*====================================================================================*/

function getPositionPersonnel(personnelId) {
	axios({
		method: 'POST',
		url: '/personnel/getPositionPersonnelById/' + personnelId,
		headers: {
			'Authorization': localStorage.getItem('token')
		}
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printPositionPersonnel(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);

		let body = document.querySelector('body');
		let block = document.createElement('div');
		block.className = 'list';

		let blockName = document.createElement('h1');
		blockName.className = 'title';
		blockName.innerText = 'Должности';
		block.appendChild(blockName);

		let exception = document.createElement('p');
		exception.className = 'exception';
		exception.innerText = 'Эта станица вам недоступна.'
		
		block.appendChild(exception);
		body.appendChild(block);
	});
}

function printPositionPersonnel(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Должности';
	block.appendChild(blockName);

	let table = document.createElement('table');
	table.className = 'table';

	let headTable = document.createElement('thead');
	let headLine = document.createElement('tr');
	let column_date = document.createElement('th');
	column_date.innerText = 'Дата';

	let column_position = document.createElement('th');
	column_position.innerText = 'Должность';

	headLine.appendChild(column_date);
	headLine.appendChild(column_position);

	headTable.appendChild(headLine);
	table.appendChild(headTable);

	let bodyTable = document.createElement('tbody');

	data.forEach(elem => {
		let bodyLine = document.createElement('tr');
		let c_date = document.createElement('th');
		c_date.innerText = convertDate(elem.date);

		let c_position = document.createElement('th');
		c_position.innerText = elem.position;

		bodyLine.appendChild(c_date);
		bodyLine.appendChild(c_position);

		bodyTable.appendChild(bodyLine);
	})

	table.appendChild(bodyTable);
	block.appendChild(table);
	body.appendChild(block);
}

/*====================================================================================*/

function getPersonnelAll() {
	axios({
		method: 'POST',
		url: '/personnel/getPersonnelList/',
		headers: {
			'Authorization': localStorage.getItem('token')
		}
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printPersonnelList(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);

		let body = document.querySelector('body');
		let block = document.createElement('div');
		block.className = 'list';

		let blockName = document.createElement('h1');
		blockName.className = 'title';
		blockName.innerText = 'Персонал';
		block.appendChild(blockName);

		let exception = document.createElement('p');
		exception.className = 'exception';
		exception.innerText = 'Эта станица вам недоступна.'
		
		block.appendChild(exception);
		body.appendChild(block);
	});
}

function printPersonnelList(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Персонал';
	block.appendChild(blockName);

	let table = document.createElement('table');
	table.className = 'table';

	let headTable = document.createElement('thead');
	let headLine = document.createElement('tr');
	let column_fio = document.createElement('th');
	column_fio.innerText = 'ФИО';

	let column_phone = document.createElement('th');
	column_phone.innerText = 'Телефон';

	let column_email = document.createElement('th');
	column_email.innerText = 'Email';

	let column_position = document.createElement('th');
	column_position.innerText = 'Должность';

	let column_countFlight = document.createElement('th');
	column_countFlight.innerText = 'Количество рейсов';

	let column_company = document.createElement('th');
	column_company.innerText = 'Компания';

	let column_link = document.createElement('th');

	headLine.appendChild(column_fio);
	headLine.appendChild(column_phone);
	headLine.appendChild(column_email);
	headLine.appendChild(column_position);
	headLine.appendChild(column_countFlight);
	headLine.appendChild(column_company);
	headLine.appendChild(column_link);
	headTable.appendChild(headLine);
	table.appendChild(headTable);

	let bodyTable = document.createElement('tbody');

	data.forEach(elem => {
		let bodyLine = document.createElement('tr');
		let c_fio = document.createElement('th');
		c_fio.innerText = elem.fio;

		let c_phone = document.createElement('th');
		c_phone.innerText = elem.phone;

		let c_email = document.createElement('th');
		c_email.innerText = elem.email;

		let c_position = document.createElement('th');
		c_position.innerText = elem.position;

		let c_countFlight = document.createElement('th');
		c_countFlight.innerText = elem.countFlight;

		let c_companylink = document.createElement('th');
		let companyLink = document.createElement('a');
		companyLink.innerText = elem.companyName;
		companyLink.href = '/company/' + elem.companyId;
		c_companylink.appendChild(companyLink);

		let c_link = document.createElement('th');
		let link = document.createElement('a');
		link.innerText = 'Подробнее';
		link.href = '/personnel/' + elem.personnelId;
		c_link.appendChild(link);

		bodyLine.appendChild(c_fio);
		bodyLine.appendChild(c_phone);
		bodyLine.appendChild(c_email);
		bodyLine.appendChild(c_position);
		bodyLine.appendChild(c_countFlight);
		bodyLine.appendChild(c_companylink);
		bodyLine.appendChild(c_link);
		bodyTable.appendChild(bodyLine);
	})

	table.appendChild(bodyTable);
	block.appendChild(table);
	body.appendChild(block);
}

/*====================================================================================*/

function getPositionAll() {
	axios({
		method: 'POST',
		url: '/personnel/getPositionList/',
		headers: {
			'Authorization': localStorage.getItem('token')
		}
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printPositionList(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);

		let body = document.querySelector('body');
		let block = document.createElement('div');
		block.className = 'list';

		let blockName = document.createElement('h1');
		blockName.className = 'title';
		blockName.innerText = 'Должности';
		block.appendChild(blockName);

		let exception = document.createElement('p');
		exception.className = 'exception';
		exception.innerText = 'Эта станица вам недоступна.'
		
		block.appendChild(exception);
		body.appendChild(block);
	});
}

function printPositionList(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Должности';
	block.appendChild(blockName);

	let table = document.createElement('table');
	table.className = 'table';

	let headTable = document.createElement('thead');
	let headLine = document.createElement('tr');

	let column_position = document.createElement('th');
	column_position.innerText = 'Должность';

	headLine.appendChild(column_position);
	headTable.appendChild(headLine);
	table.appendChild(headTable);

	let bodyTable = document.createElement('tbody');

	data.forEach(elem => {
		let bodyLine = document.createElement('tr');
		let c_position = document.createElement('th');
		c_position.innerText = elem.position;

		bodyLine.appendChild(c_position);
		bodyTable.appendChild(bodyLine);
	})

	table.appendChild(bodyTable);
	block.appendChild(table);
	body.appendChild(block);
}