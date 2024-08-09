import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate } from "react-router-dom";

const PopularDropdown = ({keyword}) => {
  const navigate=useNavigate();

  const sortByLeastPopular = () => {
    keyword === null || keyword==="null"
      ? navigate(`/movies/?sort_popularity=least`)
      : navigate(`/movies/?q=${keyword}&sort_popularity=least`);
    
  };

  const sortByMostPopular = () => {
    keyword === null || keyword==="null"
      ? navigate(`/movies/?sort_popularity=most`)
      : navigate(`/movies/?q=${keyword}&sort_popularity=most`);
  };

  return (
    <DropdownButton className="sort-section" id="dropdown-basic-button" variant="secondary" title="Popularity">
      <Dropdown.Item onClick={sortByMostPopular}>Most Popular</Dropdown.Item>
      <Dropdown.Item onClick={sortByLeastPopular}>Least Popular</Dropdown.Item>
    </DropdownButton>
  );
};

export default PopularDropdown;
