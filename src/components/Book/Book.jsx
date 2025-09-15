import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, image, bookName, author, tags, category, rating } = book;

  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="bg-blue-200 py-8 rounded-2xl">
          <img src={image} className="h-[166px]" alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-4 ">
            {
              tags.map((tag , index) => <button 
              
              key={index} 
              
              className="btn btn-sm bg-green-200 text-green-500 rounded-l-lg">
                {tag}
              </button>)
              
            }
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>by:{author}</p>
          <div className="divider"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{rating}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
