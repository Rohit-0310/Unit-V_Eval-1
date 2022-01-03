import "../components/Addfood.css"
import { Input, Button} from 'antd'
import { useState } from "react"

export const Food = () => {

    const [text, setText] = useState("");
    const [ food, setFood] = useState([]);

const getFood = () => {
    fetch("http://localhost:4567/addFood")
    .then((f) => f.json())
    .then((res) =>{
        setFood(res)
    })
}

const addFood = () =>{
    const payload = {
        Title: text,
        Ingredients: text,
    };
    fetch("http://localhost:4567/addFood", {
        method: "POST",
        body: JSON.stringify(payload),
        headers:{
            "content-type": "application/json"
        }
    }).then(() => {
        getFood();
    })
    
}


    return (
        <div className="form">
            <form>
                <label>Title
                    <Input type="text"
                    onChange={(e)=>setText(e.target.value)}
                    placeholder="Title"
                    />
                </label>

                <label>Ingredients 
                    <Input type="text" placeholder="ingredients" />
                </label>

                <Button onClick={addFood}>Add Recipe</Button>
                {/* <label> Time to Cook 
                    <Input type="number" placeholder="Cooking Time" />
                </label>

                <label>Image 
                    <Input type="file" placeholder="image " />
                </label>

                <label>
                    <Input type="submit" value="submit" />

                </label> */}


            </form>
                
                {food.map((e) => (
                    <div>{e.Title}</div>
                ))}
        </div>
    )
}