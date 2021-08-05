/* eslint-disable no-undef */
import React from 'react'
import { Link }  from 'react-router-dom'




const ContactCard = (props) => {

     const {id, name, email } = props.contact;

     return (
          <div class="container section1 mt-5">
              
                
            
                 
                    <i class="bi bi-person-circle"></i>
                  
                
                    <Link to={`/contact/${id}`}>
                    <div class="">
               <strong>{name} </strong>
          </div>
          <small class=" ">{email} <i class="bi bi-trash float-right" onClick={() => props.clickHandler(id)}></i></small>
       
               </Link>
        
     

     </div>
     )
}

export default ContactCard
