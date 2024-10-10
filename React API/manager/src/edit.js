// ViewAndEditData.js
import React, { useState } from 'react';

const ViewAndEditData = () => {
  const [data, setData] = useState({});

  const handleEdit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <h1>View and Edit Data</h1>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <form onSubmit={handleEdit}>
        <label>
          Name:
          <input type="text" value={data.name} onChange={(event) => setData({ ...data, name: event.target.value })} />
        </label>
        <label>
          Email:
          <input type="email" value={data.email} onChange={(event) => setData({ ...data, email: event.target.value })} />
        </label>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default ViewAndEditData;