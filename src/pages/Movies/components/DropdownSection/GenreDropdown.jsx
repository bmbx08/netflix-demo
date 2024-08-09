import React, {useState} from "react";
import {useMovieGenreQuery} from "../../../../hooks/useMovieGenre";
import {Button, Dropdown, DropdownButton} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import "./GenreDropdown.style.css";

const GenreDropdown = ({keyword}) => {
  const [visible, setVisible] = useState("hide");
  const navigate = useNavigate();
  console.log("keyword", keyword, typeof keyword);

  const {data: genreData} = useMovieGenreQuery();
  console.log(genreData);

  const sortByGenre = (event) => {
    console.log(event);
    event.target.innerHTML === "All"
      ? navigate(`/movies`)
      : keyword === null || keyword === "null"
      ? navigate(`/movies/?sort_genre=${event.target.innerHTML}`)
      : navigate(`/movies/?q=${keyword}&sort_genre=${event.target.innerHTML}`);
  };

  const showButtonSection = () => {
    if (visible === "hide") setVisible("show");
    if (visible === "show") setVisible("hide");
  };

  return (
    <div className="sort-section">
      <Button
        variant="secondary"
        className={`show-hide-button ${visible}`}
        onClick={showButtonSection}
      >
        Genres
      </Button>
      <div className={`button-section ${visible}`}>
        <Button
          variant="outline-secondary"
          className="genre-button"
          onClick={(event) => sortByGenre(event)}
        >
          All
        </Button>
        {genreData?.map((genre, index) => (
          <Button
            variant="outline-secondary"
            className="genre-button"
            onClick={(event) => sortByGenre(event)}
          >
            {genre.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default GenreDropdown;
