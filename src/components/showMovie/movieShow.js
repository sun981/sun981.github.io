import './showMovie.css'
import {useState, useEffect} from 'react'
import {db} from '../../utils/firebase'
import {query, collection, onSnapshot} from 'firebase/firestore'
function MovieShow() {



    const simples = [
        {title : "Guradian 2", descript : "test", platform : "Disney Plus", imgSrc : "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_FMjpg_UX1000_.jpg"},
        {title : "Guradian 3", descript : "test2", platform : "Netflix", imgSrc : "https://t1.blockdit.com/photos/2021/07/6104beaf5c633d0c8a181081_800x0xcover_q0kbuf3P.jpg"},
        {title : "Wendesday", descript : "fakjgla", platform: "Netflix", imgSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMvzTK3P4utQeyTN-LXqnSI0RVoqvqxT50J6jbX61_vBydTUS"},
        {title : "Wendesday", descript : "fakjgla", platform: "Netflix", imgSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMvzTK3P4utQeyTN-LXqnSI0RVoqvqxT50J6jbX61_vBydTUS"},
        {title : "Wendesday", descript : "fakjgla", platform: "Netflix", imgSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMvzTK3P4utQeyTN-LXqnSI0RVoqvqxT50J6jbX61_vBydTUS"},
        {title : "Wendesday", descript : "fakjgla", platform: "Netflix", imgSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMvzTK3P4utQeyTN-LXqnSI0RVoqvqxT50J6jbX61_vBydTUS"},
        {title : "Wendesday", descript : "fakjgla", platform: "Netflix", imgSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMvzTK3P4utQeyTN-LXqnSI0RVoqvqxT50J6jbX61_vBydTUS"}
    ]

    const [moviesInfo, setInfo] = useState([])


    useEffect( ()=> {
        const q = query(collection(db, 'movies'))
        const movieList = onSnapshot(q, (querySnapshot) => {
            let movieArr = []
            querySnapshot.forEach( (doc) => {
                movieArr.push({...doc.data(), id: doc.id})
            })
            setInfo(movieArr)
        })
        return () => movieList()
    })

    return (
        <div className="movie-show-box">
            <div className='grid-container'>
                {moviesInfo.map( (e, index) => {
                    return <Movie {...e} key={index}></Movie>
                })}
            </div>
        </div>
    );
}export default MovieShow;


function Movie(movie) {
    const {title, descript, platform, imgSrc} = movie
    return (
        <div className='media'>
            <div className="image">
                <img src={imgSrc} alt={title} />
            </div>
            <div className="text">
                <div>{`Title : ${title}`}</div>
                <div>{`Description : ${descript}`}</div>
                <div className='platform'>{`Platform : ${platform}`}</div>
            </div>
        </div>
    );
}