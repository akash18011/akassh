const express = require("express");
const app = express();
const router = express.Router();


app.use(express.json()); // Get Raw data from post API
app.use(express.urlencoded({extended: true}));

app.use((err, req, res, next) => { // body parser error catcher
	if (err instanceof SyntaxError) {
		res.status(400).json({status:400,msg:"Invalid Data send",data:null});
	}else {
		next();
	}
});

app.get("/data",(req,res) => {
	res.status(200).json({status:200,msg:"Success",data:null});
});

app.use("/*",(req,res) => {
	res.status(404).json({status:404,msg:"Not Found",data:null});
});

const server = app.listen(3000,(err) => {
	if(!err) {
		console.log("server running on 3000");
	}
	else {
		console.log("Error while running the server!");
	}
});
<<<<<<< HEAD

module.exports = { app, server };
=======
>>>>>>> 1ec412cf13855d43dc335532d49c6ec855965a48
