import React,{ useState, useEffect} from 'react';
import { uuid } from 'uuidv4';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { Switch } from 'react-router';
import {
  BrowserRouter as Router,Route} from "react-router-dom";
import ContactDetail from './components/ContactDetail'





function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  
  const [contacts, setContacts] = useState([]);
  const AddContactHandler = (contact) =>{

    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact}]);
   
  };

const removerContactHandler = (id) =>{

  const newConstList = contacts.filter((contact)=>{
    return contact.id !== id;
  });  

  setContacts(newConstList);
}

  useEffect(()=> { 
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
   
    if (retriveContacts) setContacts(retriveContacts);
  
  }, []);
 

  useEffect(()=> {localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))}, [contacts]);

  return (
    <div class="container" >
      <Router>
     <header/>
    <Switch>
    <Route path="/add" component={() =>(  <AddContact AddContactHandler={AddContactHandler}/>)}/>
    
      <Route path="/" component={() =>(   <ContactList contacts={contacts} getContactId={removerContactHandler}/>)} /> 
    <Route path="/contact/:id" component={ ContactDetail}/>
    </Switch>
    
     {/*<AddContact AddContactHandler={AddContactHandler}/>*/}
<br/>
     {/* <h4>Contact List</h4>
  <ContactList contacts={contacts} getContactId={removerContactHandler}/> */} 
     
      </Router>
     
  
      
    </div>
  );
}

export default App;
