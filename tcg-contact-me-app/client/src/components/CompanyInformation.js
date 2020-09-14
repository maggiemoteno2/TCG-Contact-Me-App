import React, { useState } from 'react'
import axios from 'axios'

function CompanyInformation () {
  const [credentials, setCredentials] = useState({
    name: "", surname: "", email: "", Mobile_Number: "",
    Question: ""
  })
  const submit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post('http://localhost:3000/user', credentials)
      setCredentials(data)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div>
      <h1>Company information</h1>
      <form onSubmit={(e) => submit(e)}>
        <input type='text' placeholder='name' name="name"
          value={credentials.name}
          onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
        <br />
        <input type='text' placeholder='Surname' name="surname"
          value={credentials.surname}
          onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
        <br />
        <input type='number' placeholder='Mobile Number' name="Mobile_Number"
          value={credentials.Mobile_Number}
          onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
        <br />
        <input type='email' placeholder='email address' name="email"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
        <br />
        <textarea placeholder='post your question' name="Question"
          value={credentials.Question}
          onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
        <br />
        <input type='submit' />
      </form>

      <a href='/'>back</a>
    </div>
  )
}

export default CompanyInformation
