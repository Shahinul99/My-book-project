import { useLoaderData, useParams } from "react-router-dom";

    const BookDetail = ()=> {
        const {bookId} = useParams();
        const id = parseInt(bookId);

        const data = useLoaderData();
        const book = data.find (book => book.bookId === id)

        const { bookId: currentBookId , image } = book;

        const handleMarkAsRead  =() => {
            
        }
    return (
        <div>
            <div className="my-12">
                <h2>
                    Book Details: {bookId}
                </h2> 
                <img className="w-36" src={image} alt="" />
                <br />
                <button onClick={handleMarkAsRead} class="btn btn-accent mr-4">Mark as Read</button>
                <button class="btn btn-accent">Future Wish List</button>
            </div>
        </div>
    );
};

export default BookDetail;