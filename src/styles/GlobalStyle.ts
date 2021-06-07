import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    
}

body, html{
    height: 100%;
}

a{
    text-decoration: none;
}


button{

    cursor: pointer;
}

input, button{
    display: block;
    outline: none;
    background: none;
    border: 0;
}

textarea{
    resize: none;
    background: none;
    border: 0;
    outline: none;
}

ul{
    list-style: none;
}


:root{
    --main-blue: #0070ba;
    --main-dark: #06283e;
    --secondary-blue: #00afb5;

    --main-background: #fafafa;
    --white: #ffffff;
    --dark-gray: #2c2c2c;

    --main-trelleborg-color: #998242;

    --main-text: #73828d;

    --main-border: #f0f1f2;
    }

`;
