import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../component/Header/Header';
import { FormBtn, Search } from '../component/Form/Index.js';
import ButtonBaseContainer from '../component/ButtonBaseContainer/ButtonBaseContainer.js';
import API from '../utils/API'
import Footer from '../component/Footer/Footer';
import Typing from '../Pages/Signup/ProfileTyping/Typing'
import words from '../Pages/Signup/ProfileTyping/words';
import { alpha } from '@material-ui/core/styles';
import ScrollReact from '../component/ScrollUpButton/ScrollReact'
// import DropDown from '../component/DropDowns/DropDown'

const useStyles = makeStyles((theme) => ({
    root: {
        
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + "cooking4.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
    },

    instructions: {

        color: "white",
        textShadow: "white",
        fontSize: "15px",
        marginLeft: "18%",
        marginTop: "10px",
        border: "solid 2px",
        borderColor: "crimson",
        '&:hover': {
            borderColor: "white",
        },
        width: "50%",
        textAlign: "center",
        borderRadius: "10px"
    },



    searchBar: {

        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '50%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            //   width: 'auto',
            marginLeft: "300px",
            height: "20px"

        },
    },

    searchHeader: {
        alignItems: "center",
        marginLeft: "0%",
        strings: words,
        // marginBottom: "15%",
        marginTop: "-12%"
    },

    form: {
        marginTop: "-10%",
    },

    button: {
        height: "30px",
        width: "65px",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
    },

    secondary: {
        marginTop: "90px",
    }


}));


export default function ProfilePage() {
    useEffect(() => {
    }, [])

    const [recipes, setRecipes] = useState([]);
    const [recipeURLs, setRecipeURLs] = useState([]);
    const [formObject, setFormObject] = useState({
        title: " ",
        foodName: "peaches",

    })
    function SearchRecipes(event) {
        event.preventDefault();
        const userQuery = formObject.foodName
        API.getRecipe(userQuery)
            .then((res) => {
                UrlRecipes(res.data)
             
            //    console.log(res.data)
            }
            )
            .catch(err => console.log(err))
            
    }

    function UrlRecipes(foodData) {
        const imageData = foodData
        setRecipes(imageData)
        foodData.map((urlData) => (
            console.log(urlData.title)
            // API.getRecipeURL(urlData.id)
            //     .then((res) => {
            //         setRecipeURLs(res.data)
            //          console.log(res.data)
            //         }
            //     )
            //     .catch(err => console.log(err))
        ))
    }

    function handleInputChange(event) {
        const newFood = event.target.value;
        setFormObject({ ...formObject, foodName: newFood })
        // console.log(formObject)
    }


    const classes = useStyles();

    return (

        <div className={classes.root}>
            <ScrollReact/>
            <div className="navbar">
                <Header />
                </div>
            <h2 className={classes.searchHeader}><Typing /></h2>
            <form className={classes.form} onSubmit={SearchRecipes} >
                <h3 className={classes.instructions}><span className={classes.span}>Please type in the ingredient to search for you're receipe you desire. <br></br>For multiple ingredients, please seperate by a comma and a + sign. <br></br>
                    i.e chicken, +lettuce</span></h3>

                <input
                    className={classes.searchBar}
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Type in your search"
                />

                <input className={classes.button} type="submit"
                    value="search" />

            </form>
            <div className={classes.secondary}>
                <ButtonBaseContainer images={recipes}/>
            </div>
            <Footer />
        </div>


    )
}



