import { useState } from "react";
import netflixbg from "../assets/img/netflix-bg.jpg";
import { useNavigate } from "react-router-dom";
import {Formik, Form, Field} from 'formik'
import {useRegisterUserMutation} from "../app/api/userApiSlice";
import { useDispatch } from "react-redux";
import { setLogin } from "../app/user/userSlice";
import { IoNavigateOutline } from "react-icons/io5";
import { Navigation } from "swiper/modules";

const Login = () => {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true)
    const [registerUser] = useRegisterUserMutation();
    const dispatch = useDispatch();

    const initialValues = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }

    const type = isLogin ? 'login' : 'signup'

    const handleSubmit = async (values, type) => {
      try {
        if(type==='signup'){
          
          const response = await registerUser(values).unwrap();
          console.log(response);
          const firstName = response.savedUser.firstName
          const lastName = response.savedUser.lastName;
          const token = response.accessToken;
          dispatch(setLogin(firstName, lastName, token))
          if(firstName && lastName && token){
            navigate('/home')
          }
        }
      
       
      } catch (error) {
        console.log(error);
        console.error(error)
      }
    }
  return (
    <div
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(20,20,20,.50) 50%,rgba(20,20,20,.55) 55%,rgba(20,20,20,.55) 79%, rgba(20,20,20,.58) 100%, #141414 100%), url(${netflixbg}) ` }}
      className=" h-[100vh] object-fit"
    >
      <div className=" mx-10 py-5 flex">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
          className="h-[48px] mr-[40px] hover:cursor-pointer"
          onClick={()=> navigate('/')}
        />
      </div>
      {/* Form Sign in  */}
      <Formik
      onSubmit={()=> navigate('/home')}
      initialValues={initialValues}
      >
        <Form>
      <div className="flex w-full  justify-center ">
        <div className="w-[29%] h-[660px] flex bg-black bg-opacity-75 rounded-lg">
          <div className="flex flex-col p-[62px] w-full">
            {/* Sign in */}
            <div className="gap-y-7 flex flex-col">
              <h2 className="text-white text-3xl">{isLogin? 'Sign In' : 'Sign Up'}</h2>
              <div className="flex flex-col gap-y-16">
                <div className={isLogin? 'flex flex-col gap-y-10': 'flex flex-col gap-y-3' }>
                  {!isLogin && (
                    <>
                      <Field
                      type="text"
                      className="rounded-md py-3 w-full bg-[#333] text-white px-4"
                      placeholder="First Name"
                      name="firstName"
                    />
                      <Field
                      type="text"
                      className="rounded-md py-3 w-full bg-[#333] text-white px-4"
                      placeholder="Last Name"
                      name="lastName"
                    />
                    </>
                  )}
                  <Field
                    type="text"
                    className="rounded-md py-3 w-full bg-[#333] text-white px-4"
                    placeholder="Email or phone number"
                    name="email"
                  />
                  <Field
                    type="password"
                    className="rounded-md py-3 w-full bg-white text-[#333] px-4"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                {/* Submit button */}
                <div>
                  <button className="rounded-md py-3 w-full flex justify-center items-center text-white bg-[#e50914] hover:opacity-90"
                  type="submit"
                  >{isLogin? 'Sign In' : 'Sign Up'}</button>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-3 gap-y-4">
                {/* checkbox */}
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row gap-x-1">
                    <input type="checkbox" className="bg-[#737373] text-[#737373]" style={{color: "#737373"}}/>
                    <p className="text-[#b3b3b3] text-sm hover:cursor-pointer">Remember me</p>
                    </div>
                    <div>
                    <p className="text-[#b3b3b3] text-sm hover:cursor-pointer">Need Help?</p>
                    </div>
                
                </div>
                <div>
                    <p className="text-[#737373] ">{isLogin? 'New to Netflix?' : 'Already have an account?'}
                    <button className="ml-1 text-white hover:cursor-pointer"
                    type="button"
                    onClick={()=>setIsLogin(!isLogin)}
                    >{isLogin? 'Sign up now.' : 'Sign in now.'}</button></p>
                </div>
                <div>
                    <p className="text-sm text-[#8c8c8c]">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                </div>
          
            </div>
           
          </div>
        </div>
      </div>
      </Form>
      </Formik>

    </div>
  );
};

export default Login;
