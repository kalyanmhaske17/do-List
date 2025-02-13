import React, { useState } from "react";

function Home() {
  const [showForm, setShowForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submissions, setSubmissions] = useState([]);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("All fields are required!");
      return;
    }

    setSubmissions([...submissions, { ...formData, timestamp: new Date().toLocaleString() }]);
    setShowForm(false);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <>
      <center>
        <h1>Simplify Your Life With Our <br /> Todo App</h1>
        <p>
          Stay organized and boost your productivity with our intuitive todo website. <br />
          Experience a modern approach to task management that fits your lifestyle.
        </p>
        <button onClick={() => setShowForm(true)} className="btn btn-outline-danger me-3 rounded-pill">Get Started</button>
        <button className="btn btn-outline-danger rounded-pill">Learn More</button>
      </center>

    
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Start Organizing</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setShowForm(false)}>Close</button>
            </form>
          </div>
        </div>
      )}

      {showThankYou && (
        <div className="thank-you-popup">
          <p>Thank you for your interest! We'll get back to you soon.</p>
        </div>
      )}

      {submissions.length > 0 && (
        <div className="table-container">
          <h3>Submissions</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                  <td>{entry.phone}</td>
                  <td>{entry.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <style>{`
       
        .modal-overlay {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5);
          display: flex; align-items: center; justify-content: center;
        }
        .modal-content {
          background: white; padding: 20px; border-radius: 10px; width: 300px; text-align: center;
          display: flex; flex-direction: column; align-items: center;
        }
        .modal-content form {
          display: flex; flex-direction: column; gap: 10px; width: 100%;
        }
        .modal-content input {
          padding: 8px; border: 1px solid #ddd; border-radius: 5px; width: 100%;

        }
        .modal-content button {
          padding: 8px; margin-top: 10px; border: none; border-radius: 5px; cursor: pointer;
        }
        .thank-you-popup {
          position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
          background: green; color: white; padding: 20px; border-radius: 5px;
          text-align: center; font-size: 18px; font-weight: bold;
        }
        .table-container {
          margin: 20px auto; width: 80%;
        }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f4f4f4; }
      `}</style>
    </>
  );
}

export default Home;
