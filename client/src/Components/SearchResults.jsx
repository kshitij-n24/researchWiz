import { Link } from 'react-router-dom';
import './SearchResults.css';
import addToHistAPI from '../API/addToHistAPI';

export default function SearchResults(props) {
  const handleClick = async (e) => {
    const response = await addToHistAPI({ email: email, paper_id: paperId });
    if (response !== 200) {
      console.log('Failed at adding paper to history.');
    }
  };

  return (
    <div className="container">
      {props.search.length === 0 ? <div><p>No results found</p></div> : (props.search.map((item, index) => (
        <Link
          to={`/pdfviewer/${encodeURIComponent(item.title)}`}
          className="card mb-3"
          key={index}
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        >
          <div className="card-body">
            <h5 className="card-title">Title: {item.title}</h5>
            <p className="card-text">Author: {item.author}</p>
            <p className="card-text">Year: {item.year}</p>
          </div>
        </Link>
      )))}
    </div>
  );
}
