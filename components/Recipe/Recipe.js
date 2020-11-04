import RecipeStyled from './Recipe.styled';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Recipe(props){
    return (
        <div>
            <style jsx>{RecipeStyled}</style>
            <Header title={`TreinaCook - ${props.name}`} />
            
            <article className="recipe-body" >
                <h1 className="recipe-name" >{props.name}</h1>

                <img className="recipe-picture" alt={props.name} src={props.picture} />

                <div>
                    <i className="fas fa-stopwatch fa-fw" /> Preparo: {props.time} <br />
                    <i className="fas fa-utensils fa-fw" /> Rendimento: {props.servings}
                </div>

                {props.children}
            </article>

            <Footer />
        </div>
    )
}