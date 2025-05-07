import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 max-w-sm w-full">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="text-gray-500 mr-2"
      />
      <input
        type="search"
        placeholder="Rechercher..."
        className="w-full outline-none text-sm bg-transparent placeholder-gray-400"
      />
    </div>
  );
};

export default Search;
