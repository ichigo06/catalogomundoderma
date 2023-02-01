import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function ListCategorySesderma() {
    const [category , setCategory] = useState([]);
    useEffect(() => {
        fetch("https://mundoderma.pe/wp-json/wc/v3/products/categories?per_page=100&parent=33&hide_empty=false&consumer_key=ck_ee7412ab3815693970c3ed6b9fdc4f30f2137c6d&consumer_secret=cs_09a74f7bb0b78ace4a34df4ebb62b0aeeb5c3b2f" , {
           
        })
        .then((result) => result.json())
        .then((data) => {
            setCategory(data);
            console.log(data)
        }) 
    }, [])
    return (
        <div>
             <h1 className="text-center">
                Sesderma
            </h1>
            <div>
                <ul className="categoryContent" id="sesderma" data-target="sesderma">
                    {category.map((item) => (
                        <li key={item.id}  className="categoryContent__item categoryContentSesderma">
                            <Link to={`productos/${item.id}`} className="text-decoration-none">
                                <div className="categoryContent__item__title">{item.name}</div>
                                <div className="categoryContent__item__img"><img src={item.image.src} alt={item.name} /></div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default ListCategorySesderma