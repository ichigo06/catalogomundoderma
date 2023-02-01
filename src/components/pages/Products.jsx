import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export function Products() {
    const params = useParams();
    console.log(params.slug);
    const [product , setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://mundoderma.pe/wp-json/wc/v3/products?category=${params.id}&filter[limit]=-1&consumer_key=ck_ee7412ab3815693970c3ed6b9fdc4f30f2137c6d&consumer_secret=cs_09a74f7bb0b78ace4a34df4ebb62b0aeeb5c3b2f` , {
           
        })
        .then((result) => result.json())
        .then((data) => {
            setProduct(data);
            console.log(data);
        }) 
    }, [])
    return (
        <div>
            <div className="d-flex">
                <Link to="/" className="buttonBack">
                    Volver al catálogo mundoderma
                </Link>
            </div>
            <h1 className="text-center product-title">
                Productos   
            </h1>
            <ul className="productContent">
                {product.map((item) => ( 
                    <li key={item.id} className="productContent__item">
                        <a href={item.permalink} target="_blank" rel="noreferrer" className="text-decoration-none">
                            <div className="productContent__item__name"><h3>{item.name}</h3></div>
                            <img className="productContent__item__img" src={item.images[0].src} alt={item.name} />
                            <div className="productContent__item__price">Precio: <strong>S/. {item.price}</strong></div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}