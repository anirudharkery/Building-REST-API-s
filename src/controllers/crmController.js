import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";


const Contact = mongoose.model('Contact',ContactSchema);

export const addNewContact = async (req, res) => { 
    let newContact = new Contact(req.body); 
    let contact = await newContact.save(); 
    res.json(contact); };


export const getContacts = async (req, res) => { 
    let contacts = await Contact.find({}); 
    res.json(contacts); };

export const getContactWithID = async (req, res) => { 
    let contacts = await Contact.findById(req.params.contactID); 
    res.json(contacts); };

export const updateContact = async (req, res) => { 
    let contacts = await Contact.findOneAndUpdate({_id: req.params.contactID},req.body, { new : true}); 
    res.json(contacts); };

export const deleteContact = async (req, res) => { 
    await Contact.deleteOne({ _id: req.params.contactId }); 
    res.json({ message: "Successfully deleted contact" }); };