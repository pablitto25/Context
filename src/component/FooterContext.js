import ThemeContext from '../context/ThemeContext.js'
import React, { useContext } from 'react'

const FooterContext = ({texts}) => {

  const {theme} = useContext(ThemeContext);

  return (
    <footer className={theme}>
            <h4>{texts.footerTitle}</h4>
        </footer>
  )
}

export default FooterContext