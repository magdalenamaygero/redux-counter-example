// App.js
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  // incrementCount,
  // updateName,
  incrementBookTypeCount,
} from './store';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.value);
  const name = useSelector((state) => state.name);
  const bookTypeCounts = useSelector((state) => state.bookTypeCounts);

  const handleBookTypeClick = (bookType) => {
    dispatch(incrementBookTypeCount(bookType));
  };

  return (
    <>
      <h1>How many books?</h1>
      {/* <div className="card"> */}
        {/* <button onClick={() => dispatch(incrementCount())}> */}
          {/* count is {count} */}
        {/* </button> */}
      {/* </div> */}
      {/* <h1>{name}</h1> */}
      {/* <input onChange={(e) => dispatch(updateName(e.target.value))}></input> */}

      {/* Render buttons for different book types */}
      <div>
        {Object.keys(bookTypeCounts).map((bookType) => (
          <button
            key={bookType}
            onClick={() => handleBookTypeClick(bookType)}
          >
            {bookType}
          </button>
        ))}
      </div>

      <div>
        {Object.entries(bookTypeCounts).map(([bookType, count]) => (
          <p key={bookType}>
            {bookType}: {count}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
