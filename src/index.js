//import modules
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

//import components
import { App } from "app/App"

//import css
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
)
