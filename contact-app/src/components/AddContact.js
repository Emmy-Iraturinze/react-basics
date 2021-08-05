import React from "react";
import { Link } from "react-router-dom";

class AddContact extends React.Component {
     state = {
          name:"",
          email:"",
     };

     add = (e) =>{
          e.preventDefault();
          if(this.state.name ==="" || this.state.email ===""){
               alert("All fields are mandatory!")

               return 
          }

          this.props.AddContactHandler(this.state);
          this.setState({name:"", email:""});

         
     };

     render(){
          return(
               <div className="ui main">
                    <h2>Add Contact</h2>

                    <form onSubmit={this.add}>

                         <label>Name</label>
                         <input type="text" class="form-control w-50" name="name" value={this.state.name} placeholder="Enter The Name" onChange={(e)=> this.setState({name: e.target.value})}/>
                         <label>Name</label>
                         <input type="text" class="form-control w-50" name="name"value={this.state.email} placeholder=" Email" onChange={(e)=> this.setState({email: e.target.value})} />

                         <button class="btn-secondary mt-2"> Add</button>
                         
                         <Link to="/">
                         <button class="btn-primary mt-2"> check the list</button>
                         </Link>
                    </form>

               </div>
          )
     }

}

export default AddContact;