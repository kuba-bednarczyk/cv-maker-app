const ExperienceInfoForm = () => {
  return (
    <>
      <h3>💼 Job Experience:</h3>
      <div className='form-group'>
        <label>Company Name: </label>
        <input type='text' />
      </div>
      <div className='form-group'>
        <label>Role: </label>
        <input type='text' />
      </div>
      <div className='form-group'>
        <label>From: </label>
        <input type='text' />
      </div>
      <div className='form-group'>
        <label>To: </label>
        <input type='text' />
      </div>
    </>
  );
};

export default ExperienceInfoForm;
