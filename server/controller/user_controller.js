var userModel = require("../model/user")

exports.getUsers = function(req,res,next){
    userModel.find((err,data)=>{
        if(err){
            return next(new new Error("cannot fetch users"))
        }
        res.json(data)
    })
}
exports.addUser = function (req, res) {
    var user = req.body;
	var newUser = new userModel(user);

    newUser.save((err,data) =>{
        if(err){
            return next(new new Error("cannot save user"))
        }
        res.json(data)
    })
}
		
exports.findUser = function(req,res){
    const query = req.query;
    userModel.find(query)
    .then(data =>{
        res.json({
            found: data.length,
            user:data})
    })
    .catch(err =>{
        res.json({
            message: "Failed",
            Error: err.message
        })
    })
}

exports.updateUser = function(req,res){
    const query = req.query;
    const name = query.id;

    userModel.findOneAndUpdate(name,query, {new:true})
    .then(profile =>{
        res.json({
            message:"Update Successful",
            user:profile
        })
    })
}
exports.deleteUser = function(req,res){
    var id = req.params.id
    userModel.remove({"_id": id}, function(err, result) {
        if (err) {
            res.send(err)
        } else {
           res.send("successful")
        }
    })  

}