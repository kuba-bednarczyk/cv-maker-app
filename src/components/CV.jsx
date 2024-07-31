const CV = ({ generalInfo, educationInfo, jobExpInfo }) => {
  const {firstName, lastName, phone, email} = generalInfo
  const {uniName, degree, major} = educationInfo;
  const {companyName, role} = jobExpInfo;

  return (
    <div className='cv'>
      <div className='personal-info'>
        <h2>
          {firstName} {lastName}
        </h2>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
      <div className='info'>
        <div>
          <h2>Education</h2>
          <p>{uniName}</p>
          <p>{degree}</p>
          <p>{major}</p>
          <p>{educationInfo.from} - {educationInfo.to}</p>
        </div>
        <div>
          <h2>Job Experience</h2>
          <p>{companyName}</p>
          <p>{role}</p>
          <p>{jobExpInfo.from} - {jobExpInfo.to}</p>
        </div>
      </div>
    </div>
  );
};

export default CV;
