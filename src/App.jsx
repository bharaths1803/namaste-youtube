import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./utils/appStore.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer.jsx";
import WatchPage from "./components/WatchPage.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <div className="">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
