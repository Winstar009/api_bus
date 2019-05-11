function getRoutes() {
	axios({
		method: 'POST',
		url: '/route/getRoutes'
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		printRoutes(JSON.parse(response.data).data);
	})
	.catch(function (error) {
		console.log(error);
	});
}

function printRoutes(data) {
	let body = document.querySelector('body');
	let block = document.createElement('div');
	block.className = 'routes';

	let blockName = document.createElement('h1');
	blockName.className = 'title';
	blockName.innerText = 'Список маршрутов';
	block.appendChild(blockName);

	data.forEach(elem => {
		let el = document.createElement('div');
		el.className = 'route';

		let link = document.createElement('a');
		link.className = 'routeLink';
		link.innerText = elem.name;
		link.href = '/route/' + elem.routeId;

		let name = document.createElement('h2');
		name.className = 'routeName';

		let time = document.createElement('p');
		time.className = 'time';
		time.innerText = convertTime(elem.start) + ' - ' + convertTime(elem.finish);

		name.appendChild(link);
		el.appendChild(name);
		el.appendChild(time);

		block.appendChild(el);
	});

	body.appendChild(block);
}