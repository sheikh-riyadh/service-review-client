import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import Register from "../pages/Register/Register";
import AddReview from "../pages/Review/AddReview";
import Services from "../pages/Services/Services";
import ShowDetails from "../pages/ShowDetails/ShowDetails";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/register',
                element: <Register></Register>
            }, {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://review-server.vercel.app/services')
            }, {
                path: '/service-details/:id',
                element: <ShowDetails></ShowDetails>,
                loader: ({ params }) => fetch(`https://review-server.vercel.app/services/${params.id}`)
            }, {
                path: '/add-review/:id',
                element: <PrivateRouter><AddReview></AddReview></PrivateRouter>,
                loader: ({ params }) => fetch(`https://review-server.vercel.app/services/${params.id}`)
            }, {
                path: '/my-reviews',
                element: <MyReviews></MyReviews>
            }
        ]
    }
])