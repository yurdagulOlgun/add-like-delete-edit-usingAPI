import Home from "./pages/Home";
import FavEditDel from "./styledComponents/FavEditDel";

const routes = [
    {title:"Home", path:"/", element:Home },
    {title:"FavEditDel", path:":id", element:FavEditDel },
]

export default routes