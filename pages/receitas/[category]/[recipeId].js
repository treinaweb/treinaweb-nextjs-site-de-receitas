import slugify from 'slugify';

import {RecipeService} from '../../../services/RecipeService';
import Recipe from '../../../components/Recipe/Recipe';

export async function getStaticPaths() {
    const recipes = await RecipeService.listAll();

    const paths = recipes.map(recipe => {
        return {
            params: {
                category: slugify(recipe.category).toLowerCase(),
                recipeId: `${recipe.id}-${slugify(recipe.name).toLowerCase()}`
            }
        }
    })

    return {paths, fallback: false};
}

export async function getStaticProps({ params }) {
    const recipeId = params.recipeId.replace(/^([a-z\d]+)-.*/gi, '$1');
    const recipe = await RecipeService.get(recipeId);

    return {
        props: {
            recipe
        }
    }
}


export default function RecipeContainer({recipe}){

    return(
        <div>
            <Recipe 
                name={recipe.name}
                picture={recipe.img}
                time={recipe.time}
                servings={recipe.servings}
            >
                <h2>Ingredientes</h2>

                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} >{ingredient}</li>
                    ))}
                </ul>


                <h2>Modo de Preparo</h2>

                <ol>
                    {recipe.directions.map((direction, index) => (
                        <li key={index} >{direction}</li>
                    ))}
                </ol>
            </Recipe>
        </div>
    )
}