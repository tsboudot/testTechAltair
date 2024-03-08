import React, { useState } from 'react';

type Props = {
    onSearch: (searchTerm: string) => void;
};

const NavBar: React.FC<Props> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleReloadPage = () => {
        window.location.reload();
    };

    return (
        <nav>
            <button className="accueilButton" onClick={handleReloadPage}>Accueil</button>
            <div>
                <input
                    className="input"
                    type="text"
                    placeholder="Rechercher par nom ou prénom"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button className="searchButton" onClick={handleSearch}>Rechercher</button>
            </div>
        </nav>
    );
};

export default NavBar;
