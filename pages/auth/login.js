import {React, useEffect} from "react";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import  Router  from "next/router";
import axios from 'axios'; 

// layout for page

import Auth from "layouts/Auth.js";

export default function Login() {
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  async function onSubmit(data){
    // const requestOptions = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     //'Authorization': 'Bearer my-token',
    //     //'My-Custom-Header': 'foobar'
    //   },
    //   url : 'http://localhost/bill/auth/login/',
    //   body: data
    // };
    try{
      const response = await axios.post('http://localhost/bill/auth/login/',data);
      if(response.status == 200){
        localStorage.setItem('token', response.data.data.token);
        reset();
        Router.push('/admin/dashboard');
      }
    } catch(error){
      
    }
  }

return (
  <>
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6"></div>

            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                    Identity
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Identity"
                    name="identity"
                    {...register("identity", {
                      required: "Identity is required.",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Identity not valid"
                      }
                    })}
                  />
                  {errors.identity && <span role="alert" className="text-red-500">{errors.identity.message}</span>}
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                    name="password"
                    {...register("password", {
                      required: "Password is required.",
                      minLength: {
                        value: 4,
                        message: "min length is 4"
                      }
                    })}
                  />
                  {errors.password && <span role="alert" className="text-red-500">{errors.password.message}</span>}
                </div>

                <div className="text-center mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
}

Login.layout = Auth;
