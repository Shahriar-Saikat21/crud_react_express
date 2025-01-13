import {Contact} from '../models/contactModel.js';


export const contactUpdateDeleteController = {};

//update a contact detail
contactUpdateDeleteController.update = async(req,res)=>{
    try {
        const { id } = req.query.id;
        const updates = req.body;

        // Update the contact with only the provided fields
        const updatedContact = await Contact.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

        if (!updatedContact) {
            return res.json({ success:false});
        }

        res.json( { success:true});
    } catch (error) {
        console.error("Error updating contact:", error);
        res.json({ success:false})
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