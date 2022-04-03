import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieTest = () => {
  const [searchValue, setSearchValue] = useState("hulk");

  const searchMovie = (v) => {
    fetch(`http://www.omdbapi.com/?s=${v}&apikey=e487d072`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    searchMovie(searchValue);
    return () => {};
  }, [searchValue]);

  return (
    <>
      <form action="">
        <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
        <button>Search</button>
      </form>
    </>
  );
};

export default MovieTest;





// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const MovieTest = () => {
//   
//   const inputRef = useRef()

//   const searchMovie = (event) => {
//     event && event.preventDefault()
//     const v = inputRef.current.value
//     fetch(`http://www.omdbapi.com/?s=${v}&apikey=e487d072`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   useEffect(() => {
//     searchMovie();
//     return () => {};
//   }, []);

//   return (
//     <>
//       <form action="" onSubmit={searchMovie}>
//         <input type="text" ref={inputRef} />
//         <button>Search</button>
//       </form>
//     </>
//   );
// };

// export default MovieTest;
