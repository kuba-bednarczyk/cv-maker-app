import EducationInfoForm from './EducationInfoForm.jsx';
import ExperienceInfoForm from './ExperienceInfoForm.jsx';
import GeneralInfoForm from './GeneralInfoForm.jsx';

const Form = ({
  generalInfo,
  educationInfo,
  jobExpInfo,
  onGeneralInfoChange,
  onEducationInfoChange,
  onJobExpChange,
}) => {
  return (
    <form className='form'>
      <GeneralInfoForm
        generalInfo={generalInfo}
        onGeneralInfoChange={onGeneralInfoChange}
      />
      <EducationInfoForm
        educationInfo={educationInfo}
        onEducationInfoChange={onEducationInfoChange}
      />
      <ExperienceInfoForm jobExpInfo={jobExpInfo} onJobExpChange={onJobExpChange} />
    </form>
  );
};

export default Form;
