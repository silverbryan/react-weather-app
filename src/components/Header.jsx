import React, { useState } from 'react'

const Header = ({ onSearch }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleOnChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        if (searchTerm !== '') {
            onSearch(searchTerm);
        }
    }
    return (
        <header>
            <form
                style={{
                    marginTop: '70px'
                }}
                onSubmit={handleOnSubmit}
            >
                <input
                    type="text"
                    placeholder="Search Any City"
                    onChange={handleOnChange}
                />
                <input type="submit" value="Agregar" />
            </form>
        </header>
    );
}

export default Header;