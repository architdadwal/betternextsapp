import { useState } from 'react';

const SubdomainRedirect = () => {
  const [subdomain, setSubdomain] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/redirect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subdomain }),
      });
      if (response.ok) {
        // Redirect to the login page of the subdomain
        window.location.href = `http://${subdomain}.localhost:3000/login`;
      } else {
        // Handle error response
        const errorData = await response.json();
        setErrorMsg(errorData.msg);
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
          Enter your username:
          <input
            type="text"
            value={subdomain}
            onChange={(e) => setSubdomain(e.target.value)}
          />
        </label>
        <button type="submit">Go</button>
      </form>
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
    </div>
  );
};

export default SubdomainRedirect;
