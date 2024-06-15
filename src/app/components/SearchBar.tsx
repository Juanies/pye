// components/SearchBar.tsx

import React from 'react';
import SearchInput from '../../../images/SearchInput';
import Plus from '../../../images/Plus';

interface SearchBarProps {
  showPlusIcon: boolean;
  onClickPlus?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ showPlusIcon, onClickPlus }) => {
  return (
    <div className={`bg-gray-800 w-[40%] rounded-lg px-4 py-2 flex items-center ${showPlusIcon ? 'rounded-r-none' : ''}`}>
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent text-[#939393] outline-none flex-1"
      />
        <button className="ml-2">
          <SearchInput/>
        </button>

        {showPlusIcon ? (
        <button onClick={onClickPlus} className="ml-2 pl-2 flex  border-l ">
          <Plus/>
        </button>
      ) : null}
    </div>
  );
};

export default SearchBar;
