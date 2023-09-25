import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';


const ServiceCard = ({ service }) => {
  const { img, price, title,  _id } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src={img} alt="" /></figure>
      <div className="card-body text-left">
        <h2 className="card-title text-3xl">{title}</h2>
        <p className='text-2xl text-red-500'>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-error"><Link to={`/booknow/${_id}`}> Book Now</Link><AiOutlineArrowRight /></button>
      </div>
    </div>
      </div >
    );
};

export default ServiceCard;