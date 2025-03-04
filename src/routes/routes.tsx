
import App from "@/App";
import Homepage from "@/pages/Homepage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import AllProducts from "@/Products/AllProducts";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import { routeGenerator } from "@/utils/routeGenerator";
import { adminPaths } from "./admin.routes";
import AdminLayout from "@/components/layout/AdminLayout";
import UserLayout from "@/components/layout/UserLayout";
import { userPaths } from "./user.routes";
import About from "@/pages/About/About";
import ProductDetails from "@/Products/ProductsDetails";
import ViewOrder from "@/pages/Order/ViewOrder";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Homepage/>
            },
            {
                path: "/products",
                element: <AllProducts/>
            },
            {
                path: "/category",
                element: <div>Category Page</div>
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/products/:productId",
                element: <ProductDetails/>,
            },
            {
                path: "/order",
                element: <ProtectedRoutes role="user"><ViewOrder /></ProtectedRoutes>
            }
        ]
    },

    // admin routes

    {
        path: "/admin",
        element: (
            <ProtectedRoutes role="admin">
                <AdminLayout/>
            </ProtectedRoutes>
        ),
        children: routeGenerator(adminPaths)

    },
    {
        path: "/user",
        element: (
            <ProtectedRoutes role="user">
                <UserLayout/>
            </ProtectedRoutes>
        ),
        children: routeGenerator(userPaths)

    },


    {
        path: "/about",
        element: <div>About Page</div>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    }
])

export default routes;
