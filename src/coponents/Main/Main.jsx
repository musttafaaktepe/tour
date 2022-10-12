import "./Main.scss";

import { data } from "../../helper/data";

const Main = () => {
  console.log(data);
  return (
    <div className="card-container">
     {data.map((item)=>{
        return(
            <div className="cards">
                <h1>{item.title}</h1>
            </div>
        )
        })}
     </div>
  )
    
  
};

export default Main;
