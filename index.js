const app = require('express')();
const port = 3000;

const route = require('./routes/all-route');

app.use(route);

app.set('views', './temp');
app.set('view engine', 'pug');

app.listen(port, function (err, data) {
	if (!err) {
		console.log('Server listen on port ' + port);
	}
});