import { useEffect, useState } from 'react';
import './App.css';
import { ImageCard } from './ImageCard';
import SearchIcon from './search.svg';


const accessKey = process.env.REACT_API_KEY;

const App = () => {
    const API_URL = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=12`;

    const [searchTerm, setSearchTerm] = useState("");
    const [images, setImages] = useState([]);

    useEffect(() => {
        searchInspo('african american hair');
    }, []);

    const searchInspo = async (term) => {
        const response = await fetch(`${API_URL}&query=${term}`);
        const res = await response.json();

        console.log(res);

        setImages(res);
    }

    return (
        <div className="app">
            <h1>Image Galleria</h1>
            <div className="search">
                <input
                    placeholder="Search for inspiration"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='Search'
                    onClick={() => searchInspo(searchTerm)}
                />
            </div>
            <div className="container">
                {images?.map( (image) => (
                    <ImageCard url={image.urls.regular} location={image.location.title} key1={image.id}  />
                ))}
            </div>
        </div>
        
    )
}

export default App;