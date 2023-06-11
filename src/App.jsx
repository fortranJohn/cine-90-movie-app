// import { useState } from 'react' 

import { useEffect } from 'react'
// import './App.css'
import { fetchDataFromAPI } from './utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration, getGenres } from './store/HomeSlice'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Details from './pages/details/details'
import SearchResult from './pages/searchResults/searchResult'
import Explore from './pages/explore/Explore'
import NotFound from './pages/404/404'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  const dispatch = useDispatch()
  const {url} = useSelector(state=>state.home)
  console.log(url)

  useEffect(() => {
    fetchApiConfig()
    genresCall()
  
    
  }, [])
  

  const fetchApiConfig = ()=>{
    fetchDataFromAPI("/configuration")
    .then(res=>{
      console.log(res)
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original"
      }
      dispatch(getApiConfiguration(url))
    })
  }

  const genresCall = async () =>{
    let promises = []
    let endpoints = ["tv", "movie"]
    let allGenres = {}

    endpoints.forEach(endpoint => {
      promises.push(fetchDataFromAPI(`/genre/${endpoint}/list`))
    });

    const data = await Promise.all(promises)
    console.log(data)
    data.map(({genres})=>{
     return genres.map(item=>(allGenres[item.id]= item))
    })

    // console.log(allGenres)
    dispatch(getGenres(allGenres))
  }

  return (
    
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/:mediaType/:id" element={<Details/>} />
      <Route path="/search/:query" element={<SearchResult/>} />
      <Route path="/explore/:mediaType" element={<Explore/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer/> 
    </BrowserRouter>
  )
}

export default App