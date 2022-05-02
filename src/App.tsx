import {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {AutoComplete} from './auto-complete/auto-complete'
import {ShowContent} from "./components/show-content.component";

function App() {
    return (
        <div>
            <h1>Hello There</h1>
            <ShowContent />
        </div>
    )
}

export default App
