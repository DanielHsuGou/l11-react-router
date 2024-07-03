import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./Root";
import About from "./About";
import Blog from "./Blog";
import ContactRoot from "./ContactRoot";
import Contact from "./Contact";
import ConditionAction from "./ConditionAction";
import HomeContent from "./HomeContent";
import ExternalContact from "./ExternalContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomeContent /> },
      { path: "/about", element: <About /> },
      { path: "/blog/:id?", element: <Blog /> },
      // useParams :id?
      {
        path: "/contact",
        element: <ContactRoot />,
        children: [
          { path: "/contact", element: <Contact /> },
          { path: "/contact/external", element: <ExternalContact /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
        <ConditionAction>
          <div>Conditionally place sth that wants to give some action</div>
        </ConditionAction>
      </header>
    </div>
  );
}

export default App;
