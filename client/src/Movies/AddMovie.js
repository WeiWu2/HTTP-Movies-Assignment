import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export default function AddMovie() {
    const { push } = useHistory();
    const [starList, setStarList] = useState({starOne:'', starTwo:'', starThree:''})
    const [movie, setMovie] = useState({
        id:'',
        title:'',
        director:'',
        metascore:'',
        stars:['']
    })
    useEffect(() => {
        setMovie({
            ...movie,
            stars:[starList.starOne, starList.starTwo, starList.starThree]
        })
    },[starList])
    const handleAdd = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/movies', movie)
        .then((res) => {
        push('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const handleChanges = (e) => {
        
            setMovie({
            ...movie,
            [e.target.name]: e.target.value
            
        })
       
    
    }
    const handleStar = (e) => {
        setStarList({
            ...starList,
            [e.target.name] : e.target.value
        })
    }
    return (
        <div>
            <form onSubmit={handleAdd}>
                <div>
                <label>Title: </label>
                <input name='title' value={movie.title} type='text' onChange={handleChanges}></input>
                </div>
                <div>
                <label>Director: </label>
                <input name='director' value={movie.director} type='text' onChange={handleChanges}></input>
                </div>
                <div>
                <label>Metascore: </label>
                <input name='metascore' value={movie.metascore} type='text' onChange={handleChanges} ></input>
                </div>
                <div>
                <label>Stars: </label>
                <input name='starOne' value={starList.starOne} type='text' onChange={handleStar} ></input>
                </div>
                <div>
                <label>Stars: </label>
                <input name='starTwo' value={starList.starTwo} type='text' onChange={handleStar} ></input>
                </div>
                <div>
                <label>Stars: </label>
                <input name='starThree' value={starList.starThree} type='text' onChange={handleStar} ></input>
                </div>
                <button>Add</button>
            </form>
    
        </div>
    )
}
