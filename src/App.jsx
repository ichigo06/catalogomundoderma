import  {ListCategoryEucerin } from "./components/organisms/ListCategoryEucerin"
import './App.scss'
import ListCategoryBioderma from "./components/organisms/ListCategoryBioderma"
import ListCategorySesderma from "./components/organisms/ListCategorySesderma"
import { Link } from "react-router-dom";
export function App() {
    let button = document.querySelectorAll(".listCategory li a");
    let text = document.querySelectorAll(".categoryContent")

    const values = [].map.call(text, function(item) {
        return item;
    });
    button.forEach(item => {
        item.addEventListener("click", filters)
        function filters() {
            // button.forEach((item)=>
            // item.classList.remove('active-button'))
            // this.classList.add('active-button') 
            let attributtes = item.getAttribute("data-target");
            for(let i = 0; i < values.length ; i++) {
                if(attributtes === values[i].getAttribute("data-target")) {
                    values[i].classList.add("d-flex");
                    values[i].classList.remove("d-none");
                } else {
                    values[i].classList.add("d-none");
                    values[i].classList.remove("d-flex");
                }
            }
        }
    })
    return (
        <div>
            <div>
                <ul className="listCategory">
                    <li className="listCategory__name"><a href="/#eucerin" data-target="eucerin" rel="noreferrer" className="text-decoration-none">Eucerin</a></li>
                    <li className="listCategory__name"><a href="/#sesderma" data-target="sesderma" rel="noreferrer" className="text-decoration-none">Sesderma</a></li>
                    <li className="listCategory__name"><a href="/#bioderma" data-target="bioderma" rel="noreferrer" className="text-decoration-none">Bioderma</a></li>
                </ul>
            </div>
            <div className="container">
                <div>
                    <div>
                        <ListCategoryEucerin />
                    </div>
                    <div>
                        <ListCategorySesderma />
                    </div>
                    <div>
                        <ListCategoryBioderma />
                    </div>
                </div>
            </div>
        </div>
    )
}