import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Details from './../Details/Details';

const Service = () => {
    const [service, setService] = useState()
    const { serviceId } = useParams();

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setService(data[serviceId]))
    }, [])
    return (
        <div>
            {service ? <Details
                serviceDetails={service}
            ></Details> : ''}
        </div>
    );
};

export default Service;