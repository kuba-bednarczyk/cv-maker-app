import Logo from './components/Logo.jsx';
import Form from './components/Form.jsx';
import CV from './components/CV.jsx';
import { useState } from 'react';

function App() {
  const [generalInfoData, setGeneralInfoData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });
  const [educationData, setEducationData] = useState({
    uniName: '',
    major: '',
    degree: '',
    from: '',
    to: '',
  });
  const [jobExperienceData, setJobExperienceData] = useState({
    companyName: '',
    role: '',
    from: '',
    to: '',
  });

  function handleGeneralInfoChange(e) {
    const { name, value } = e.target;
    setGeneralInfoData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleEducationInfoChange(e) {
    const { name, value } = e.target;
    setEducationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleJobExperienceChange(e) {
    const { name, value } = e.target;
    setJobExperienceData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className='app'>
      <Logo />
      <div className='content'>
        <Form
          generalInfo={generalInfoData}
          educationInfo={educationData}
          jobExpInfo={jobExperienceData}
          onGeneralInfoChange={handleGeneralInfoChange}
          onEducationInfoChange={handleEducationInfoChange}
          onJobExpChange={handleJobExperienceChange}
        />
        <CV
          generalInfo={generalInfoData}
          educationInfo={educationData}
          jobExpInfo={jobExperienceData}
        />
      </div>
    </div>
  );
}

export default App;
