import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import WriteArticle from "./pages/WriteArticle";
import BlogTitles from "./pages/BlogTitles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "ai",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "write-article", element: <WriteArticle /> },
      { path: "blog-titles", element: <BlogTitles /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
