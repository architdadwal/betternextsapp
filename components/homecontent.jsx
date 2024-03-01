// HomeContent.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import homeimage from '../public/objects.jpg';
import SubdomainRedirect from './Subdomain';
import loginimage from '../public/newlogo.png';
const HomeContent = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 bg-dark text-white">
                    {/* Left Column */}
                    <div className="text-center" style={{ margin: "100px", border: "0.8px solid white", borderRadius: "10px", padding: "25px", boxShadow: "0 0 10px rgba(126, 126, 126, 0.5)" }}>
                        <h1>Welcome to Betternexts</h1>
                        <p>Creating good schooling experiences together </p>
                        <Image
                            src={homeimage}
                            alt="Picture of the author"
                            width={300}
                            height={350}
                        />
                    </div>
                </div>
                <div className="col-md-6 bg-dark text-white">
                    {/* Right Column */}
                    <div className="text-center" style={{ margin: "25px" }}>
                        <h1>Lets start a journey towards a better future</h1>
                        <div className="card bg-light border border-secondary rounded" style={{ margin: "20px", borderRadius: "20px" }}>
                            <div className="card-body">
                                {/* <h5 className="card-title">Login / Signup</h5> */}
                                <div className="justify-content-around">
                                <Image
                            src={loginimage}
                            alt="Picture of the author"
                            width={200}
                            height={150}
                            style={{borderRadius:"50px", width:"33%", aspectRatio:"3/2",mixBlendMode:"luminosity"}}
                        />
                                  <p style={{padding:"15px", marginBottom:"0" , marginTop:"0"}}>Create a new account by filling up this form. We will create a custom domain for you, you can use that later for login.</p>  <div style={{ padding: "20px" }}>
                                    <h2>Sign up</h2> 
                                    <form action='/api/signup' method='POST' style={{ display: 'flex', flexDirection: 'column' }}>
    
    <div className='labelclass' style={{ display: 'flex', alignItems: 'center', margin: '5px' }}>
        <label style={{ flex: '0 0 120px', padding: '10px', textAlign:"left" , fontSize: "larger"}}>Email</label>
        <input minLength="" name="email" id="email" type="text" placeholder='Email' style={{ flex: '1', padding: '10px' }} />
    </div>
    <div className='labelclass' style={{ display: 'flex', alignItems: 'center', margin: '5px' }}>
        <label style={{ flex: '0 0 120px', padding: '10px', textAlign:"left", fontSize: "larger" }}>Phone</label>
        <input minLength="" name="phone" id="phone" type="text" placeholder='Phone' style={{ flex: '1', padding: '10px' }} />
    </div>
    <div className='labelclass' style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
        <label style={{ flex: '0 0 120px', padding: '10px', textAlign:"left", fontSize: "larger" }}>School</label>
        <input minLength="" name="schoolname" id="schoolname" type="text" placeholder='School' style={{ flex: '1', padding: '10px' }} />
    </div>
    <div className='labelclass' style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
        <label style={{ flex: '0 0 120px', padding: '10px', textAlign:"left", fontSize: "larger" }}>City</label>
        <input minLength="" name="city" id="city" type="text" placeholder='City' style={{ flex: '1', padding: '10px' }} />
    </div>
    <div className='labelclass' style={{ display: 'flex', alignItems: 'center', margin: '5px' }}>
        <label style={{ flex: '0 0 120px', padding: '10px', textAlign:"left", fontSize: "larger"}}>Username</label>
        <input minLength="3" name="username" id="username" type="text" placeholder='We use it for setting your personalized domain' required style={{ flex: '1', padding: '10px' }} />
    </div>
    <div className='labelclass' style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
        <label style={{ flex: '0 0 120px', padding: '10px', textAlign:"left" , fontSize: "larger"}}>Password</label>
        <input minLength="5" name="password" id="password" type="password" placeholder='Password' required style={{ flex: '1', padding: '10px' }} />
    </div>
    <div className='labelclass' style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
        <label style={{ flex: '0 0 120px', padding: '10px', textAlign:"left", fontSize: "larger" }}>Re-enter Password</label>
        <input minLength="5" name="passwordagain" id="passwordagain" type="password" placeholder='Re-enter Password' required style={{ flex: '1', padding: '10px' }} />
    </div>
    <input style={{ padding: "15px 30px",background:"black",color: "white", alignSelf: 'center', marginTop: '20px' }} type="submit" value="Signup" />
</form>

                                    </div>
                                    <div style={{ padding: "20px" }}>
                                        <h4>If you are an existing user</h4>
                                        <SubdomainRedirect/>
                                        <redirect/>
                                        
                                        <Link className="text-dark" href="/login">Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center mt-4">
                    {/* Divider */}
                    <hr style={{ borderColor: 'white' }} />
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
