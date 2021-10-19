import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div className="w-full bg-white p-6 md:p-12">
            <div className="header flex items-end justify-between mb-12">
                <div className="title">
                    <p className="text-4xl font-bold text-gray-800 mb-4">
                        Our Provided Services
                    </p>
                    <p className="text-2xl font-light text-gray-400">
                        All paid and non-paid services are available in only Bangladesh
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">

                {
                    services.map(service => < Card key={service.id} service={service} />)

                }


            </div>
        </div>

    );
};

export default Services;