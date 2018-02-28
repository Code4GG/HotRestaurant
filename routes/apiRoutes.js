const tableData = require("../data/tableData");
const waitListData = require("../data/waitinglistData");

module.exports = function(app){

	app.get('/api/tables', function(req,res){
		res.json(tableData);
	});

	app.get('/api/waitlist', function(req,res){
		res.json(waitListData);
	});

	app.post('/api/tables', function(req,res){
		if (tableData.length < 5){
			tableData.push(req.body);
			res.json(true);
		} else {
			waitingListData.push(req.body);
			res.json(false);
		}
	})

}