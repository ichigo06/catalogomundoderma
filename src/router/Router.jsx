import { createBrowserRouter } from "react-router-dom"
import { App } from "../App"
import { Products } from "../components/pages/Products"

const router = createBrowserRouter([
    {
        path: "/",
        element:   <App />
    },
    {
        path: "/productos/:id",
        element:   <Products />
    },
])
export default router   