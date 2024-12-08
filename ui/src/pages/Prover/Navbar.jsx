/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/zerocheck-removebg-preview.png";


const nav = () => {
  return (
    <div className="w-screen h-20 bg-[#00ffec] font-bold text-[#08244d] text-xl">
      <ul className="flex gap-5 justify-between mx-[5%]  items-center">
        <div className="">
          <Link to="/" className="flex items-center">
            <div className="text-[#08244d]">
              <img
                src={logo}
                alt="logo"
                className="w-20 h-20"
                style={{
                  filter:
                    "invert(38%) sepia(47%) saturate(1651%) hue-rotate(171deg) brightness(92%) contrast(87%)",
                }}
              />
            </div>
            <div>
              <h1 className="text-3xl">ZKP</h1>
            </div>
          </Link>
        </div>
        <div className="flex gap-4">
          <Link to="/prover/">
            <li>Home</li>
          </Link>
          <Link to="/prover/request">
            <li>Add Proof</li>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default nav;
