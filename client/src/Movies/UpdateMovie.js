import React, {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios'
export default function UpdateMovie(props) {
     const params = useParams();
     const {push} = useHistory()
        const [movie, setMovie] = useState({
            id:params.id,
            title:'',
            metascore:'',
            director:''
        });
        useEffect(() => {
            axios.get(`http://localhost:5000/api/movies/${params.id}`).then((res) => {
                setMovie(res.data)
            }).catch((err) => {
                console.log(err)
            })

        },[])
        const handleChanges = (e) => {
            setMovie({
                ...movie,
                [e.target.name]:e.target.value
            })

        }
        const handleUpdate = (e) => {
            e.preventDefault();
            axios.put(`http://localhost:5000/api/movies/${params.id}`, movie)
            .then((res) => {
                const updatedMovie = props.movies.map((movie) => {
                    if(movie.id === params.id)
                        return res.data
                    else
                    return movie
                })
                props.setMovieList(updatedMovie)
                push('/')
            })
            .catch((err) => {
                console.log(err)
            })

        }
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <div>
                <label>Title: </label>
                <input name='title' value={movie.title} type='text' onChange={handleChanges} ></input>
                </div>
                <div>
                <label>Director: </label>
                <input name='director' value={movie.director} type='text' onChange={handleChanges}></input>
                </div>
                <div>
                <label>Metascore: </label>
                <input name='metascore' value={movie.metascore} type='text' onChange={handleChanges} ></input>
                </div>
                <button>Update</button>
            </form>
    
        </div>
    )
}
