import React from 'react';

const Registration = props =>{
  const {handleRegistration}= props;
    return (
      <div>
        <input
          placeholder="Name"
          name="inputName"
         // onChange={e => handleInputChanges(e, "title")}
        />
        <input
          placeholder="Email"
          name="inputEmail"
         // onChange={e => handleInputChanges(e, "title")}
        />
        <input
          placeholder="DOB"
          name="inputDob"
         // onChange={e => handleInputChanges(e, "title")}
        />
        <input
          placeholder="password"
          name="inpass"
         // onChange={e => handleInputChanges(e, "title")}
        />
        <input
          placeholder="phoneNo"
          name="inputPhNo"
         // onChange={e => handleInputChanges(e, "title")}
        />
        <button
          onClick={(e) =>  handleRegistration()}>
          Add
        </button>
      </div>
    );
  };
export default Registration