/* eslint-disable no-unused-vars */
import qs from 'query-string' 
import { useNavigate, useSearchParams } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Categorybox = ({ label, icon: Icon, selected}) => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const handleClicked = () => {
        console.log(label);
        let currentQuery = {}
        if(params){
            currentQuery = qs.parse(params.toString())
            const updatedQuery = { ...currentQuery, category: label };
            const url = qs.stringifyUrl({
                url: '/',
                query: updatedQuery,
            })
            navigate(url)
        }
    };
    params.get('category')


    return (
        <div onClick={handleClicked} className={`${selected? 'border-b-neutral-800 text-neutral-800' : ''} flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-500 transition cursor-pointer`}>
            <Icon size='26'/>
            <div className="text-sm font-medium">{label}</div>
        </div>
    );
};

export default Categorybox;