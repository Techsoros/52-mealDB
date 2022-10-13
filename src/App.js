import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Error404 from "./components/Error404/Error404";
import MainLayout from "./layouts/MainLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        { path: "blog", element: <h1>I am children 1</h1> },
        { path: "food", element: <h1>I am children 2</h1> },
        { path: "details", element: <h1>I am children 3</h1> },
        { path: "about", element: <h1>I am children 4</h1> },
        { path: "*", element: <Error404></Error404> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
