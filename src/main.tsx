import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DogView } from "./features/dog/dog-view.tsx";
import { RandomQuote } from "./features/random/random-quotes.tsx";
import { UserProfileView } from "./features/user/component/user-profile-view.tsx";
import { MiniTodoList } from "./features/todoList/todo-view.tsx";
import { SimpleCounter } from "./features/counter/simple-counter.tsx";
import { RandomColorPalette } from "./features/random/random-color.tsx";
import { SimpleStopwatch } from "./features/watch/stop-watch.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/dogView", element: <DogView /> },
  { path: "/randomQuotes", element: <RandomQuote /> },
  { path: "/profile", element: <UserProfileView /> },
  { path: "/todo", element: <MiniTodoList /> },
  { path: "/simpleCounter", element: <SimpleCounter /> },
  { path: "/randomColor", element: <RandomColorPalette /> },
  { path: "/watch", element: <SimpleStopwatch /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
