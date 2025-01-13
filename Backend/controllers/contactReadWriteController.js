import {Contact} from '../models/contactModel.js';


export const contactReadWriteController = {};

// add contact
contactReadWriteController.add = async(req,res) => {
    try {
        const { contactName, address, email, phone } = req.body;

        if (!contactName || !phone) {
            return res.json({ success: false });
        }

        const newContact = new Contact({
            contactName,
            address: address || "", 
            email: email || "",
            phone,
            user: req.id,
        });


        const savedContact = await newContact.save();

        res.json({ success: true });
    } catch (error) {
        console.error("Error in add controller:", error.message);
        res.json({ success: false });
    }
}

// get all contact
contactReadWriteController.getAll = async(req,res) => {
    try {
        const allContacts = await Contact.find({user:req.id});
        res.json({success:true,data:allContacts});
    } catch (err) {
        console.log(err.message)
        res.json({success:false});
    }
}