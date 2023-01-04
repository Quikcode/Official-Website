import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Default} from "./components/templates"

import "normalize.css"
import "@/style/globals.scss"

const HomePage = React.lazy(() => import("@/components/pages/home.page"))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Suspense fallback={null}>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Default/>}>
                    <Route index element={<HomePage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>
)
