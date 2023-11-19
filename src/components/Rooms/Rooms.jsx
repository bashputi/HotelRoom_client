import { useEffect, useState } from "react";
import Cart from "./Cart";
import Container from '../Shared/Container'
import Heading from "../Shared/Navbar/Heading";
import { useSearchParams } from "react-router-dom";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [params, setParams] = useSearchParams();
    const [ loading, setLoading ] = useState(false);
    const category = params.get('category');

    useEffect(() => {
        setLoading(true)
        fetch('./rooms.json')
            .then(res => res.json())
            .then(data => 
               { if (category){
                    const filtered = data.filter(room => room?.category === category)
                    setRooms(filtered)
                }else setRooms(data)

                setLoading(false)
               } )
    }, [category])

    if(loading) return <loader />;

    return (
       <Container>
         {rooms && rooms.length > 0 ? (
            <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {rooms.map(room => <Cart key={room._id} room={room}></Cart>)}
        </div>
         )
        : (
            <div className="mt-12">
            <Heading center={true} title="No Rooms Available In This Category" subtitle='Please Select Other Categories'/>

            </div>
        )
        }
       </Container>
    );
};

export default Rooms;