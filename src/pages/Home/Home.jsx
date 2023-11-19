
import { Helmet } from "react-helmet-async"
import Categories from "../../components/Category/Categories"
import Rooms from "../../components/Rooms/Rooms"

const Home = () => {



  return (
    <div>
      <Helmet>
             <title>
            Home
             </title>
            </Helmet>
      <Categories></Categories>

      <Rooms />
    </div>
  )
}

export default Home
