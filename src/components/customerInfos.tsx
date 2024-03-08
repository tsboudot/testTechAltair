// CustomerInfos.tsx

import React from 'react';
import { Customer } from '../types';

type Props = {
    customer: Customer;
    onDeleteService: (serviceIndex: number) => void;
};

const CustomerInfos: React.FC<Props> = ({ customer, onDeleteService }) => {
    const handleDeleteService = (serviceIndex: number) => {
        onDeleteService(serviceIndex);
    };

    return (
        <div className="customer-infos">
            <h2>{customer.firstName} {customer.lastName}</h2>
            <p>Year: {customer.year}</p>
            <p>Make: {customer.make}</p>
            <p>Model: {customer.model}</p>
            <div className="serviceDetails">
                <h3>Services:</h3>
                <div className="serviceContainer">
                    <ul>
                        {customer.services.map((service, index) => (
                            <li key={index}>
                                <p>Description: {service.desc}</p>
                                <p>Date: {service.date}</p>
                                <p>Cost: ${service.cost}</p>
                                <button onClick={() => handleDeleteService(index)}>Supprimer</button>
                            </li>
                        ))}
                    </ul>
                </div></div></div>
    );
};

export default CustomerInfos;
