import Link from 'next/link';

import RecipeCardStyled from './RecipeCard.styled';

export default function RecipeCard(props){
    return(
        <figure className="recipe-card" >
            <style jsx>{RecipeCardStyled}</style>
            <Link href={props.link} >
                <a>
                    <img className="recipe-picture" src={props.picture} />
                </a>
            </Link>
            <div className="recipe-category" >
                {props.category}
            </div>
            <figcaption className="recipe-name" >
                {props.name}
            </figcaption>
        </figure>
    )
}