import "./category.css";
import Movies from "../Films/Films";
import { useState } from "react";
function Category() {
  const [movie, setFilms] = useState(Movies);
  const [visible, setVisible] = useState(7);

  const showMore = () => {
    setVisible((prevValue) => prevValue + 7);
  };
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
      {movie.map((elem) => {
        if (elem.category === "All") {
          const { img } = elem;
          return <div className="movies-f">{img}</div>;
        }
      })}

      <div className="movies-box">
        {movie.slice(0, visible).map((elem) => (
          <div className="movies-f">{elem.iframes}</div>
        ))}
      </div>
      <div className="load">
        <button onClick={showMore} className="load-more">
          Load more
        </button>
      </div>
    </>
  );
}
export default Category;
