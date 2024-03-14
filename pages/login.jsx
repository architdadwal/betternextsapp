import Layout from '../components/layout';
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import loginimage from '../public/newlogo.png';
import { useState } from 'react'; // Import useState hook for managing state

export default function LoginPage({ username }) {
    const router = useRouter();
    const { msg } = router.query;
    const [errorMessage, setErrorMessage] = useState('');

    // Function to handle form submission
    const handleLogin = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const username = formData.get('username');
        const password = formData.get('password');

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token); // Set token in localStorage
                router.push('/'); // Redirect to homepage after successful login
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message); // Set error message
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage('An error occurred while logging in');
        }
    };

    return (
        <Layout pageTitle="Login">
            <div className="container-fluid bg-white" style={{ minHeight: "100vh" }}>
                <div className="row justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="col-md-6 text-white">
                        <div className="card bg-light text-dark shadow shadow-lg" style={{ padding: "20px", margin: "40px" }}>
                            <div className="card-body text-center">
                                <Image
                                    src={loginimage}
                                    alt="Picture of the author"
                                    width={200}
                                    height={150}
                                    style={{ borderRadius: "50px", width: "33%", aspectRatio: "3/2", mixBlendMode: "luminosity" }}
                                />
                                <h2 className="mb-4" style={{ padding: "20px" }}>Enter your credentials</h2>
                                {msg && <h3 className="text-danger">{msg}</h3>}
                                {errorMessage && <h3 className="text-danger">{errorMessage}</h3>}
                                <form onSubmit={handleLogin}>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="col-sm-3 col-form-label text-center fw-bold">Username:</label>
                                        <input minLength="3" name="username" id="username" type="text" className="form-control mx-auto" placeholder='Username' required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="col-sm-3 col-form-label text-center fw-bold">Password:</label>
                                        <input minLength="5" name="password" id="password" type="password" className="form-control mx-auto" placeholder='Password' required />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary " style={{ background: "black", color: "white", width: "fit-content", padding: "10px 30px;" }}>Login</button>
                                    </div>
                                </form>
                                <div className="linkdiv"><Link className='forgetlink' href="/">Forget your password</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;
    var username = getCookie('username', { req, res });

    if (username != undefined) {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        };
    }

    return { props: { username: false } };
}
