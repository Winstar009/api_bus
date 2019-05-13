function getBusListCompany() {
	let path = document.location.pathname;
	let companyId = path.replace('/bus/company/', '');

	axios({
		method: 'POST',
		url: '/bus/getBusListByCompany/' + companyId,
		headers: {
			'Authorization': localStorage.getItem('token')
		}
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printBusListByCompany(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);
	});
}

function printBusListByCompany(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Автотранспорт';
	block.appendChild(blockName);

	let table = document.createElement('table');
	table.className = 'table';

	let headTable = document.createElement('thead');
	let headLine = document.createElement('tr');
	let column_brand = document.createElement('th');
	column_brand.innerText = 'Бренд';

	let column_model = document.createElement('th');
	column_model.innerText = 'Модель';

	let column_type = document.createElement('th');
	column_type.innerText = 'Тип';

	let column_regNum = document.createElement('th');
	column_regNum.innerText = 'Регистрационный номер';

	let column_yearIssue = document.createElement('th');
	column_yearIssue.innerText = 'Год выпуска';

	let column_standingCapacity = document.createElement('th');
	column_standingCapacity.innerText = 'Стоячие места';

	let column_seatingCapacity = document.createElement('th');
	column_seatingCapacity.innerText = 'Сидячие места';

	let column_specialCapacity = document.createElement('th');
	column_specialCapacity.innerText = 'Специальные места';

	let column_purchaseDate = document.createElement('th');
	column_purchaseDate.innerText = 'Дата покупки';

	let column_status = document.createElement('th');
	column_status.innerText = 'Состояние';

	let column_link = document.createElement('th');

	headLine.appendChild(column_brand);
	headLine.appendChild(column_model);
	headLine.appendChild(column_type);
	headLine.appendChild(column_regNum);
	headLine.appendChild(column_yearIssue);
	headLine.appendChild(column_standingCapacity);
	headLine.appendChild(column_seatingCapacity);
	headLine.appendChild(column_specialCapacity);
	headLine.appendChild(column_purchaseDate);
	headLine.appendChild(column_status);


	headLine.appendChild(column_link);
	headTable.appendChild(headLine);
	table.appendChild(headTable);

	let bodyTable = document.createElement('tbody');

	data.forEach(elem => {
		let bodyLine = document.createElement('tr');
		let c_brand = document.createElement('th');
		c_brand.innerText = elem.brand;

		let c_model = document.createElement('th');
		c_model.innerText = elem.model;

		let c_type = document.createElement('th');
		c_type.innerText = elem.type;

		let c_regNum = document.createElement('th');
		c_regNum.innerText = elem.regNum;

		let c_yearIssue = document.createElement('th');
		c_yearIssue.innerText = elem.yearIssue;

		let c_standingCapacity = document.createElement('th');
		c_standingCapacity.innerText = elem.standingCapacity;

		let c_seatingCapacity = document.createElement('th');
		c_seatingCapacity.innerText = elem.seatingCapacity;

		let c_specialCapacity = document.createElement('th');
		c_specialCapacity.innerText = elem.specialCapacity;

		let c_purchaseDate = document.createElement('th');
		c_purchaseDate.innerText = convertDate(elem.purchaseDate);

		let c_status = document.createElement('th');
		c_status.innerText = elem.status;

		let c_link = document.createElement('th');
		let link = document.createElement('a');
		link.innerText = 'Подробнее';
		link.href = '/bus/' + elem.busId;
		c_link.appendChild(link);

		bodyLine.appendChild(c_brand);
		bodyLine.appendChild(c_model);
		bodyLine.appendChild(c_type);
		bodyLine.appendChild(c_regNum);
		bodyLine.appendChild(c_yearIssue);
		bodyLine.appendChild(c_standingCapacity);
		bodyLine.appendChild(c_seatingCapacity);
		bodyLine.appendChild(c_specialCapacity);
		bodyLine.appendChild(c_purchaseDate);
		bodyLine.appendChild(c_status);

		bodyLine.appendChild(c_link);
		bodyTable.appendChild(bodyLine);
	})

	table.appendChild(bodyTable);
	block.appendChild(table);
	body.appendChild(block);
}

/*====================================================================================*/

function getBus() {
	let path = document.location.pathname;
	let busId = path.replace('/bus/', '');

	axios({
		method: 'POST',
		url: '/bus/getBusById/' + busId,
		headers: {
			'Authorization': localStorage.getItem('token')
		}
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printBus(JSON.parse(response.data).data, busId);
	})
	.catch(function (error) {
		console.log(error);
	});
}

function printBus(data, busId) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Автотранспорт';
	block.appendChild(blockName);

	let el = document.createElement('div');
	el.className = 'info';

	let brand = document.createElement('p');
	brand.innerText = 'Бренд: ' + data[0].brand;

	let model = document.createElement('p');
	model.innerText = 'Модель: ' + data[0].model;

	let type = document.createElement('p');
	type.innerText = 'Тип: ' + data[0].type;

	let regNum = document.createElement('p');
	regNum.innerText = 'Регистрационный номер: ' + data[0].regNum;

	let yearIssue = document.createElement('p');
	yearIssue.innerText = 'Год выпуска: ' + data[0].yearIssue;

	let standingCapacity = document.createElement('p');
	standingCapacity.innerText = 'Стоячие места: ' + data[0].standingCapacity;

	let seatingCapacity = document.createElement('p');
	seatingCapacity.innerText = 'Сидячие места: ' + data[0].seatingCapacity;

	let specialCapacity = document.createElement('p');
	specialCapacity.innerText = 'Специальные места: ' + data[0].specialCapacity;

	let purchaseDate = document.createElement('p');
	purchaseDate.innerText = 'Дата покупки: ' + convertDate(data[0].purchaseDate);

	let status = document.createElement('p');
	status.innerText = 'Состояние: ' + data[0].status;

	let link = document.createElement('a');
	link.className = 'companyLink';
	link.innerText = data[0].companyName;
	link.href = '/company/' + data[0].companyId;

	let company = document.createElement('p');
	company.className = 'company';
	company.innerText = 'Компания: ';
	company.appendChild(link);

	el.appendChild(brand);
	el.appendChild(model);
	el.appendChild(type);
	el.appendChild(regNum);
	el.appendChild(yearIssue);
	el.appendChild(standingCapacity);
	el.appendChild(seatingCapacity);
	el.appendChild(specialCapacity);
	el.appendChild(purchaseDate);
	el.appendChild(status);
	el.appendChild(company);

	block.appendChild(el);
	body.appendChild(block);

	getServiceBus(busId);
}

/*====================================================================================*/

function getServiceBus(busId) {
	axios({
		method: 'POST',
		url: '/bus/getServiceBusById/' + busId,
		headers: {
			'Authorization': localStorage.getItem('token')
		}
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printBusService(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);

		let body = document.querySelector('body');
		let block = document.createElement('div');
		block.className = 'list';

		let blockName = document.createElement('h1');
		blockName.className = 'title';
		blockName.innerText = 'Сервисное обслуживание';
		block.appendChild(blockName);

		let exception = document.createElement('p');
		exception.className = 'exception';
		exception.innerText = 'Эта станица вам недоступна.'
		
		block.appendChild(exception);
		body.appendChild(block);
	});
}

function printBusService(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Сервисное обслуживание';
	block.appendChild(blockName);

	let table = document.createElement('table');
	table.className = 'table';

	let headTable = document.createElement('thead');
	let headLine = document.createElement('tr');
	let column_date = document.createElement('th');
	column_date.innerText = 'Дата';

	let column_status = document.createElement('th');
	column_status.innerText = 'Состояние';

	let column_description = document.createElement('th');
	column_description.innerText = 'Описание';

	headLine.appendChild(column_date);
	headLine.appendChild(column_status);
	headLine.appendChild(column_description);

	headTable.appendChild(headLine);
	table.appendChild(headTable);

	let bodyTable = document.createElement('tbody');

	data.forEach(elem => {
		let bodyLine = document.createElement('tr');
		let c_date = document.createElement('th');
		c_date.innerText = convertDate(elem.date);

		let c_status = document.createElement('th');
		c_status.innerText = elem.status;

		let c_description = document.createElement('th');
		c_description.innerText = elem.description;

		bodyLine.appendChild(c_date);
		bodyLine.appendChild(c_status);
		bodyLine.appendChild(c_description);
		bodyTable.appendChild(bodyLine);
	})

	table.appendChild(bodyTable);
	block.appendChild(table);
	body.appendChild(block);
}

/*====================================================================================*/

function getBusAll() {
	axios({
		method: 'POST',
		url: '/bus/getBusList/',
		headers: {
			'Authorization': localStorage.getItem('token')
		}
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printBusAll(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);
	});
}

function printBusAll(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Автотранспорт';
	block.appendChild(blockName);

	let table = document.createElement('table');
	table.className = 'table';

	let headTable = document.createElement('thead');
	let headLine = document.createElement('tr');
	let column_brand = document.createElement('th');
	column_brand.innerText = 'Бренд';

	let column_model = document.createElement('th');
	column_model.innerText = 'Модель';

	let column_type = document.createElement('th');
	column_type.innerText = 'Тип';

	let column_regNum = document.createElement('th');
	column_regNum.innerText = 'Регистрационный номер';

	let column_yearIssue = document.createElement('th');
	column_yearIssue.innerText = 'Год выпуска';

	let column_standingCapacity = document.createElement('th');
	column_standingCapacity.innerText = 'Стоячие места';

	let column_seatingCapacity = document.createElement('th');
	column_seatingCapacity.innerText = 'Сидячие места';

	let column_specialCapacity = document.createElement('th');
	column_specialCapacity.innerText = 'Специальные места';

	let column_purchaseDate = document.createElement('th');
	column_purchaseDate.innerText = 'Дата покупки';

	let column_status = document.createElement('th');
	column_status.innerText = 'Состояние';

	let column_company = document.createElement('th');
	column_company.innerText = 'Владелец';

	let column_link = document.createElement('th');

	headLine.appendChild(column_brand);
	headLine.appendChild(column_model);
	headLine.appendChild(column_type);
	headLine.appendChild(column_regNum);
	headLine.appendChild(column_yearIssue);
	headLine.appendChild(column_standingCapacity);
	headLine.appendChild(column_seatingCapacity);
	headLine.appendChild(column_specialCapacity);
	headLine.appendChild(column_purchaseDate);
	headLine.appendChild(column_status);
	headLine.appendChild(column_company);


	headLine.appendChild(column_link);
	headTable.appendChild(headLine);
	table.appendChild(headTable);

	let bodyTable = document.createElement('tbody');

	data.forEach(elem => {
		let bodyLine = document.createElement('tr');
		let c_brand = document.createElement('th');
		c_brand.innerText = elem.brand;

		let c_model = document.createElement('th');
		c_model.innerText = elem.model;

		let c_type = document.createElement('th');
		c_type.innerText = elem.type;

		let c_regNum = document.createElement('th');
		c_regNum.innerText = elem.regNum;

		let c_yearIssue = document.createElement('th');
		c_yearIssue.innerText = elem.yearIssue;

		let c_standingCapacity = document.createElement('th');
		c_standingCapacity.innerText = elem.standingCapacity;

		let c_seatingCapacity = document.createElement('th');
		c_seatingCapacity.innerText = elem.seatingCapacity;

		let c_specialCapacity = document.createElement('th');
		c_specialCapacity.innerText = elem.specialCapacity;

		let c_purchaseDate = document.createElement('th');
		c_purchaseDate.innerText = convertDate(elem.purchaseDate);

		let c_status = document.createElement('th');
		c_status.innerText = elem.status;

		let c_companylink = document.createElement('th');
		let companyLink = document.createElement('a');
		companyLink.innerText = elem.companyName;
		companyLink.href = '/company/' + elem.companyId;
		c_companylink.appendChild(companyLink);

		let c_link = document.createElement('th');
		let link = document.createElement('a');
		link.innerText = 'Подробнее';
		link.href = '/bus/' + elem.busId;
		c_link.appendChild(link);

		bodyLine.appendChild(c_brand);
		bodyLine.appendChild(c_model);
		bodyLine.appendChild(c_type);
		bodyLine.appendChild(c_regNum);
		bodyLine.appendChild(c_yearIssue);
		bodyLine.appendChild(c_standingCapacity);
		bodyLine.appendChild(c_seatingCapacity);
		bodyLine.appendChild(c_specialCapacity);
		bodyLine.appendChild(c_purchaseDate);
		bodyLine.appendChild(c_status);
		bodyLine.appendChild(c_companylink);
		bodyLine.appendChild(c_link);
		bodyTable.appendChild(bodyLine);
	})

	table.appendChild(bodyTable);
	block.appendChild(table);
	body.appendChild(block);
}

/*====================================================================================*/

function getBusModelAll() {
	axios({
		method: 'POST',
		url: '/bus/getBusModelList/',
		headers: {
			'Authorization': localStorage.getItem('token')
		}
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printBusModelAll(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);

		let body = document.querySelector('body');
		let block = document.createElement('div');
		block.className = 'list';

		let blockName = document.createElement('h1');
		blockName.className = 'title';
		blockName.innerText = 'Модели автотранспорта';
		block.appendChild(blockName);

		let exception = document.createElement('p');
		exception.className = 'exception';
		exception.innerText = 'Эта станица вам недоступна.'
		
		block.appendChild(exception);
		body.appendChild(block);
	});
}

function printBusModelAll(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Модели автотранспорта';
	block.appendChild(blockName);

	let table = document.createElement('table');
	table.className = 'table';

	let headTable = document.createElement('thead');
	let headLine = document.createElement('tr');
	let column_brand = document.createElement('th');
	column_brand.innerText = 'Бренд';

	let column_model = document.createElement('th');
	column_model.innerText = 'Модель';

	let column_type = document.createElement('th');
	column_type.innerText = 'Тип';

	let column_yearIssue = document.createElement('th');
	column_yearIssue.innerText = 'Год выпуска';

	let column_standingCapacity = document.createElement('th');
	column_standingCapacity.innerText = 'Стоячие места';

	let column_seatingCapacity = document.createElement('th');
	column_seatingCapacity.innerText = 'Сидячие места';

	let column_specialCapacity = document.createElement('th');
	column_specialCapacity.innerText = 'Специальные места';

	headLine.appendChild(column_brand);
	headLine.appendChild(column_model);
	headLine.appendChild(column_type);
	headLine.appendChild(column_yearIssue);
	headLine.appendChild(column_standingCapacity);
	headLine.appendChild(column_seatingCapacity);
	headLine.appendChild(column_specialCapacity);

	headTable.appendChild(headLine);
	table.appendChild(headTable);

	let bodyTable = document.createElement('tbody');

	data.forEach(elem => {
		let bodyLine = document.createElement('tr');
		let c_brand = document.createElement('th');
		c_brand.innerText = elem.brand;

		let c_model = document.createElement('th');
		c_model.innerText = elem.model;

		let c_type = document.createElement('th');
		c_type.innerText = elem.type;

		let c_yearIssue = document.createElement('th');
		c_yearIssue.innerText = elem.yearIssue;

		let c_standingCapacity = document.createElement('th');
		c_standingCapacity.innerText = elem.standingCapacity;

		let c_seatingCapacity = document.createElement('th');
		c_seatingCapacity.innerText = elem.seatingCapacity;

		let c_specialCapacity = document.createElement('th');
		c_specialCapacity.innerText = elem.specialCapacity;

		bodyLine.appendChild(c_brand);
		bodyLine.appendChild(c_model);
		bodyLine.appendChild(c_type);
		bodyLine.appendChild(c_yearIssue);
		bodyLine.appendChild(c_standingCapacity);
		bodyLine.appendChild(c_seatingCapacity);
		bodyLine.appendChild(c_specialCapacity);
		bodyTable.appendChild(bodyLine);
	})

	table.appendChild(bodyTable);
	block.appendChild(table);
	body.appendChild(block);
}

/*====================================================================================*/

function getBusBrandAll() {
	axios({
		method: 'POST',
		url: '/bus/getBusBrandList/',
		headers: {
			'Authorization': localStorage.getItem('token')
		}
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printBusBrandAll(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);

		let body = document.querySelector('body');
		let block = document.createElement('div');
		block.className = 'list';

		let blockName = document.createElement('h1');
		blockName.className = 'title';
		blockName.innerText = 'Бренды автотранспорта';
		block.appendChild(blockName);

		let exception = document.createElement('p');
		exception.className = 'exception';
		exception.innerText = 'Эта станица вам недоступна.'
		
		block.appendChild(exception);
		body.appendChild(block);
	});
}

function printBusBrandAll(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Бренды автотранспорта';
	block.appendChild(blockName);

	let table = document.createElement('table');
	table.className = 'table';

	let headTable = document.createElement('thead');
	let headLine = document.createElement('tr');
	let column_brand = document.createElement('th');
	column_brand.innerText = 'Бренд';

	headLine.appendChild(column_brand);

	headTable.appendChild(headLine);
	table.appendChild(headTable);

	let bodyTable = document.createElement('tbody');

	data.forEach(elem => {
		let bodyLine = document.createElement('tr');
		let c_brand = document.createElement('th');
		c_brand.innerText = elem.brand;

		bodyLine.appendChild(c_brand);
		bodyTable.appendChild(bodyLine);
	})

	table.appendChild(bodyTable);
	block.appendChild(table);
	body.appendChild(block);
}

/*====================================================================================*/

function getBusTypeAll() {
	axios({
		method: 'POST',
		url: '/bus/getBusTypeList/',
		headers: {
			'Authorization': localStorage.getItem('token')
		}
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printBusTypeAll(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);

		let body = document.querySelector('body');
		let block = document.createElement('div');
		block.className = 'list';

		let blockName = document.createElement('h1');
		blockName.className = 'title';
		blockName.innerText = 'Типы автотранспорта';
		block.appendChild(blockName);

		let exception = document.createElement('p');
		exception.className = 'exception';
		exception.innerText = 'Эта станица вам недоступна.'
		
		block.appendChild(exception);
		body.appendChild(block);
	});
}

function printBusTypeAll(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Типы автотранспорта';
	block.appendChild(blockName);

	let table = document.createElement('table');
	table.className = 'table';

	let headTable = document.createElement('thead');
	let headLine = document.createElement('tr');
	let column_type = document.createElement('th');
	column_type.innerText = 'Тип';

	headLine.appendChild(column_type);

	headTable.appendChild(headLine);
	table.appendChild(headTable);

	let bodyTable = document.createElement('tbody');

	data.forEach(elem => {
		let bodyLine = document.createElement('tr');
		let c_type = document.createElement('th');
		c_type.innerText = elem.type;

		bodyLine.appendChild(c_type);
		bodyTable.appendChild(bodyLine);
	})

	table.appendChild(bodyTable);
	block.appendChild(table);
	body.appendChild(block);
}

/*====================================================================================*/

function getBusStatusAll() {
	axios({
		method: 'POST',
		url: '/bus/getBusStatusList/',
		headers: {
			'Authorization': localStorage.getItem('token')
		}
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printBusStatusAll(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);

		let body = document.querySelector('body');
		let block = document.createElement('div');
		block.className = 'list';

		let blockName = document.createElement('h1');
		blockName.className = 'title';
		blockName.innerText = 'Статусы автотранспорта';
		block.appendChild(blockName);

		let exception = document.createElement('p');
		exception.className = 'exception';
		exception.innerText = 'Эта станица вам недоступна.'
		
		block.appendChild(exception);
		body.appendChild(block);
	});
}

function printBusStatusAll(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Статусы автотранспорта';
	block.appendChild(blockName);

	let table = document.createElement('table');
	table.className = 'table';

	let headTable = document.createElement('thead');
	let headLine = document.createElement('tr');
	let column_status = document.createElement('th');
	column_status.innerText = 'Статус';

	headLine.appendChild(column_status);

	headTable.appendChild(headLine);
	table.appendChild(headTable);

	let bodyTable = document.createElement('tbody');

	data.forEach(elem => {
		let bodyLine = document.createElement('tr');
		let c_status = document.createElement('th');
		c_status.innerText = elem.status;

		bodyLine.appendChild(c_status);
		bodyTable.appendChild(bodyLine);
	})

	table.appendChild(bodyTable);
	block.appendChild(table);
	body.appendChild(block);
}