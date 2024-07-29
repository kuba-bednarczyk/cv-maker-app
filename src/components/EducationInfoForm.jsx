const EducationInfoForm = ({ educationInfo, onEducationInfoChange }) => {
  return (
    <>
      <h3>📖 Education: </h3>
      <div className='form-group grid-all-space'>
        <label>Name Of The University: </label>{' '}
        <input
          type='text'
          name='uniName'
          value={educationInfo.uniName}
          onChange={onEducationInfoChange}
        />
      </div>
      <div className='form-group'>
        <label>Major: </label>{' '}
        <input
          type='text'
          name='major'
          value={educationInfo.major}
          onChange={onEducationInfoChange}
        />
      </div>
      <div className='form-group'>
        <label>Degree: </label>
        <select
          name='degree'
          value={educationInfo.degree}
          onChange={onEducationInfoChange}
        >
          <option value='Bachelor'>Bachelor</option>
          <option value='Engineer'>Engineer</option>
          <option value='Master'>Master</option>
          <option value='Doctor'>Doctor</option>
          <option value='Professor'>Professor</option>
        </select>
      </div>
      <div className='form-group'>
        <label>From: </label>
        <input
          type='text'
          name='from'
          value={educationInfo.from}
          onChange={onEducationInfoChange}
        />
      </div>
      <div className='form-group'>
        <label>To: </label>
        <input
          type='text'
          name='to'
          value={educationInfo.to}
          onChange={onEducationInfoChange}
        />
      </div>
      <button>submit</button>
    </>
  );
};

export default EducationInfoForm;
