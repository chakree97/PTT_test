const seats = require('../db/seat');
const user = require('../db/user');

exports.setupseat = ()=>{
    seats.find().exec(async(err,doc)=>{
        if(err) console.log(err);
        if(doc.length === 0){
            let schema = new seats({
                count : 100
            });
            await schema.save();
        }
    })
}

exports.getseat = (req,res)=>{
    seats.find().exec(async(err,doc)=>{
        if(err) res.status(500).json({
            error : err
        })
        let count = await user.count();
        let result = doc[0].count - count;
        res.json({
            count : result
        })
    })
}

exports.getseatdefault = (req,res)=>{
    seats.find().exec((err,doc)=>{
        if(err) res.status(500).json({
            error : err
        })
        res.json(doc[0]);
    })
}

exports.editseat = (req,res)=>{
    let many = req.params.count;
    seats.updateOne({count : many}).exec(async(err,doc)=>{
        if(err) res.status(500).json({
            error : err
        })
        res.json({
            message : "Successful"
        });
    })
}

exports.setseat = (req,res)=>{
    const {name,seatno} = req.body
    try{
        if(!name || !seatno)res.status(400).json({
            message : "Information uncomplete"
        })
        user.find({seatno : seatno}).exec((err,doc)=>{
            if(err)res.status(500).json({
                error : err
            })
            if(doc.length !== 0){
                res.status(400).json({
                    message : "Seat no. duplicate"
                })
            }
            else{
                user.updateMany({name : name},{seatno : seatno},(err,num)=>{
                    if(err)res.status(500).json({
                        error : err
                    })
                    res.json({
                        message : "Successful"
                    });
                })
            }
        })
    }catch(err){
        res.status(500).json({
            error : err
        })
    }
}