import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import DashBoard from "./components/DashBoard/DashBoard.jsx";
import BookDetail from "./components/BookDetail/BookDetail.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <HomePage></HomePage>,
      },
      {
        path : 'Book/:bookId',
        element : <BookDetail></BookDetail>,
        loader : () => fetch('/public/data/booksData.json')
      },
      {
        path : 'DashBoard',
        errorElement : <DashBoard></DashBoard>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
