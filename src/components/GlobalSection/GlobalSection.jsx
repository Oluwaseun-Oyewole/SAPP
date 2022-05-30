import React from "react"
import "./style.scss"
import SAPPImg from "../../assets/images/sapp.svg"



export const GlobalSection = ({ children }) => {

 
    return (
        <div className="side-section font-spectral">
            <div className="w-full flex h-screen">
                <div className="lg:w-1/2 lg:block hidden w-full side__full-sidebar">
                    <div className='flex flex-col h-full justify-center'>
                        <div className="m-auto">
                            <div className="wrapper">
                                <img src={SAPPImg} alt="" />

                                <div className='text-white text-center mt-4'>
                                    <div className="text-xl">Welcome Back!</div>
                                    <p>Just a couple of clicks and we start</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="lg:w-1/2 w-full">
                    {children}
                </div>

            </div>

        </div>
    )
}