import Layout from '../components/layout';
import Link from 'next/link';
import HomeContent from '../components/homecontent';
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken'; // Correctly import jwt

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
    
    return (
        <Layout pageTitle="Home">
            <div className="bg-dark" style={{ minHeight: "100vh" }}>
                {username ?
                    <>
                        <h2>Hi {username}</h2>
                        <Link href="/profile">Profile</Link><br/>
                        <Link href="/api/logout">Logout</Link>
                    </>
                    :
                    <HomeContent/>
                }
            </div>
        </Layout>
    );
}
