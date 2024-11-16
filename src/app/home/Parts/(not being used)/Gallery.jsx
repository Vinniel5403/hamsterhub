'use client'
import { useState, useEffect, useRef } from 'react'
import './Gallery.css'

function Gallery() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const carouselRef = useRef(null); // Reference for the carousel container

  // Fetch Pokémon API and load 9 Pokémon at a time
  const fetchAPI = async (offset = 0, limit = 9) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setPokemonList(prevList => [...prevList, ...result.results]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch the initial set of 9 Pokémon when the component mounts
    fetchAPI(currentPage * 9);
  }, [currentPage]);

  // Handle "Next" click: move to the next 3 cards
  const handleNext = () => {
    setCurrentPage(prevPage => prevPage + 1);
    if (carouselRef.current) {
      // Scroll by the width of 3 cards (to the right)
      carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth / 3, behavior: 'smooth' });
    }
  };

  // Handle "Previous" click: move to the previous 3 cards
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(prevPage => prevPage - 1);
      if (carouselRef.current) {
        // Scroll by the width of 3 cards (to the left)
        carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth / 3, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="gallery">
      <div className="carousel-container">
        <div ref={carouselRef} className="carousel">
          {pokemonList.length > 0 ? (
            pokemonList.slice(currentPage * 3, (currentPage + 1) * 3).map((pokemon, index) => (
              <div key={index} className="card">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                  alt={pokemon.name}
                />
                <p>{pokemon.name}</p>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>

      <div className="controls">
        <button onClick={handlePrevious} disabled={currentPage === 0}>
          Previous
        </button>
        <button onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Gallery;
