const Form = () => {
  return (
    <form className='form'>
      <h3>🙍‍♂️ General Info:</h3>
      <div className="form-group">
        <label>First Name</label><input type='text' />
      </div>

      <div className="form-group">
        <label>Last Name </label><input type='text' />
      </div>
      <div className="form-group">
        <label>Phone </label> <input type='text' />
      </div>
      <div className="form-group">
        <label>E-mail </label> <input type='text' />
      </div>
  
      <h3>📖 Education: </h3>
      <div className="form-group grid-all-space" >
        <label>School name: </label> <input type='text' />
      </div>
      <div className="form-group">
        <label>Major: </label> <input type='text' />
      </div>
      <div className="form-group">
        <label>Degree: </label>
        <select>
          <option value='Bachelor'>Bachelor</option>
          <option value='Engineer'>Engineer</option>
          <option value='Master'>Master</option>
          <option value='Doctor'>Doctor</option>
          <option value='Professor'>Professor</option>
        </select>
      </div>
      <div className="form-group">
        <label>From: </label>
        <input type='text' />
      </div>
      <div className="form-group">
        <label>To: </label>
        <input type='text' />
      </div>

      <h3>💼 Job Experience:</h3>
      <div className="form-group">
        <label>Company Name: </label>
        <input type='text' />
      </div>
      <div className="form-group">
        <label>Role: </label>
        <input type='text' />
      </div>
      <div className="form-group">
        <label>From: </label>
        <input type='text' />
      </div>
      <div className="form-group">
        <label>To: </label>
        <input type='text' />
      </div>
      <button>submit</button>
    </form>
  );
};

export default Form;
