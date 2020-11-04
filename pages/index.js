import {useState, useEffect} from 'react';

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import {RecipeService} from '../services/RecipeService';

export default function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    RecipeService.listAll().then(setList)
  }, [])


  return (
    <div >
        <Header title="TreinaCook" />

        {list.map(recipe => (
          <RecipeCard
            key={recipe.id}
            link={'/'}
            category={recipe.category}
            name={recipe.name}
            picture={recipe.img}
          />
        ))}

        <Footer />
    </div>
  )
}
