const user = require('../db/user');

exports.getuser = (req,res)=>{
    user.find().exec((err,doc)=>{
        if(err) res.status(500).json({
            error : err
        })
        res.json(doc);
    })
}

exports.getusersearch = async(req,res)=>{
    try{
        let name = req.params.name
        user.find({name : name}).exec((err,doc)=>{
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

exports.getusersortname = (req,res)=>{
    user.find().sort("name").exec((err,doc)=>{
        if(err) res.status(500).json({
            error : err
        })
        res.json(doc);
    })
}

exports.getusersortnamereverse = (req,res)=>{
    user.find().sort("name").exec((err,doc)=>{
        if(err) res.status(500).json({
            error : err
        })
        res.json(doc.reverse());
    })
}

exports.getusersortseat = (req,res)=>{
    user.find().sort("seatno").exec((err,doc)=>{
        if(err) res.status(500).json({
            error : err
        })
        res.json(doc);
    })
}

exports.getusersortseatreverse = (req,res)=>{
    user.find().sort("seatno").exec((err,doc)=>{
        if(err) res.status(500).json({
            error : err
        })
        res.json(doc.reverse());
    })
}