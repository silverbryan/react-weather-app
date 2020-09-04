import React, {useState} from 'react'

const SearchBar = ( {onSearch} ) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [visible, setVisible] = useState(false);

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleVisible = () => {
    setVisible(!visible);
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (searchTerm !== '') {
        onSearch(searchTerm);  
      }else {
        handleVisible();
      }
    }
    }
    className={visible ? 'active': ''}
    >
      <input
        type="text"
        placeholder="Search Any City"
        onChange={handleOnChange}
        className={visible ? 'active': ''}
      />
      <button
        type="submit" 
        value="" 
        className={visible ? 'active': ''}
      >
        <i className="fas fa-search fa-lg"></i>
      </button>
    </form>
  );

}

export default SearchBar;