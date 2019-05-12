function getRoute() {
	let path = document.location.pathname;
	let routeId = path.replace('/route/', '');

	axios({
		method: 'POST',
		url: '/route/getRoute/' + routeId
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printRoute(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);
	});
}

function printRoute(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Маршрут: ' + data[0].name;
	block.appendChild(blockName);

	let el = document.createElement('div');
	el.className = 'info';

	let time = document.createElement('p');
	time.innerText = 'Время работы: ' + convertTime(data[0].start) + ' - ' + convertTime(data[0].finish);

	let link = document.createElement('a');
	link.innerText = data[0].company;
	link.href = '/company/' + data[0].companyId;

	let company = document.createElement('p');
	company.innerText = 'Управляющая компания: ';

	company.appendChild(link);
	el.appendChild(time);
	el.appendChild(company);

	block.appendChild(el);

	body.appendChild(block);

	getSchedule(data[0].companyId);
	getStopRoute(data[0].companyId);
}

/*====================================================================================*/

function getRouteList() {
	axios({
		method: 'POST',
		url: '/route/getRouteList'
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printRouteList(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);
	});
}

function printRouteList(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Маршруты';
	block.appendChild(blockName);

	data.forEach(elem => {
		let el = document.createElement('div');
		el.className = 'picture';

		let name = document.createElement('h2');
		let link = document.createElement('a');
		link.innerText = elem.name;
		link.href = '/route/' + elem.routeId;
		name.appendChild(link);		

		let time = document.createElement('p');
		time.innerText = convertTime(elem.start) + ' - ' + convertTime(elem.finish);
		
		el.appendChild(name);
		el.appendChild(time);

		block.appendChild(el);
	});

	body.appendChild(block);
}

/*====================================================================================*/

function getRouteAll() {
	axios({
		method: 'POST',
		url: '/route/getRouteList'
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printRouteAll(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);
	});
}

function printRouteAll(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Маршруты';
	block.appendChild(blockName);

	let table = document.createElement('table');
	table.className = 'table';

	let headTable = document.createElement('thead');
	let headLine = document.createElement('tr');
	let column_name = document.createElement('th');
	column_name.innerText = 'Название';

	let column_start = document.createElement('th');
	column_start.innerText = 'Время начала работы маршрута';

	let column_finish = document.createElement('th');
	column_finish.innerText = 'Время окончания работы маршрута';

	let column_company = document.createElement('th');
	column_company.innerText = 'Управляющая компания';

	let column_link = document.createElement('th');

	headLine.appendChild(column_name);
	headLine.appendChild(column_start);
	headLine.appendChild(column_finish);
	headLine.appendChild(column_company);
	headLine.appendChild(column_link);
	headTable.appendChild(headLine);
	table.appendChild(headTable);

	let bodyTable = document.createElement('tbody');

	data.forEach(elem => {
		let bodyLine = document.createElement('tr');
		let c_name = document.createElement('th');
		c_name.innerText = elem.name;

		let c_start = document.createElement('th');
		c_start.innerText = convertTime(elem.start);

		let c_finish = document.createElement('th');
		c_finish.innerText = convertTime(elem.finish);

		let c_companylink = document.createElement('th');
		let companyLink = document.createElement('a');
		companyLink.innerText = elem.company;
		companyLink.href = '/company/' + elem.companyId;
		c_companylink.appendChild(companyLink);

		let c_link = document.createElement('th');
		let link = document.createElement('a');
		link.innerText = 'Подробнее';
		link.href = '/route/' + elem.routeId;
		c_link.appendChild(link);

		bodyLine.appendChild(c_name);
		bodyLine.appendChild(c_start);
		bodyLine.appendChild(c_finish);
		bodyLine.appendChild(c_companylink);
		bodyLine.appendChild(c_link);
		bodyTable.appendChild(bodyLine);
	})

	table.appendChild(bodyTable);
	block.appendChild(table);

	body.appendChild(block);
}