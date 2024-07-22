
const Form = () => {
  return (
      <form className='form'>
        <div>
          <h3>🙍‍♂️ General Info:</h3>
          <label>First Name</label><input type="text" />
          <label>Last Name </label><input type="text" />
          <label>Phone </label><input type="text" />
          <label>E-mail </label><input type="text" />
        </div>

        <div>
          <h3>📖 Education: </h3>
          <label>School name: </label><input type="text" />
          <label>Major: </label><input type="text" />
          <label>Degree: </label>
          <select>
            <option value="Bachelor">Bachelor of Sience</option>
            <option value="Engineer">Engineer</option>
            <option value="Master">Master</option>
            <option value="Doctor">Doctor</option>
            <option value="Professor">Professor</option>
          </select>
          <label>From: </label><input type="text" />
          <label>To: </label><input type="text" />
        </div>
        
        <div>
          <h3>💼 Job Experience:</h3>
          <label>Company Name: </label><input type="text" />
          <label>Role: </label><input type="text" />
          <label>From: </label><input type="text" />
          <label>To: </label><input type="text" />
        </div>
        <button>Submit</button>
    </form>
  )
}

export default Form