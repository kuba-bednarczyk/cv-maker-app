
const Form = () => {
  return (
    <div className='form'>
      <form>
        <div>
          <h3>General Info:</h3>
          <label>Name: </label><input type="text" />
          <label>Surname: </label><input type="text" />
          <label>Phone: </label><input type="text" />
          <label>e-mail: </label><input type="text" />
        </div>

      <div>
        <h3>Education:</h3>
        <label>Name of School: </label><input type="text" />
        <label>Major: </label><input type="text" />
        <label>Degree: </label>
        <select>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <label>From: </label><input type="text" />
        <label>To: </label><input type="text" />
      </div>
        
      <div>
        <h3>Job Experience:</h3>
      </div>

      </form>
    </div>
  )
}

export default Form