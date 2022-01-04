import "../components/Addfood.css"
import { Input, Button} from 'antd'
import { useState } from "react"

export const Food = () => {

    const [text, setText] = useState("");
    const [intext, setIntext] = useState("")
    const [number, setNumber] = useState("");
    const [ food, setFood] = useState([]);
    const [file, setFile] = useState("")
    // const fileRef = useRef(null);

    // const handleChange = (e) => {
    //     let {name,value}= e.target
    //     value = type ==="file" ? URL.createObjectURL(fileRef.current.files[0]): value;
    //     setFood({...food,[name]:value})
    // }

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
        Ingredients: intext,
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
                <h5>Title{" "}
                    <Input type="text"
                    onChange={(e)=>setText(e.target.value)}
                    placeholder="Title"
                    />
                </h5>
                <br />

                <h5>Ingredients {" "}
                    <Input type="text"
                    onChange={(e)=>setIntext(e.target.value)}
                    placeholder="ingredients" />
                </h5>
                <br />



                <h5>Time to Cook {" "}
                    <Input type="number"
                    onChange={(e)=>setNumber(e.target.value)}
                    placeholder="Cooking Time" />
                </h5>
                <br />

                <h5>Image {" "}
                    <Input type="file"
                    // onChange={handleChange}
                    // name="Image"
                    // ref={fileRef}
                    onChange={(e)=>setFile(e.target.value)}
                    placeholder="image " />
                </h5>
                <br />
                <Button onClick={addFood}>Add Recipe</Button>

            </form>
                
                {food.map((e) => (
                    <div style={{
                        "text-align": "center"
                    }}>    
                            Title: {e.Title}{" "},
                            Time_to_cook: {e.Time_to_cook} Min<br />
                            Image-Location: {e.Image}</div>
                ))}
                {/* {food.map((e) => (
                    <div>Time_to_cook: {e.Time_to_cook} Min</div>
                    // <div>{e.Ingredients}</div>
                ))} */}
        </div>
    )
}