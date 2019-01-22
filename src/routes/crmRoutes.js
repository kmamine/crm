import { addNewContact,
        getContacts, 
        getContactWithID, 
        updateContact,
        deleteContact
     } from "../controllers/crmController";


const routes =(app)=>{
    app.route('/contact')
    
    // get all  contacts
    .get((req,res,next)=>{
        // middelware
        console.log(`Request from ${req.originalUrl}`);
        console.log(`Request type ${req.method}`);
        next();
    },getContacts)
    
    // POST endpoint
    .post(addNewContact)
    
    
    // =========================================
    app.route('/contact/:contactId')
    // GET  specific contact
    .get(getContactWithID)

    // PUT Request
    .put(updateContact)

    // delete Request 
    .delete(deleteContact)
}

export default routes;
