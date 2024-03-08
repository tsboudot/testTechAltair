// App.tsx

import React, { useState } from 'react';
import './styles/App.css';
import { arrayOfCustomer } from './customerArray';
import { Customer } from './types';
import CustomerInfos from './components/customerInfos';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/navBar';

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>(arrayOfCustomer);

  const handleDeleteService = (customerIndex: number, serviceIndex: number) => {
    const updatedCustomers = [...customers];
    updatedCustomers[customerIndex].services.splice(serviceIndex, 1);
    setCustomers(updatedCustomers);
    toast.success('Service supprimé avec succès');
  };

  const handleSearch = (searchTerm: string) => {
    // Filtrer les clients en fonction du terme de recherche
    const filteredCustomers = arrayOfCustomer.filter(
      (customer) =>
        customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCustomers(filteredCustomers);
  };

  return (
    <div>
      <NavBar onSearch={handleSearch} />
      <h1>Liste des clients</h1>
      <ToastContainer />
      <div className="customerContainer">
        {customers.map((customer: Customer, index: number) => (
          <div key={index}>
            <CustomerInfos customer={customer} onDeleteService={(serviceIndex: number) => handleDeleteService(index, serviceIndex)} />
          </div>
        ))}</div>
    </div>
  );
};

export default App;
