import { Link } from 'react-router-dom';
import SearchBar from '../../utils/search/SearchBar';
import { IoIosArrowRoundBack } from 'react-icons/io';

export default function () {
  return (
    <div className="flex w-[95%] align-middle justify-around">
      <Link to="#" onClick={() => window.history.back()}>
        <IoIosArrowRoundBack size={50} className="self-center mt-2" />
      </Link>
      <div className="w-[100%] ">
        <SearchBar />
      </div>
    </div>
  );
}
