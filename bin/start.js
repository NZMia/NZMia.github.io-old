const server = require('../server');

server.app.listen(server.port, (err) => {
	if(err){
		console.log(err)
	}else{
		console.log(`===>open http://${server.host}:${server.port} in a browser to view the app`);
	}
});
