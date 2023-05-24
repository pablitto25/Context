import React, { useState } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const initialTheme ="light"
const initialLanguage = "es"
const initialAuth = null;

// Aca deberia llamar desde la api el json con todos los idiomas
const translations = {
    es:{
        headerTitle: "Mi aplicacion SIN Context API",
        headerSubtitle: "Mi cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesion",
        buttonLogout: "Cerrar Sesion",
        mainWelcome: "Bienvenid@ invitad@",
        mainHello: "Hola Usuari@",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi Pie de pagina",
    },
    en:{
        headerTitle: "My application without Context API",
        headerSubtitle: "My header",
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "Logout",
        mainWelcome: "Welcome Guest",
        mainHello: "Hello User",
        mainContent: "My main content",
        footerTitle: "My footer",
    },
}

const MyPage = () => {
    const [theme, setTheme] = useState(initialTheme)
    // variable de estado donde se inicia siempre en español - const initialLanguage = "es" mas arriba fuera de componente esta declarada
    const [language, setLanguage] = useState(initialLanguage) 
    // Accede a translations --> siguiente propiedad a la que tenga el nombre de [languange]
    const [texts, setTexts] = useState(translations[language])

    const [auth, setAuth] = useState(initialAuth);

    console.log(language);
    console.log(texts);

    
    const handleTheme = (e) =>{
        //console.log(e.target.value);
        if(e.target.value === "light"){
            setTheme("light");
        }else{
            setTheme("dark");
        }
    };

    const handleLanguage = (e) => {
        //console.log(e.target.value);
        if(e.target.value === "es"){
            setLanguage("es");
            setTexts(translations.es);
        }else{
            setLanguage("en");
            setTexts(translations.en)
        }
    };

    const handleAuth = (e) =>{
        if(auth){
            setAuth(null);
        }else{
            setAuth(true);
        }
    };

  return (
    <div className='my-page'>
        <Header theme={theme} handleTheme={handleTheme} texts= {texts} handleLanguage={handleLanguage} auth={auth} handleAuth={handleAuth}/>
        <Main theme={theme} texts= {texts} handleLanguage={handleLanguage} auth={auth}/>
        <Footer theme={theme} texts= {texts} handleLanguage={handleLanguage}/>
    </div>
  )
}

export default MyPage