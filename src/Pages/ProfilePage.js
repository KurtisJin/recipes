import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../component/Header/Header';
import { FormBtn, Search } from '../component/Form/Index.js';
import ButtonBaseContainer from '../component/ButtonBaseContainer/ButtonBaseContainer.js';
import API from '../utils/API'
import Footer from '../component/Footer/Footer';

const useStyles = makeStyles((theme) => ({
    // root: {
    //     minHeight: '100vh',
    //     backgroundImage: `url(${process.env.PUBLIC_URL + "cooking3.jpg"})`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: 'cover',
    // },
    searchbar: {

    }


}));


export default function ProfilePage() {
    useEffect(() => {
        // SearchRecipes()
    }, [])

    const [recipes, setRecipes] = useState([]);
    const [formObject, setFormObject] = useState({
        title: " ",
        foodName: "peaches",

    })
    function SearchRecipes(event) {
        event.preventDefault();
        const userQuery = formObject.foodName
        // API.getRecipe(userQuery)
        //     .then(res =>
        //         setRecipes(res.data),
                console.log(userQuery)
            // )
            // .catch(err => console.log(err))
    }
    
    function handleInputChange(event) {
        const newFood = event.target.value;
        setFormObject({ ...formObject, foodName: newFood })
        console.log(formObject)
    }


    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Header />
            <form onSubmit={SearchRecipes} >
                <input
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Type in your search"
                />
                <input type="submit"
                value="search"/>
                 
            </form>
                <div className={classes.secondary}>
                    <ButtonBaseContainer images={recipes} />
                </div>
                <Footer />
        </div>


            )
}



