function getSchedule(route) {
	axios({
		method: 'POST',
		url: '/schedule/getSchedule/' + route,
		headers: {
			'Authorization': localStorage.getItem('token')
		}
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printSchedule(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);
	});
}

function printSchedule(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'list';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Расписание';
	block.appendChild(blockName);

	let table = document.createElement('table');
	table.className = 'table';

	let headTable = document.createElement('thead');
	let headLine = document.createElement('tr');
	let column_s = document.createElement('th');
	column_s.innerText = 'Начало рейса';

	let column_f = document.createElement('th');
	column_f.innerText = 'Окончание рейса';

	headLine.appendChild(column_s);
	headLine.appendChild(column_f);
	headTable.appendChild(headLine);
	table.appendChild(headTable);

	let bodyTable = document.createElement('tbody');

	data.forEach(elem => {
		let bodyLine = document.createElement('tr');
		let c_s = document.createElement('th');
		c_s.innerText = convertTime(elem.timeStart);

		let c_f = document.createElement('th');
		c_f.innerText = convertTime(elem.timeFinish);

		bodyLine.appendChild(c_s);
		bodyLine.appendChild(c_f);
		bodyTable.appendChild(bodyLine);
	})

	table.appendChild(bodyTable);
	block.appendChild(table);
	body.appendChild(block);
}