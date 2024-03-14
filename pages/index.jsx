import Layout from '../components/layout';
import Link from 'next/link';
import HomeContent from '../components/homecontent';
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken'; // Correctly import jwt
import GridCards from '../components/gridCards';

export default function HomePage() {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        // Retrieve token from localStorage
        const token = localStorage.getItem('token');
        console.log('Token:', token);

        // Check if token exists
        if (token) {
            try {
                // Correctly use decode to extract the payload
                const decoded = jwt.decode(token); // Use jwt.decode to decode the token
                console.log('Decoded token:', decoded); // This should now execute correctly
                
                if (decoded) { // Check if decoded is not null
                    const username = decoded.username; // Extract username from payload
                    console.log('Decoded username:', username); // This should now execute correctly
                    setUsername(username);
                }
            } catch (error) {
                // If there's an error decoding the token
                console.error("Error decoding JWT token:", error);
            }
        }
    }, []);

    useEffect(() => {
        console.log('Username state updated to:', username); // This will log when username updates
    }, [username]);


    const handleLogout = () => {
        localStorage.removeItem('token'); // This removes the stored token
        setUsername(null); // Reset the username state to indicate the user is logged out
      // Redirect to the main domain (adjust accordingly for production)
    window.location.href = 'http://localhost:3000';
    };
    
    return (
        <Layout pageTitle="Home">
            <div className="bg-custom" style={{ minHeight: "100vh" }}>
                {username ?
                    <>
                        <h2 style={{ textAlign: "center"  }}>Hi {username}</h2>
                        {/* <Link href="/profile">Profile</Link><br/> */}
                        
                        <GridCards/>

                      <div className="logoutbutton"> <button onClick={handleLogout}>Logout</button></div>  
                    </>
                    :
                    <HomeContent/>
                }
            </div>
        </Layout>
    );
}
