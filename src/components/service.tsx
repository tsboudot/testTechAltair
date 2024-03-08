// Service.tsx

import React from 'react';
import { Service as ServiceType } from '../types'; // Assurez-vous que le chemin d'importation est correct

type Props = {
    service: ServiceType;
    onDelete: () => void;
};

const Service: React.FC<Props> = ({ service, onDelete }) => {
    return (
        <div>
            <p>Code: {service.code}</p>
            <p>Description: {service.desc}</p>
            <p>Date: {service.date}</p>
            <p>Cost: ${service.cost}</p>
            <button onClick={onDelete}>Supprimer</button>
        </div>
    );
};

export default Service;
