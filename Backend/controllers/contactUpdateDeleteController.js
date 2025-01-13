import {Contact} from '../models/contactModel.js';


export const contactUpdateDeleteController = {};

//update a contact detail
contactUpdateDeleteController.update = async(req,res)=>{
    try {
        await Contact.updateOne({
            _id:req.query.id},
            {$set:{
                contactName:req.body.contactName,
                address:req.body.address,
                email:req.body.email,
                phone:req.body.phone
            }
        });
        res.json({success:true});
    } catch (error) {
        console.log(error);
        res.json({success:false});
    }
}

//delete a contact
contactUpdateDeleteController.delete = async(req,res)=>{
    try {
        await Contact.deleteOne({_id:req.query.id});
        res.json({success:true});
    } catch (error) {
        console.log(error);
        res.json({success:false});
    }
}