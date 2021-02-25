import React, {useState} from 'react'

export default function AddMovie() {
    const [movie, setMovie] = useState({
        id:'',
        title:'',
        director:'',
        metascore:'',
        stars:[]

    })
    const handleAdd = () => {}
    const handleChanges = (e) => {
           setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }
    const handleKeyDown = (e) => {
       
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
                <input name='stars' value={movie.stars} type='text' onKeyDown={handleKeyDown}></input>
                </div>
                <button>Add</button>
            </form>
    
        </div>
    )
}
