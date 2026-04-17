import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({handleAddtoWatchList , handleRemoveFromWatchList , watchlist}) {
  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [loading, setLoading] = useState(false)

  const handlePrev = () => {
    if(pageNo > 1){
      setPageNo(pageNo-1)
    } 
  }

  const handleNext = () =>{
    setPageNo(pageNo+1)
  }
  useEffect(()=>{
    setLoading(true)
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=${pageNo}`)
   .then((res) => {
        const blockedIds = [7451, 1035259, 1391047 , 680 , 1506456 , 1314762 , 1109255]; 
        const filteredMovies = res.data.results.filter(
          (movie) => !blockedIds.includes(movie.id)
        );
        setMovies(filteredMovies);
      setPageNo(res.data.page)
      setLoading(false)
      
    })
  },[pageNo])


  return (
    <div className='p-5'>
      <div className='text-xl font-bold  text-center mb-5'>
        Trending Movies
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-[40vh]">
          <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
      <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4'>
    {movies.map((movieObj)=>{
      return < MovieCard  key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.title} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchlist={watchlist}/>
    })}
      </div>
      )}
        <Pagination page={pageNo} handlePrev={handlePrev} handleNext={handleNext} />

    </div>
  )
}

export default Movies
// https://api.themoviedb.org/3/movie/popular?api_key=46635892baa7d594b36c50e9b3160df4&language=en-US&page=1