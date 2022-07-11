import React from "react";
import {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
    const [heroes, setHeroes] = useState([])
    const [hasError, setErrors] = useState(false)

    useEffect(() => {
        async function fetchHeroes() {
            const res = await fetch("http://127.0.0.1:8000/heroes/");
            res
                .json()
                .then(res => setHeroes(res.response))
                .catch(err => setErrors(err));
        }
        fetchHeroes();
    }, [])

    // getHeroes = () => {
    //     console.log('first hero');
    //     setTimeout(() => {
    //         console.log('second hero');
    //     }, 3000);
    // }
    // getHeroes();

    return (
        <div className="App">
            <header className="App-header">
                <h1>DjangoReact</h1>
            </header>
            <div className="hero-list">
                <p>{heroes}</p>
                {/*{heroes.map((hero, index) =>*/}
                {/*    <div className="hero-item">*/}
                {/*        /!*<h2>{hero.id}</h2>*!/*/}
                {/*        <p>{hero.name}</p>*/}
                {/*        <p>{hero.alias}</p>*/}
                {/*    </div>*/}
                {/*)}*/}
            </div>
        </div>
    );
}

export default App;
