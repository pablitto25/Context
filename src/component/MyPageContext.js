import React, { useState } from 'react'
import HeaderContext from './HeaderContext'
import MainContext from './MainContext'
import FooterContext from './FooterContext'
import { ThemeProvider } from '../context/ThemeContext'


const initialLanguage = "es"
const initialAuth = null;

// Aca deberia llamar desde la api el json con todos los idiomas
const translations = {
    es:{
        headerTitle: "Mi aplicacion CON Context API",
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
        headerTitle: "My application with Context API",
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

const MyPageContext = () => {
    
    // variable de estado donde se inicia siempre en español - const initialLanguage = "es" mas arriba fuera de componente esta declarada
    const [language, setLanguage] = useState(initialLanguage) 
    // Accede a translations --> siguiente propiedad a la que tenga el nombre de [languange]
    const [texts, setTexts] = useState(translations[language])

    const [auth, setAuth] = useState(initialAuth);

    console.log(language);
    console.log(texts);

    
    

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
        <ThemeProvider>
        <HeaderContext texts= {texts} handleLanguage={handleLanguage} auth={auth} handleAuth={handleAuth}/>
        <MainContext texts= {texts} auth={auth}/>
        <FooterContext texts= {texts} />
        </ThemeProvider>
    </div>
  )
}

export default MyPageContext