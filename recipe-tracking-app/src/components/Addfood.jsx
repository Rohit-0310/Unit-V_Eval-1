import "../components/Addfood.css"


export const Addfood = () => {


    return (
        <div className="form">
            <form>
                <label>Title  
                    <input type="text" placeholder="Title" />
                </label>

                <label>Ingredients
                    <input type="text" placeholder="ingredients" />
                </label>
                <label> Time to Cook
                    <input type="number" placeholder="Cooking Time" />
                </label>

                <label>
                    <input type="file" placeholder="image " />
                </label>

                <input type="submit" value="submit" />
            </form>

        </div>
    )
}