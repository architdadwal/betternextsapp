import React, { useState } from 'react';

const SubdomainRedirect = () => {
  const [username, setUsername] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(''); // Clear previous errors

    try {
      const response = await fetch('/api/checkuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      if (response.ok) {
        // If user exists, update URL to user's subdomain
        window.location.href = `http://${username}.localhost:3000/login`;
      } else {
        // Handle error response
        const errorData = await response.json();
        setErrorMsg(errorData.error || 'User not found');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMsg('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <button type="submit">Check User</button>
      </form>
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
    </div>
  );
};

export default SubdomainRedirect;
