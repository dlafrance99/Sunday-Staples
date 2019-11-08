import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import RecipeSearch from "./pages/RecipeSearch"
import NutritionSearch from "./pages/NutritionSearch"
import Reviews from "./pages/Reviews"
import SavedRecipes from "./pages/SavedRecipes"
import ShoppingList from "./pages/ShoppingList"

function App () {
    return (
       <Router>
           <div>
               <Nav />
               <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/RecipeSearch" component={RecipeSearch} />
                    <Route exact path="/NutritionSearch" component={NutritionSearch} />
                    <Route exact path="/SavedRecipes" component={SavedRecipes} />
                    <Route exact path="/ShoppingList" component={ShoppingList} />
                    <Route exact path="/Reviews" component={Reviews} />
               </Switch>
           </div>
       </Router>
    )
}

export default App;