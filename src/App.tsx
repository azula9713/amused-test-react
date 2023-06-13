import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { store, persistor } from "./store/store";
import Layout from "./layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,
    },
  ]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default App;
