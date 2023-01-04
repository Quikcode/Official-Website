import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Default} from "./components/templates"

import "normalize.css"
import "@/style/global.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Default/>}>
                <Route index element={<h1>Inicio</h1>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
