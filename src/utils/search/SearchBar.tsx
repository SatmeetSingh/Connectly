import { TfiSearch } from 'react-icons/tfi';
import styles from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  return (
    <div
      className={`relative self-center  rounded-lg w-[90%] mt-3 md:min-w-[450px]  max-w-[500px] text-sm ${styles.scrool}`}
    >
      <TfiSearch
        size={15}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800"
      />
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-8 p-2 w-full outline-none rounded-lg bg-[rgba(100,211,193,0.2)]"
      />
    </div>
  );
}
