import search from '../../assets/search.svg';

function Search({ setQuery }) {
  return (
    <div className="relative mt-5">
      <input className="w-full p-2 pr-10 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search" maxLength={100} onChange={(e) => setQuery(e.target.value)}/>
      <button className="absolute right-0 top-0 bg-blue-500 p-2 h-full rounded-r-md hover:bg-blue-400 cursor-pointer active:bg-blue-600">
        <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
      </button>
    </div>
  );
}

export default Search;