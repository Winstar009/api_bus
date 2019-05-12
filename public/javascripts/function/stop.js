function getStopRoute(route) {
	axios({
		method: 'POST',
		url: '/stop/getStop/' + route
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printStopRoute(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);
	});
}

function printStopRoute(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Остановки';
	block.appendChild(blockName);

	let table = document.createElement('table');
	table.className = 'table';

	let headTable = document.createElement('thead');
	let headLine = document.createElement('tr');
	let column_s = document.createElement('th');
	column_s.innerText = 'Название';

	let column_f = document.createElement('th');
	column_f.innerText = 'Описание';

	headLine.appendChild(column_s);
	headLine.appendChild(column_f);
	headTable.appendChild(headLine);
	table.appendChild(headTable);

	let bodyTable = document.createElement('tbody');

	data.forEach(elem => {
		let bodyLine = document.createElement('tr');
		let c_s = document.createElement('th');
		c_s.innerText = elem.stopName;

		let c_f = document.createElement('th');
		c_f.innerText = elem.stopDescription;

		bodyLine.appendChild(c_s);
		bodyLine.appendChild(c_f);
		bodyTable.appendChild(bodyLine);
	})

	table.appendChild(bodyTable);
	block.appendChild(table);
	body.appendChild(block);
}

/*====================================================================================*/

function getStopAll() {
	axios({
		method: 'POST',
		url: '/stop/getStopList/'
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printStop(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);
	});
}

function printStop(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Остановки';
	block.appendChild(blockName);

	let table = document.createElement('table');
	table.className = 'table';

	let headTable = document.createElement('thead');
	let headLine = document.createElement('tr');
	let column_s = document.createElement('th');
	column_s.innerText = 'Название';

	let column_f = document.createElement('th');
	column_f.innerText = 'Описание';

	headLine.appendChild(column_s);
	headLine.appendChild(column_f);
	headTable.appendChild(headLine);
	table.appendChild(headTable);

	let bodyTable = document.createElement('tbody');

	data.forEach(elem => {
		let bodyLine = document.createElement('tr');
		let c_s = document.createElement('th');
		c_s.innerText = elem.name;

		let c_f = document.createElement('th');
		c_f.innerText = elem.description;

		bodyLine.appendChild(c_s);
		bodyLine.appendChild(c_f);
		bodyTable.appendChild(bodyLine);
	})

	table.appendChild(bodyTable);
	block.appendChild(table);
	body.appendChild(block);
}