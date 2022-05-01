import Home from "./pages/Home";
import FavEditDel from "./styledComponents/FavEditDel";
import Loading from "./styledComponents/Loading";

const routes = [
    {title:"Home", path:"/", element:Home },
    {title:"FavEditDel", path:":id", element:FavEditDel },
    {title:"Loading", path:"/loading", element:Loading },
]

export default routes