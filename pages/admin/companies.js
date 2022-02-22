import React from "react";
import Admin from "layouts/Admin.js";
import { useForm } from 'react-hook-form';
import axios from 'axios'; 


export default function Companies({ data }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    console.log(data);
    return (<>
        <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-4">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"><i class="fas fa-sitemap text-xl"></i></div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">CSS Components</h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                    Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can have different colours.
                </p>
                <div className="block pb-6">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">Buttons</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">Inputs</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">Labels</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">Menus</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">Navbars</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">Pagination</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">Progressbars</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">Typography</span>
                </div>
                <a href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index" target="_blank" className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150">
                    View All
                    <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                </a>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
                <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                    <ul>
                        <li>
                            <p>Hello World</p>
                            <p>Hello World</p>
                            <p>Hello World</p>
                            <p>Hello World</p>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
        </>)
}

export async function getServerSideProps(context) {
    // const res = await fetch('http://localhost/bill/admin/company')
    // const data = await res.json()

    const res = await axios.get('http://localhost/bill/admin/company', {
        headers: {
            'token': localStorage.getItem('token')
        }
    });
    res.data.headers['token'];

    // Pass data to the page via props
    return { props: { data } }
  }

Companies.layout = Admin;