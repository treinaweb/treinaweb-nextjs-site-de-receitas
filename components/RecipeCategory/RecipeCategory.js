import slugify from 'slugify';
import Link from 'next/link';

import RecipeCategoryStyled from './RecipeCategory.styled';
import RecipeCard from '../RecipeCard/RecipeCard';

function createUrl(recipe){
    const category = slugifyCategory(recipe.category);
    const recipeId = `${recipe.id}-${slugify(recipe.name).toLocaleLowerCase()}`;
    return `/receitas/${category}/${recipeId}`;
}

function slugifyCategory(category){
    return slugify(category).toLocaleLowerCase();
}

export default function RecipeCategory({category, recipeList, maxElements = 3}){
    const recipes = recipeList.filter(recipe => recipe.category === category).slice(0, maxElements);

    return (
        <div className="recipe-category" >
            <style jsx>{RecipeCategoryStyled}</style>

            <Link href={`/receitas/${slugifyCategory(category)}`} >
                <a>
                    <h2 className="category-name" >{category}</h2>
                </a>
            </Link>

            <div className="recipes" >
                {recipes.map(recipe => (
                    <RecipeCard 
                        key={recipe.id}
                        name={recipe.name}
                        picture={recipe.img}
                        category={recipe.category}
                        link={createUrl(recipe)}
                    />
                ))}
            </div>
            
        </div>
    )
}