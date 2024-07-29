const ExperienceInfoForm = ({
  jobExpInfo: { companyName, role, from, to },
  onJobExpChange,
}) => {
  return (
    <>
      <h3>💼 Job Experience:</h3>
      <div className='form-group'>
        <label>Company Name: </label>
        <input
          type='text'
          name='companyName'
          value={companyName}
          onChange={onJobExpChange}
        />
      </div>
      <div className='form-group'>
        <label>Role: </label>
        <input type='text' name='role' value={role} onChange={onJobExpChange} />
      </div>
      <div className='form-group'>
        <label>From: </label>
        <input type='text' name='from' value={from} onChange={onJobExpChange} />
      </div>
      <div className='form-group'>
        <label>To: </label>
        <input type='text' name='to' value={to} onChange={onJobExpChange} />
      </div>
      <button>submit</button>
    </>
  );
};

export default ExperienceInfoForm;
