import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'

import background from '../public/images/e3ec20bb1e61ed460a2e93fd75829d95.png';
import logo from '../public/images/4a265ca9a4460df862c16bd71e1bf421.png';

import googleLogo from '../public/images/796fc8eeb0eec56e7bb60a0ae649d969.png';
import fblogo from '../public/images/721c58f48080e03e7010ef3ff2538abc.png';
import applelogo from '../public/images/c315db241e33761f206cf098764d2164.png';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='container-fluid h-100'>
        <div className='row h-100'>
          <div className="col">
            <Image src={background} className="ImageBackground" alt="" />
          </div>
          <div className="col col-lg-5">
            <div className='container FormLogin'>
              <div className="align-content-center mt-4">
                <div>
                  <Image src={logo} className="logo d-inline-flex align-self-start" alt="alt" />
                </div>
                <div>
                  <h1> Login to your Account</h1>
                  <p> Your new Podcast Generation Platform</p>
                </div>
                <br />
                <div>
                  <button className='button d-flex justify-content-center align-items-center p-1 gap-3'>
                    <Image src={googleLogo} className="socialmedia" alt="alt" />
                    <h6 className='m-0'>Continue with Google</h6>
                  </button>
                </div>
                <br />
                <div>
                  <button className='button d-flex justify-content-center align-items-center p-1 gap-3'>
                    <Image src={fblogo} className="socialmedia" alt="alt" />
                    <h6 className='m-0'>Continue with Facebook</h6>
                  </button>
                </div>
                <br />
                <div>
                  <button className='button d-flex justify-content-center align-items-center p-1 gap-3'>
                    <Image src={applelogo} className="socialmedia" alt="alt" />
                    <h6 className='m-0'>Continue with Apple</h6>
                  </button>
                </div>
                <br />
                <div className='align-self-center'>
                  <p>------------- or Sign in with Email -------------</p>
                </div>
                <br />
                <div>
                  <div>
                    <h6>Email</h6>
                    <input className='p-2' type="email" id="" name="email" placeholder='mail@abc.com' />
                  </div>
                  <div>
                    <p className='typo_one p-2'>By continuing, you agree to Audiselle Conditions of Use and Privacy Notice</p>
                  </div>
                  <div>
                    <button className='login_btn d-flex justify-content-center align-items-center p-1 gap-3'>
                      <h6 className='m-0 whiteh6'>Login</h6>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      <style jsx>{`
        main
        {
          background: #FFF;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        body{
          height: 100vh;
          width: 100%;
          background: #FFF;
          display: flex;
          border-radius: 34px;
          border: 10px solid #FFF;
          box-shadow: 0px 0px 45px 0px #52796F;
        }
        * {
          box-sizing: border-box;
        }
        .ImageBackground{
          max-width: 100%;
          height: 98vh;
          min-width: 100%;
          object-fit: cover;
          flex-shrink: 0;
          border-radius: 34px 0px 0px 34px;
        }
        .logo
        {
          width: 151px;
          height: 112px;
          flex-shrink: 0;
          max-width: 151px;
          min-width: 151px;
        }
        .FormLogin
        {
          margin-right: 20px;
          margin-left: 40px;
        }
        h1{
          color: #2F3E46;
          font-family: "Nunito Sans";
          font-size: 36px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
        p{
          color: #2F3E46;
          font-family: "Nunito Sans";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        button{
          width: 80%;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          border: 1px solid #2F3E46;
          background: transparent;
        }
        .socialmedia{
          width: 25px;
          height: 25px;
          flex-shrink: 0;
          border-radius:18px;
        }
        h6{
          color: #2F3E46;
          font-family: "Nunito Sans";
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
        input[type=email] {
          color: #CAD2C5;
          font-family: "Nunito Sans";
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        input
        {
          width: 80%;
          border-radius: 5px;
          border: 1px solid #2F3E46;
        }
        .typo_one
        {
          color: #CAD2C5;
          font-family: "Nunito Sans";
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        .typo_two{
          color: #2F3E46;
          font-family: "Nunito Sans";
          font-size: 12px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
        .login_btn{
          width: 80%;
          border-radius: 6px;
          background: #354F52;
          padding: 13px 10px 12px 10px;
          justify-content: center;
          align-items: center;
          gap: 13px;
        }
        .whiteh6
        {
          color: #CAD2C5;
          font-family: "Nunito Sans";
          font-size: 18px;
          font-style: normal;
          font-weight: 800;
          line-height: normal;
        }

      `}</style>
    </div>
  );
}
