const todoModel = require('../model/bookingList');

module.exports.create = async function(req,res){
    const { service , fName , lName , email , date , time } = req.body;

    try{
        const resp = await todoModel.create({
            service,
            fName,  
            lName,
            email,
            date,
            time,  
        });
    
        res.send({
            success: true,
            data: resp,
        });
    }catch(e){        
        res.send({
            success: false,
            error: e,
        });
    }
    
};
