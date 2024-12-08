/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/zerocheck-removebg-preview.png";
import image from "../assets/lock.png"

const Homepage = () => {
  return (
    <div className="w-screen h-screen bg-cover bg-center bg-[#08244d] lg:pt-[1%] pt-[55%] lg:pl-[2%] pl-[10%]">
      <div className="lg:text-4xl font-extrabold">
        <div className="flex items-center justify-normal">
          <div>
            <img src={logo} alt="" className="w-[100px] h-[100px]" />
          </div>
          <div className="lg:pt-[5">
            <span className="text-white">Zero</span>
            <span className="text-[#00ffec]">CHECK</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center lg:mt-[-5%]">
        <div>
          <div className="lg:pt-[15%] lg:text-2xl lg:w-[600px] text-white font-bold mb-8 lg:ml-7">
            We verify identities securely with zero-knowledge proofs, ensuring
            privacy.
          </div>
          <div className=" flex gap-[4%] text-center lg:ml-[5%]">
            <Link to="/prover">
              <div className="cursor-pointer w-[150px] h-[45px] pt-2 bg-[#00ffec] text-black text-xl">
                Prover
              </div>
            </Link>
            <Link to="/verifier">
              <div className="cursor-pointer w-[150px] h-[45px] pt-[5px] border-2  text-white text-xl ">
                Verifier
              </div>
            </Link>
          </div>
        </div>
        <div>
          <img src={image} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
