import React, { useState, useEffect}from 'react'
import axios from 'axios'

function Companies() {
  const [companyDetails, setCompanyDetails] = useState([])

  useEffect(async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/company')
      setCompanyDetails(data)
    } catch (e) {
      console.log(e)
    }
  }, [setCompanyDetails])


  return (
    <div>
      <h1>Companies</h1>
      {companyDetails.map(information =><div>
        <h1><a href='/company'>{information.name}</a></h1>
        <h3>website_address: {information.website_address}</h3>
      <h3>Email: {information.email}</h3>
        <h3>physical_address: {information.physical_address}</h3>
      </div>)}
    </div>
  )
}

export default Companies
