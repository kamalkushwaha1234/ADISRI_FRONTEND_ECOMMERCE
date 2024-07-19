//singin
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import { useDispatch,useSelector } from 'react-redux'
import {useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import Hnavbar from '../Screen/Hnavbar'
import Home from '../Screen/Home'
import { login } from '../actions/UserActions'

function SignIn() {
  //kamal
  const [user, setUser] = useState(null);
const [profile, setProfile] = useState(null);
  const [token, setToken] = useState(null);
  const dispatch = useDispatch()
  const history = useNavigate()
  const redirect =location.search ? location.search.split('=')[1] : '/'
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('login failed:', error)
  });
  console.log('login:', login);
  console.log('user:', user);

  //fetch the token and the profile data from the local storage  , And set them into the state repectively
  useEffect(() => {

    const stroedProfile = localStorage.getItem("profile")
    const storedToken = localStorage.getItem('token')

    if (storedToken && stroedProfile){
      history('/')

    }

  },[history,redirect]);



  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${user['access_token']}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user['access_token']}`
          }
        })
        .then(
          (response) => {
            console.log('changes');
            setProfile(response['data']);
            localStorage.setItem('profile', JSON.stringify(response['data']));
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }, [user]);



  useEffect(() => {
    if (profile === null) {
      console.log('profile null');
    } 

    else {
      console.log('sending data to django');

    const profileData = {
        name: profile['name'],
        email: profile['email'],
        username: profile['id']
      };

      console.log(profileData);

      axios.post('http://127.0.0.1:8000/api/auth/register/', profileData).then(
        (response) => {

          
          const credentials = {
            username: profile['id'],
            password: 'random12345server@chatapp12345@passtestnet!@*'
          };
          
          console.log('before')
          console.log('response',response)
          console.log('credentials',credentials)


          const timeout = setTimeout(() => {
            axios.post('http://127.0.0.1:8000/api/auth/login/', credentials)
              .then((response) => {
                console.log(response['data']);
                setToken(response['data']['token']);
                localStorage.setItem('token', JSON.stringify(response['data']['token']));
                
              });
            }, 3000);
            console.log('response')
            console.log("printing token");
            console.log(token);
            return () => clearTimeout(timeout);
            
        },
        (error) => {
          console.log(error);
        }
      );
    }
    
  }, [profile]);

  //kamal

  return (
    <div>
     
       <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div
        className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
      >
        <div
          className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
        >
          
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Don't have an account?</span>
            <a href="#" className="underline">Get Started!</a>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
          <form action="#" className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
              <input
                type="email"
                id="email"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
                <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
              </div>
              <input
                type="password"
                id="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label htmlFor="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Log in
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-500">or login with</span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>

              <div className="flex flex-col space-y-4">
                <a
                  className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                  onClick={login}
                  
                >
                  <span>
                    <svg
                      className="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                      viewBox="0 0 16 16"
                      version="1.1"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-800 group-hover:text-white">Google</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div> 
    
  </div>
    
  )
}

export default SignIn


