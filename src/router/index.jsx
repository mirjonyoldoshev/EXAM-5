import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from '../App'
import {SinglePage, Login, Register, Home, Card} from '../pages'



export default function Router(){
    const root = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
               <Route path="/" element={<Home/>}/>
               <Route path="/card" element={<Card/>}/>
               <Route path="/product" element={<SinglePage/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/register" element={<Register/>}/>
            </Route>
        )
    )

    return <RouterProvider router={root} />
}