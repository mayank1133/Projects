// EnterData.js
import React, { useState } from 'react';

const EnterData = () => {
  const [data, setData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <h1>Enter Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={data.name} onChange={(event) => setData({ ...data, name: event.target.value })} />
        </label>
        <label>
          Email:
          <input type="email" value={data.email} onChange={(event) => setData({ ...data, email: event.target.value })} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EnterData;