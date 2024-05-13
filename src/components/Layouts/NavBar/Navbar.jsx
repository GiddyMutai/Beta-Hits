import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar({ setFilteredMusic, music }) {
    const handleSearch = (e) => {
      const searchTerm = e.target.previousElementSibling.value.toLowerCase();
      const filteredMusic = music.filter(
        (song) =>
          song.name.toLowerCase().includes(searchTerm) ||
          song.author_name.toLowerCase().includes(searchTerm)
      );
      setFilteredMusic(filteredMusic);
    };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for music..."
        />
        <button className="search-btn" type="button" onClick={handleSearch} >
          Search
        </button>
        <Link to="/profile">
          <button className="profile-button">
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar1"></span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
