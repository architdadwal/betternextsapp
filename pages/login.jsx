import Layout from '../components/layout';
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import loginimage from '../public/newlogo.png';
export default function LoginPage({ username }) {
    const router = useRouter();
    const { msg } = router.query;

    return (
        <Layout pageTitle="Login">
            <div className="container-fluid bg-dark" style={{ minHeight: "100vh" }}>
            <div className="row justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="col-md-6 text-white">
                        {/* <div className="text-center">
                            {/* <h1>Welcome to Betternexts</h1> */}
                            
                        {/* </div> */} 
                        <div className="card bg-light text-dark shadow shadow-lg" style={{padding:"20px",margin:"40px"}}>
                            <div className="card-body text-center"> {/* Added text-center class */}
                            <Image
                            src={loginimage}
                            alt="Picture of the author"
                            width={200}
                            height={150}
                            style={{borderRadius:"50px", width:"33%", aspectRatio:"3/2",mixBlendMode:"luminosity"}}
                        />
                                <h2 className="mb-4" style={{padding:"20px"}}>Enter your credentials</h2>
                                {msg && <h3 className="text-danger">{msg}</h3>}
                                <form action='/api/login' method='POST'>
                                    <div className="mb-3">
                                    <label htmlFor="username" className="col-sm-3 col-form-label text-center fw-bold">Username:</label>

                                        <input minLength="3" name="username" id="username" type="text" className="form-control mx-auto" placeholder='Username' required /> {/* Added mx-auto class */}
                                    </div>
                                    <div className="mb-3">
                                    <label htmlFor="password" className="col-sm-3 col-form-label text-center fw-bold">Password:</label>

                                        <input minLength="5" name="password" id="password" type="password" className="form-control mx-auto" placeholder='Password' required /> {/* Added mx-auto class */}
                                    </div>
                                    {/* <div className="mb-3">
                                    <label htmlFor="subdomain" className="col-sm-3 col-form-label text-center fw-bold">Enter your subdomain</label> */}

                                        {/* <input minLength="5" name="subdomain" id="subdomain" type="subdomain" className="form-control mx-auto" placeholder='Subdomain'  /> Added mx-auto class */}
                                    {/* </div> */}
                                    <div className="text-center">
    <button type="submit" className="btn btn-primary " style={{ background: "black", color: "white", width: "fit-content",padding: "10px 30px;" }}>Login</button>
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
