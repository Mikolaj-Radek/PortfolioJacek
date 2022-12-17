import "./category.css";
import Movies from "../Films/Films";
import { useState } from "react";
function Category() {
  const [movie, setFilms] = useState(Movies);
  const filterItem = (categItem) => {
    const updatedItems = Movies.filter((curEl) => {
      return curEl.category === categItem;
    });
    setFilms(updatedItems);
  };
  return (
    <>
      <section className="category">
        <div className="category-name">
          <button className="button-style" onClick={() => setFilms(Movies)}>
            All
          </button>
          <button
            className="button-style"
            onClick={() => filterItem("Commercial")}
          >
            Commercial
          </button>
          <button
            className="button-style"
            onClick={() => filterItem("Music videos")}
          >
            Music videos
          </button>
          <button
            className="button-style"
            onClick={() => filterItem("Corporate")}
          >
            Corporate
          </button>
          <button className="button-style" onClick={() => filterItem("Event")}>
            Event
          </button>
          <button className="button-style" onClick={() => filterItem("3D")}>
            3D
          </button>
          <button
            className="button-style"
            onClick={() => filterItem("Documentary")}
          >
            Documentary
          </button>
        </div>
      </section>
      <div className="movies-box">
        {movie.map((elem) => {
          const { id, category, iframes } = elem;
          return <div className="movies-f">{iframes}</div>;
        })}
      </div>
    </>
  );
}
export default Category;
