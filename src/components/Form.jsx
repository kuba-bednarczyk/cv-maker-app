import EducationInfoForm from './EducationInfoForm.jsx';
import ExperienceInfoForm from './ExperienceInfoForm.jsx';
import GeneralInfoForm from './GeneralInfoForm.jsx';

const Form = () => {
  return (
    <form className='form'>
      <GeneralInfoForm />
      <EducationInfoForm />
      <ExperienceInfoForm />
      <button>submit</button>
    </form>
  );
};

export default Form;
