import { addNewContact, getContacts,getContactWithID, updateContact,deleteContact} from "../controllers/crmController"
const routes = (app) => {
    app.route('/contact')
    .get((req,res,next) => {
        console.log(`Request from : ${req.originalUrl}`)
        console.log(`Request from : ${req.method}`)
        next();
    },  getContacts)

    .post(addNewContact);

    app.route('/contact/:contactID')

    .get(getContactWithID)

    .put(updateContact)

    .delete(deleteContact)
    
}

export default routes;