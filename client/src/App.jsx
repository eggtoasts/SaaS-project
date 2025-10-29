import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import WriteArticle from "./pages/WriteArticle";
import BlogTitles from "./pages/BlogTitles";
import RemoveObject from "./pages/RemoveObject";
import RemoveBackground from "./pages/RemoveBackground";
import GenerateImages from "./pages/GenerateImages";
import Community from "./pages/Community";
import ReviewResume from "./pages/ReviewResume";

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
      { path: "generate-images", element: <GenerateImages /> },
      { path: "remove-background", element: <RemoveBackground /> },
      { path: "remove-object", element: <RemoveObject /> },
      { path: "review-resume", element: <ReviewResume /> },
      { path: "community", element: <Community /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
