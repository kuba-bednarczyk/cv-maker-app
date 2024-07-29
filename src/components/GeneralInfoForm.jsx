const GeneralInfoForm = ({ generalInfo, onGeneralInfoChange }) => {
  return (
    <>
      <h3>🙍‍♂️ General Info:</h3>
      <div className='form-group'>
        <label>First Name</label>
        <input
          type='text'
          name='firstName'
          value={generalInfo.firstName}
          onChange={onGeneralInfoChange}
        />
      </div>
      <div className='form-group'>
        <label>Last Name</label>
        <input
          type='text'
          name='lastName'
          value={generalInfo.lastName}
          onChange={onGeneralInfoChange}
        />
      </div>
      <div className='form-group'>
        <label>Phone </label>
        <input
          type='text'
          name='phone'
          value={generalInfo.phone}
          onChange={onGeneralInfoChange}
        />
      </div>
      <div className='form-group'>
        <label>E-mail </label>
        <input
          type='text'
          name='email'
          value={generalInfo.email}
          onChange={onGeneralInfoChange}
        />
      </div>
      <button>submit</button>
    </>
  );
};

export default GeneralInfoForm;
