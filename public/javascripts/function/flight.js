function getFlightPersonnel() {
	let path = document.location.pathname;
	let personnelId = path.replace('/flight/', '');

	axios({
		method: 'POST',
		url: '/flight/getFlight/' + personnelId,
		headers: {
			'Authorization': localStorage.getItem('token')
		}
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printFlightAll(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);

		let body = document.querySelector('body');
		let block = document.createElement('div');
		block.className = 'list';

		let blockName = document.createElement('h1');
		blockName.className = 'title';
		blockName.innerText = 'Рейсы';
		block.appendChild(blockName);

		let exception = document.createElement('p');
		exception.className = 'exception';
		exception.innerText = 'Эта станица вам недоступна.'
		
		block.appendChild(exception);
		body.appendChild(block);
	});
}

function getFlightAll() {
	axios({
		method: 'POST',
		url: '/flight/getFlightList/',
		headers: {
			'Authorization': localStorage.getItem('token')
		}
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printFlightAll(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);

		let body = document.querySelector('body');
		let block = document.createElement('div');
		block.className = 'list';

		let blockName = document.createElement('h1');
		blockName.className = 'title';
		blockName.innerText = 'Рейсы';
		block.appendChild(blockName);

		let exception = document.createElement('p');
		exception.className = 'exception';
		exception.innerText = 'Эта станица вам недоступна.'
		
		block.appendChild(exception);
		body.appendChild(block);
	});
}

function printFlightAll(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Рейсы';
	block.appendChild(blockName);

	let table = document.createElement('table');
	table.className = 'table';

	let headTable = document.createElement('thead');

	let hLine = document.createElement('tr');

	let column_schedule = document.createElement('th');
	column_schedule.innerText = 'Расписание';
	column_schedule.colSpan = 4;

	let column_personnel = document.createElement('th');
	column_personnel.innerText = 'Персонал';
	column_personnel.colSpan = 2;

	let column_bus = document.createElement('th');
	column_bus.innerText = 'Автотранспорт';
	column_bus.colSpan = 3;

	hLine.appendChild(column_schedule);
	hLine.appendChild(column_personnel);
	hLine.appendChild(column_bus);
	headTable.appendChild(hLine);

	let headLine = document.createElement('tr');

	let column_route = document.createElement('th');
	column_route.innerText = 'Маршрут';

	let column_date = document.createElement('th');
	column_date.innerText = 'Дата';

	let column_start = document.createElement('th');
	column_start.innerText = 'Время начала рейса';

	let column_finish = document.createElement('th');
	column_finish.innerText = 'Время окончания рейса';

	let column_fio = document.createElement('th');
	column_fio.innerText = 'ФИО';

	let column_phone = document.createElement('th');
	column_phone.innerText = 'Телефон';

	let column_regNum = document.createElement('th');
	column_regNum.innerText = 'Регистрационный номер';

	let column_busBrand = document.createElement('th');
	column_busBrand.innerText = 'Бренд автотранспорта';

	let column_busModel = document.createElement('th');
	column_busModel.innerText = 'Модель автотранспорта';

	headLine.appendChild(column_route);
	headLine.appendChild(column_date);
	headLine.appendChild(column_start);
	headLine.appendChild(column_finish);
	headLine.appendChild(column_fio);
	headLine.appendChild(column_phone);
	headLine.appendChild(column_regNum);
	headLine.appendChild(column_busBrand);
	headLine.appendChild(column_busModel);
	headTable.appendChild(headLine);
	table.appendChild(headTable);

	let bodyTable = document.createElement('tbody');

	data.forEach(elem => {
		let bodyLine = document.createElement('tr');

		let l_route = document.createElement('a');
		l_route.innerText = elem.route;
		l_route.href = '/route/' + elem.routeId;
		let c_route = document.createElement('th');
		c_route.appendChild(l_route);

		let c_date = document.createElement('th');
		c_date.innerText = convertDate(elem.date);

		let c_start = document.createElement('th');
		c_start.innerText = convertTime(elem.timeStart);

		let c_finish = document.createElement('th');
		c_finish.innerText = convertTime(elem.timeFinish);

		let l_personnel = document.createElement('a');
		l_personnel.innerText = elem.fio;
		l_personnel.href = '/personnel/' + elem.personnelId;
		let c_fio = document.createElement('th');
		c_fio.appendChild(l_personnel);

		let c_phone = document.createElement('th');
		c_phone.innerText = elem.phone;

		let l_bus = document.createElement('a');
		l_bus.innerText = elem.regNum;
		l_bus.href = '/bus/' + elem.busId;
		let c_regNum = document.createElement('th');
		c_regNum.appendChild(l_bus);

		let c_brand = document.createElement('th');
		c_brand.innerText = elem.brand;

		let c_model = document.createElement('th');
		c_model.innerText = elem.model;		

		bodyLine.appendChild(c_route);
		bodyLine.appendChild(c_date);
		bodyLine.appendChild(c_start);
		bodyLine.appendChild(c_finish);
		bodyLine.appendChild(c_fio);
		bodyLine.appendChild(c_phone);
		bodyLine.appendChild(c_regNum);
		bodyLine.appendChild(c_brand);
		bodyLine.appendChild(c_model);
		bodyTable.appendChild(bodyLine);
	})

	table.appendChild(bodyTable);
	block.appendChild(table);
	body.appendChild(block);
}