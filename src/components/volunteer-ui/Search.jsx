import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <section className="flex mx-auto items-center rounded-full mt-32 justify-end h-20 px-4 py-4 border w-[60%]">
      <input
        type="text"
        className="w-1/2 text-dark font-work font-normal bg-[#ECF1F0]  items-start"
        placeholder="Search by organization name, location"
      />
      <FaSearch className="h-6 w-6" />
    </section>
  );
};

export default Search;
