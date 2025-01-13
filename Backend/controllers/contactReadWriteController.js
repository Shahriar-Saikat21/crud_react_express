import {Contact} from '../models/contactModel.js';


export const contactReadWriteController = {};

// add contact
contactReadWriteController.add = async(req,res) => {
    try {
        const { contactName, address, email, phone } = req.body;
        const user = req.id;

        // Validate required fields
        if (!contactName || !phone) {
            return res.json({sucess : false });
        }

        // Create a new contact
        const newContact = new Contact({
            contactName,
            address: address || "", // Default to an empty string if not provided
            email: email || "",     // Default to an empty string if not provided
            phone,
            user,
        });

        // Save the contact to the database
        const savedContact = await newContact.save();

        res.json({sucess : true});
    } catch (error) {
        console.error("Error saving contact:", error);
        res.json({sucess : false });
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