var express=require("express")
var app=express();

var CustomerController=function(req, res){
  console.log("Invoking  rest api for customer list");
  var customer = [
    {id:1, name:"john",balance:10000},
    {id:2, name:"thomas",balance:2000},
	{id:3, name:"thor",balance:200},
    {id:4, name:"loky",balance:100}
  ];
  res.send(customer);
};

app.get ('/customer',productController);
var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8086", host, port)
})