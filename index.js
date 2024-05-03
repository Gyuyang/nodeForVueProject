const express = require('express')
const app = express();

app.get('/req', (req, res) => {
	console.log(req.method);
	console.log(req.url);
	console.log(req.httpVersion);
	console.log(req.headers);
	
	console.log(req.path)
	console.log(req.query)
	console.log(req.ip)
	// console.log(req.method);
	res.send('JSON.stringify(req)')
})

app.listen(9715, () => {
	console.log('服务启动。。。')
})