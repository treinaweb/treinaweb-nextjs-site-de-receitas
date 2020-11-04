import css from 'styled-jsx/css';

export default css`
.recipe-category{
    padding: 8px 16px;   
}

.category-name{
    color: #ff6a28;
}

.recipes{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 16px;
}
`;