import {useState, useEffect} from 'react'
import {db} from '../../utils/firebase'
import {collection, query, onSnapshot, deleteDoc, doc} from 'firebase/firestore'
import './removeMovie.css'
function RemoveMoviePage() {

    const [moviesnfo, setInfo] = useState([])

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

    const deleteMovie = async (id) => {
        await deleteDoc(doc(db, 'movies', id))
        console.log(id)
    }

    return (
        <div>
            <div className='container'>
                {moviesnfo.map( (element, index) => {
                    return <List key={index} moviesnfo={element} deleteMovie={deleteMovie}></List>
                })}
            </div>
        </div>
    );

}export default RemoveMoviePage


function List ({moviesnfo, deleteMovie}) {
    return (
        <div>
            <form className='remove-form'>
                <div className='img-container'>
                    <img src={`${moviesnfo.imgSrc}`}></img>
                </div>
                <div className='info-container'>
                    <label>{`Title ${moviesnfo.title}`}</label><br></br>
                    <label>{`Discrtiption ${moviesnfo.descript}`}</label><br></br>
                    <label>{`${moviesnfo.id}`}</label>
                    <button onClick={ (event) => {event.preventDefault();
                         deleteMovie(moviesnfo.id)}}>DELETE</button>
                </div>
            </form>
        </div>
    )
}