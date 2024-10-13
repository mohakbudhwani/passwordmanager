import React, { Fragment } from "react";

const PasswordList=(props)=>{

    const deletePassword = (index) => {
        const newDetails = details.filter((_, currIndex) => currIndex !== index);
        props.setAllDetails(newDetails);
      };
    
    const details = props.details;
    const showModal = (title,password) => {
        props.setModalShown(true);
        props.setAdd(false);
        props.setTitle(title);
        props.setPassword(password);
    }
    const ui = details.map((item, index) => (
        <div key={index}> {item.title}  {item.password}  
        <button onClick={() => showModal(item.title,item.password, index)}> Edit </button> 
        <button onClick={() => deletePassword(index)}>Delete</button> 
    </div> ));
    
    return(<Fragment>
        <h2 style={{marginTop:"200px"}}>All Passwords-</h2>
        { ui }
        </Fragment>)
};

export default PasswordList;
