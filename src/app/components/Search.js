import { useState } from 'react';
// import Scroll from './Scroll';
import SearchList from '../../features/search/SearchList';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredPlaces = details.filter(
    place => {
      return (
        place
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        place
        .description
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
    //   <Scroll>
        <SearchList filteredPlaces={filteredPlaces} />
    //   </Scroll>
    );
  }

  return (
    <section>
      <div >
        <h2 >Search your destination</h2>
      </div>
      <div className="">
        <input 
          className=""
          type = "search" 
          placeholder = "Search Places" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;