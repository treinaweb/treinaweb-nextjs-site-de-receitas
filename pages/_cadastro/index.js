import {useState} from 'react';
import Head from 'next/head';
import {
    Button,
    TextField,
    Grid,
    Paper,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
} from '@material-ui/core';

import {RecipeService} from '../../services/RecipeService';

export default function Cadastro(){
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [category, setCategory] = useState('');
    const [servings, setServings] = useState('');
    const [time, setTime] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [newDirection, setNewDirection] = useState('');
    const [directions, setDirections] = useState([]);

    function resetForm(){
        setName('');
        setImg('');
        setCategory('');
        setServings('');
        setTime('');
        setNewIngredient('');
        setIngredients([]);
        setNewDirection('');
        setDirections([]);
    }

    async function addRecipe(){
        const fieldsLength = [
            name, 
            img, 
            category, 
            servings,
            time,
            ingredients, 
            directions, 
        ].map(item => item.length);

        if(fieldsLength.includes(0)){
            return false;
        }

        const newRecipe = await RecipeService.create({
            name,
            img,
            category,
            servings,
            time,
            ingredients,
            directions,
        })

        resetForm();
    }

    function addIngredient(){
        if(newIngredient && ingredients.indexOf(newIngredient) === -1){
            setIngredients([...ingredients, newIngredient]);
            setNewIngredient('');
        }
    }

    function removeIngredient(ingredientToRemove){
        setIngredients(ingredients.filter(ingredient => ingredient !==ingredientToRemove))
    }

    function addDirection(){
        if(newDirection && directions.indexOf(newDirection) === -1){
            setDirections([...directions, newDirection]);
            setNewDirection('');
        }
    }

    function removeDirection(directionToRemove){
        setDirections(directions.filter(direction => direction !== directionToRemove));
    }

    return(
        <div>
            <Head>
                <title>Cadastro de Receita</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            </Head>
            
            <h1>Cadastro de Receita</h1>

            <Paper style={{margin: '24px auto', maxWidth: '800px', padding: '12px'}} >
                <Grid container spacing={2} >
                    <Grid item container justify={'center'} >
                        <img width={250} src={img} />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField label="Imagem" value={img} onChange={event => setImg(event.target.value)} fullWidth />
                    </Grid>

                    <Grid item xs={12} >
                        <TextField label="Nome" value={name} onChange={event => setName(event.target.value)} fullWidth />
                    </Grid>

                    <Grid item xs={12} >
                        <TextField label="Categoria" value={category} onChange={event => setCategory(event.target.value)} fullWidth />
                    </Grid>

                    <Grid item xs={6} >
                        <TextField label="Tempo de Preparo" value={time} onChange={event => setTime(event.target.value)} fullWidth />
                    </Grid>

                    <Grid item xs={6} >
                        <TextField label="Rendimento" value={servings} onChange={event => setServings(event.target.value)} fullWidth />
                    </Grid>


                    <Grid item xs={12} container spacing={2} >
                        <Grid item xs={12} >
                            <h2>Ingredientes</h2>
                        </Grid>
                        <Grid item xs={12} container >
                            <List>
                                {ingredients.map(ingredient => (
                                    <ListItem key={ingredient} >
                                        <ListItemText>{ingredient}</ListItemText>
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete" color={'secondary'} onClick={() => removeIngredient(ingredient)} >
                                                X
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>

                        <Grid item xs={12} container spacing={2} >
                            <Grid item xs={10} >
                                <TextField label="Novo Ingrediente" value={newIngredient} onChange={event => setNewIngredient(event.target.value)} fullWidth />
                            </Grid>
                            <Grid item xs={2} >
                                    <Button variant={'outlined'} onClick={addIngredient} >Adicionar</Button>
                            </Grid>
                        </Grid>

                    </Grid>




                    <Grid item xs={12} container spacing={2} >
                        <Grid item xs={12} >
                            <h2>Modo de Preparo</h2>
                        </Grid>
                        <Grid item xs={12} container >
                            <List>
                                {directions.map(direction => (
                                    <ListItem key={direction} >
                                        <ListItemText>{direction}</ListItemText>
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete" color={'secondary'} onClick={() => removeDirection(direction)}>
                                                X
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>

                        <Grid item xs={12} container spacing={2} >
                            <Grid item xs={10} >
                                <TextField label="Novo Passo" value={newDirection} onChange={event => setNewDirection(event.target.value)} fullWidth />
                            </Grid>
                            <Grid item xs={2} >
                                <Button onClick={addDirection} variant={'outlined'} >Adicionar</Button>
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid item xs={12} container justify={'center'} spacing={2}>
                        <Grid item >
                            <Button onClick={resetForm} >Reiniciar</Button>
                        </Grid>
                        <Grid item >
                            <Button color="primary" variant="contained" onClick={addRecipe} >Cadastrar</Button>
                        </Grid>
                    </Grid>


                </Grid>
            </Paper>
        </div>
    )
}