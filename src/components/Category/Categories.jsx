import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import { categories } from "./Categoriesdata";
import Categorybox from "./Categorybox";


const Categories = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    return (
       <Container>
         <div className="pt-4 flex items-center justify-between overflow-x-auto">
            {categories.map(cate => <Categorybox key={cate.label} label={cate.label} icon={cate.icon} selected={category === cate.label}></Categorybox>)}
        </div>
       </Container>
    );
};

export default Categories;