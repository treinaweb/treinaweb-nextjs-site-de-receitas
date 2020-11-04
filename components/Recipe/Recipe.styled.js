import css from 'styled-jsx/css';

export default css`
.recipe-body{
    padding: 12px;
    max-width: 500px;
    margin: 0 auto;
}
.recipe-name{
    text-align: center;
}
.recipe-picture{
    width: 100%;
}

.recipe-body :global(h2){
    color:  #ff6a28;
}

.recipe-body :global(h2){
    padding: 4px;
}

`;