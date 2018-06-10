const express = require('express')
const app = express()

app.get('/', function (req, res) {
	//console.log();
	res.sendFile(__dirname+'/TestDilam.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
