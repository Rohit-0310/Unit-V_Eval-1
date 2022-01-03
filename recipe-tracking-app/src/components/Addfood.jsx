import "../components/Addfood.css"
import { Input } from 'antd'

export const Addfood = () => {


    return (
        <div className="form">
            <form>
                <label>Title
                    <Input type="text" placeholder="Title" />
                </label>

                <label>Ingredients 
                    <Input type="text" placeholder="ingredients" />
                </label>
                <label> Time to Cook 
                    <Input type="number" placeholder="Cooking Time" />
                </label>

                <label>Image 
                    <Input type="file" placeholder="image " />
                </label>

                <label>
                    <Input type="submit" value="submit" />

                </label>
            </form>

        </div>
    )
}