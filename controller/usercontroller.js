const user = require('../db/user');

exports.getusercount = async(req,res)=>{
    let result = await user.count();
    res.json({
        count : result
    })
}

exports.getuser = async(req,res)=>{
    try{
        user.find({}).select('name surname').exec((err,doc)=>{
            if(err) res.status(500).json({
                error : err
            })
            res.json(doc);
        })
    }catch(err){
        res.status(500).json({
            error : err
        })
    }
}

exports.getusersearch = async(req,res)=>{
    try{
        let name = req.params.name
        user.find({name : name}).select("name surname").exec((err,doc)=>{
            if(err) res.status(500).json({
                error : err
            })
            res.json(doc);
        })
    }catch(err){
        res.status(500).json({
            error : err
        })
    }
}

exports.getusersort = async(req,res)=>{
    try{
        user.find({}).select('name surname').sort('name').exec((err,doc)=>{
            if(err) res.status(500).json({
                error : err
            })
            res.json(doc);
        })
    }catch(err){
        res.status(500).json({
            error : err
        })
    }
}
exports.getusersortreverse = async(req,res)=>{
    try{
        user.find({}).select('name surname').sort('name').exec((err,doc)=>{
            if(err) res.status(500).json({
                error : err
            })
            res.json(doc.reverse());
        })
    }catch(err){
        res.status(500).json({
            error : err
        })
    }
}

exports.registeruser = async(req,res)=>{
    try{
        const {name, surname, phone} = req.body;
        if(!name || !surname || !phone){
            res.status(400).json({
                message : "Information uncomplete"
            })
        }
        let schema = new user({
            name : name,
            surname : surname,
            phone : phone,
            seatno : null
        })
        await schema.save();
        res.json({
            message : 'Successful'
        })
    }catch(err){
        if(err.code === 11000){
            res.status(400).json({
                message : "User duplicate"
            })
        }
        res.status(500).json({
            error : err
        })
    }
}