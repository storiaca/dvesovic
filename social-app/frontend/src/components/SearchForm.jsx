import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { routes } from "../router/routes";

function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState("");

  const inputHandler = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchParams.delete("keyword");
    inputData.split(";").forEach((keyword) => {
      searchParams.append("keyword", keyword.trim());
    });
    setSearchParams(searchParams);
    navigate(routes.POSTS_SEARCH.path + "?" + searchParams.toString());
  };

  return (
    <form className="box">
      <input
        type="text"
        name="serchForm"
        placeholder="Search post"
        className="form-control"
        onInput={inputHandler}
        value={inputData.serchForm}
      />
      <button className="btn btn-primary w-100 mt-3" onClick={handleSubmit}>
        SEARCH
      </button>
    </form>
  );
}

export default SearchForm;
