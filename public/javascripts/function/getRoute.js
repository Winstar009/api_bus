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
	block.className = 'routeDetail';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Маршрут: ' + data[0].name;
	block.appendChild(blockName);

	let el = document.createElement('div');
	el.className = 'infoRoute';

	let time = document.createElement('p');
	time.className = 'time';
	time.innerText = 'Время работы: ' + convertTime(data[0].start) + ' - ' + convertTime(data[0].finish);

	let link = document.createElement('a');
	link.className = 'companyLink';
	link.innerText = data[0].company;
	link.href = '/company/' + data[0].companyId;

	let company = document.createElement('p');
	company.className = 'company';
	company.innerText = 'Управляющая компания: ';

	company.appendChild(link);
	el.appendChild(time);
	el.appendChild(company);

	block.appendChild(el);

	body.appendChild(block);

	getSchedule(data[0].name);
	getStop(data[0].name);
}