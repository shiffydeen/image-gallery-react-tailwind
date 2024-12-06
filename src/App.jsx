import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

const apiKey = '47471600-0bf16d18c610f6ec957fb93d6'


function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  const searchTerm = (text) => {
    setTerm(text)
  }

  const url = `https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`;

  const fetchPhotos = async () => {
    setIsLoading(true)
    const res = await fetch(url);
    const data = await res.json();
    setImages(data.hits);
    setIsLoading(false)
  }

  

  useEffect(() => {
    fetchPhotos()
  }, [term])
 
  
  if (isLoading) {
      return <h1 className="text-6xl text-center mx-auto mt-32">Loading....</h1>
    }
  

  return (
    <>
    
    <div className="container mx-auto">
      <ImageSearch searchTerm={searchTerm} />
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <ImageCard key={index} image={image}  />
        ))}
      </div>
    </div>
      
    </>
  )
}

export default App
