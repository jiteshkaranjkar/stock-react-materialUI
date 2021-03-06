import React, { useState } from 'react';

const useAddStockForm = (initialState, callback) => {
  const [fields, setFields] = useState(initialState);

  const handleSubmit = (event) => {
    alert("Hi Submit event - " + event.target.name)
    if(event){
      event.preventDefault()
    }
    callback();
  }
  
  const handleInputChange = (event) => {
    event.persist();
    alert("Hi - " + event.target.name)
    setFields(fields => ({...fields , [event.target.name]: [event.target.value]})); 
  }

  return (
    handleSubmit,
    handleInputChange,
    fields
  );
}
export default useAddStockForm;