const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3001;
const router = require('./router.js');

app.use(express.json());
app.use(cors());
app.use(router);

try {
	app.listen(PORT, () => {
		console.log(`UP N' RUNNIN' ON PORT ${PORT}`);
	});
} catch (err) {
	console.log('SERVER ERROR', err);
}
