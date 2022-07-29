module.export = {
    env:{
        browser:true,
        amd:true,
        node:true,
        es6:true,
    },
    extends:[
        'eslint:recommended',
        'plugin:jsxally/recommended',
        'plugin:prettier/recommended',
        "next",
        "next/core-web-vitals",
     ] ,
    rules:{
        semi:["error","always"],
    },
}