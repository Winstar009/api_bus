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

		// location = '/';
	})
	.catch(function (error) {
		console.log(error);
	});
}