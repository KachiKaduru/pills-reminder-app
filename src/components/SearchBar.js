import search from "../images/search.png";

export default function SearchBar() {
  return (
    <form className="search-bar">
      <img src={search} alt="" />
      <input type="text" placeholder="Search" />
    </form>
  );
}
