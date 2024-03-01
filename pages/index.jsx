import Layout from '../components/layout'
import { getCookie } from 'cookies-next';

import Link from 'next/link'
import HomeContent from '../components/homecontent';

export default function HomePage({ username }) {
    return (
        <Layout pageTitle="Home">
            <div className="bg-dark" style={{ minHeight: "100vh" }}>
                {username ?
                    <> console.log("1", username);
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



export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;
    let username = getCookie(req, 'username');
    
    // Check if username is undefined or null
    if (!username) {
        username = null;
    }
    
    return { props: { username } };
}

