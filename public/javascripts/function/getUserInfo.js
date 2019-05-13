function getUserInfo() {
	axios({
		method: 'POST',
		url: '/api/user/getUserInfo',
		headers: {
			'Authorization': localStorage.getItem('token')
		}
	})
	.then(function (response) {
		console.log(response);
		console.log(JSON.parse(response.data));

		let info = JSON.stringify(JSON.parse(response.data).data);
		localStorage.setItem('info', info);

		location = '/';
	})
	.catch(function (error) {
		console.log(error);
	});
}