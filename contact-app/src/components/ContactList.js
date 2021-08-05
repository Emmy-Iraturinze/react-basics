import React from 'react'
import ContactCard from './ContactCard';
import {Link } from 'react-router-dom'

const ContactList = (props) => {
     console.log(props);
   
     const deleteContactHandler = (id) =>{
          props.getContactId();
     }
  
    
     const renderContactList =props.contacts.map((contact)=>{


          return   <ContactCard contact={contact} clickHandler={deleteContactHandler} key={ contact}/>;
         

     });
     
     return (
          <div>
               <h2>Contact List
               <Link to="/add">
               <button class="btn btn-primary ">Go to home page</button>
               </Link>

               </h2>
             
           
               
            {renderContactList}
          </div>
     )
}

export default ContactList
