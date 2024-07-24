const EducationInfoForm = () => {
  return (
    <>
      <h3>📖 Education: </h3>
      <div className='form-group grid-all-space'>
        <label>School name: </label> <input type='text' />
      </div>
      <div className='form-group'>
        <label>Major: </label> <input type='text' />
      </div>
      <div className='form-group'>
        <label>Degree: </label>
        <select>
          <option value='Bachelor'>Bachelor</option>
          <option value='Engineer'>Engineer</option>
          <option value='Master'>Master</option>
          <option value='Doctor'>Doctor</option>
          <option value='Professor'>Professor</option>
        </select>
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

export default EducationInfoForm;
