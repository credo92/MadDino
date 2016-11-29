var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static(__dirname+''))
.listen(PORT, function (){
	console.log('express server started at port:'+PORT);
});
