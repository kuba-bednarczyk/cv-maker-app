const GeneralInfoForm = () => {
  return (
    <>
      <h3>🙍‍♂️ General Info:</h3>
      <div className='form-group'>
        <label>First Name</label>
        <input type='text' />
      </div>
      <div className='form-group'>
        <label>Last Name </label>
        <input type='text' />
      </div>
      <div className='form-group'>
        <label>Phone </label> <input type='text' />
      </div>
      <div className='form-group'>
        <label>E-mail </label> <input type='text' />
      </div>
    </>
  );
};

export default GeneralInfoForm;
