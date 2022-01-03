import "../components/Addfood.css"
import { Input, Button} from 'antd'
import { useState } from "react"

export const Food = () => {

    const [text, setText] = useState("");
    const [number, setNumber] = useState("");
    const [file, setFile] = useState("")
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
        Ingredients: text,
        Title: text,
        Time_to_cook: number,
        Image: file
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
                    placeholder="ingredients" />
                </label>

                <label>Ingredients 
                    <Input type="text"
                    onChange={(e)=>setText(e.target.value)}
                    placeholder="Title"
                    />
                </label>


                <label> Time to Cook 
                    <Input type="number"
                    onChange={(e)=>setNumber(e.target.value)}
                    placeholder="Cooking Time" />
                </label>

                <label>Image 
                    <Input type="file"
                    onChange={(e)=>setFile(e.target.value)}
                    placeholder="image " />
                </label>
                <Button onClick={addFood}>Add Recipe</Button>

            </form>
                
                {food.map((e) => (
                    <div>Title: {e.Title}</div>
                ))}
                {/* {food.map((e) => (
                    <div>Time_to_cook: {e.Time_to_cook} Min</div>
                    // <div>{e.Ingredients}</div>
                ))} */}
        </div>
    )
}