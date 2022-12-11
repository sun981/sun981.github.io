import {useState} from 'react'
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../../utils/firebase'
import './addMovies.css'
import Platform from './platform.json'
function AddMoviePage() {

    const addMovie = async (event) => {
        event.preventDefault()
        
        if(title === '' || descript==='' || platform ==='' || imgSrc=='') {
            alert("Please enter value")
            return
        }

        const movie = {
            title : title,
            descript : descript,
            platform : platform,
            imgSrc : imgSrc
        }

        await addDoc(collection(db, 'movies'), movie)
        alert('success')
        console.log(movie)
    }

    const imgWidth = 600
    const imgHeight = 600

    const [title, setTitle] = useState('')
    const [descript, setDescirpt] = useState('')
    const [platform, setPlatform] = useState(Platform[0].name)
    const [imgSrc, setImgSrc] = useState(`https://via.placeholder.com/${imgWidth}x${imgHeight}`)

    const getTitle = (event) => {setTitle(event.target.value)}
    const getDesript = (event) => {setDescirpt(event.target.value)}
    const getPlatform = (event) => {setPlatform(event.target.value)}
    const getImgSrc = (event) => {setImgSrc(event.target.value)}


    return (
        <div className='background'>
            <div className='add-container'>
                <div className='img-box'>
                    <img src={imgSrc}></img>
                </div>
                <div className='form-box'>
                    <form>
                        <div>
                            <label>Title</label><br></br>
                            <input type={'text'} value={title} onChange={getTitle}></input>
                        </div>
                        <div>
                            <label>Descrption</label><br></br>
                            <textarea value={descript} onChange={getDesript}></textarea>
                        </div>
                        <div>
                            <label>Platform</label><br></br>
                            <select value={platform} onChange={getPlatform}>
                                {Platform.map( (data) => {
                                    return <option value={data.name}>{data.name}</option>
                                })}
                            </select>
                        </div>
                        <div>
                            <label>ImgSrc</label><br></br>
                            <input type={'text'} value={imgSrc} onChange={getImgSrc}></input>
                        </div>
                        <div>
                            <button onClick={addMovie}>Add Movie</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

} export default AddMoviePage;