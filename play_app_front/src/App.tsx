import "./App.scss";
import Card from "./components/UI/Card.tsx";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import {RouterProviderProps} from "react-router-dom";
import RootLayout from "./pages/Root.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import HomePage from "./pages/HomePage.tsx";
// import {checkAuthLoader} from "./util/auth.ts";

const router = createBrowserRouter([
    {path: '/',
        element: <RootLayout />,
        id: 'root',
        children: [
            {index: true, element: <HomePage />}
            // loader: checkAuthLoader 이것을 나중에 추가해야 한다.
        ]},
    {path: '/login', element: <Login />},
    {path: '/signup', element: <Signup />},
]);

const routerProviderProps: RouterProviderProps = {
    router,
}

function App() {

    return (
    <Card>
        <RouterProvider {...routerProviderProps} />
    </Card>
  );
}

export default App;
