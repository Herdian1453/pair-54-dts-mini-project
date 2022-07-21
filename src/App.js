import React from 'react'
import { useRoutes } from "react-router-dom";
import routesConfig from './configs/router';

const App = () => {
  let element = useRoutes(routesConfig);
  return (
    <div>{element}</div>
  )
}

export default App