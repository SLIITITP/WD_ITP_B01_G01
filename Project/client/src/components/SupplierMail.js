import React, { useState } from 'react';
import axios from 'axios';

function SupplierMail() {
  const [email, setEmail] = useState({});

  const handleSendMail = () => {
    axios.post('/sendmail', email)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div>
        <br></br>
        <a href="/adminDashboard"><button className='backBtn'>Back to Dashboard</button></a>
        <a href="/SupplierList"><button className='backBtn'>Supplier List</button></a>
        <h3><b>Send Email To Supplier</b></h3>
      <input type="text" placeholder="Email address" onChange={e => setEmail({ ...email, to: e.target.value })} />
      <input type="text" placeholder="Subject" onChange={e => setEmail({ ...email, subject: e.target.value })} />
      <textarea placeholder="Message" onChange={e => setEmail({ ...email, text: e.target.value })}></textarea>
      <br></br>
      <br></br>
      <button onClick={handleSendMail}>Send Mail</button>
    </div>
  );
}

export default SupplierMail;