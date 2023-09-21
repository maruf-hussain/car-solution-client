import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className='text-center my-8 font-bold'>
            <h1 className='text-3xl text-red-500 font-extrabold'>Services</h1>
            <h2 className='text-5xl'>Our Service Area</h2>
            <p className='text-center mt-4'>the majority have suffered alteration in some form, by injected humour, or randomised<br /> words which don't look even slightly believable. </p>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {
                    services.map(secvice => <ServiceCard
                        key={secvice._id}
                        service={secvice}
                    ></ServiceCard>)
                }
            </div>
        </div>

    );
};

export default Services;