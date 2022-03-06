import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import DescriptionM from './components/DescriptionM';
import {v4 as uuidv4} from 'uuid';
import  Add from './components/Add';
import { Route, Routes } from 'react-router-dom';


function App() {

    const [movies,setMovies] = useState (
      [
       {
           id :uuidv4(),
           title : 'Spider-Man: No Way Home' ,
           posterURL : 'https://image.tmdb.org/t/p/w185/sDYuyvhY0FUGs0MIHGKE6H8ETJZ.jpg',
           description :'Pour la première fois dans l’histoire cinématographique de Spider-Man, l’identité du héros sympa du quartier est révélée, et ses responsabilités de super héros entrent en conflit avec sa vie privée, mettant ainsi en danger ses proches.',
           rate : 4,
           trailer:"https://www.youtube.com/embed/rt-2cxAiPJk"
           },
       
       {
           id :uuidv4(),
           title : 'Venom 2 : Let There Be Carnage' ,
           posterURL : 'https://image.tmdb.org/t/p/w185/hDfk9MgZeJvR79KeapPuOgNDl27.jpg',
           description :'Environ un an après avoir affronté Riot, Eddie Brock « cohabite » toujours avec le symbiote Venom. Alors qu’il tente de relancer sa carrière de journaliste d’investigation, Eddie se rend en prison pour interviewer le tueur en série Cletus Kasady.',
           rate : 3, 
           trailer:"https://www.youtube.com/embed/-FmWuCgJmxo"
        },
   
        {
           id :uuidv4(),
           title : 'Dune' ,
           posterURL : 'https://image.tmdb.org/t/p/w185/qpyaW4xUPeIiYA5ckg5zAZFHvsb.jpg',
           description :'En l’an 10191, la substance la plus importante est l’Épice. Elle ne se trouve que sur une seule planète, Arakis, connue aussi sous le nom de Dune. La famille Atréide vient à gouverner cette planète mais son ennemi, la dynastie des Harkonnen lui tend un piège dès son arrivée. ',
           rate : 3,
           trailer:"https://www.youtube.com/embed/n9xhJrPXop4"
         },
    
         {
          id :uuidv4(),
          title : 'Wrath of Man' ,
          posterURL: 'https://image.tmdb.org/t/p/w185/u1xYjmCpDqgUfLlSgq8HlHtVVor.jpg',
          description :"Un convoyeur de fond, fraîchement engagé, surprend ses collègues par l’incroyable précision de ses tirs de riposte, alors qu’ils subissent les assauts de braqueurs expérimentés. Tous se demandent désormais qui il est, d’où il vient et pourquoi il est là.",
          rate : 2,
          trailer:"https://www.youtube.com/embed/EFYEni2gsK0"
        },
        {
          id :uuidv4(),
          title : 'Mort sur le Nil ' ,
          posterURL: 'https://image.tmdb.org/t/p/w185/1SCXv1VhMdvIwPZGFrV5qSrnC73.jpg',
          description :"Au cours d’une luxueuse croisière sur le Nil, Hercule Poirot voit ses vacances en Egypte se transformer en chasse au meurtrier lorsqu’une idyllique lune de miel est brutalement interrompue par une série de morts violentes. Sur fond de paysages grandioses mais dans une atmosphère inquiétante empreinte de dangers, cette sombre affaire d’amour obsessionnel aux conséquences meurtrières déstabilisera les certitudes de chacun...",
          rate : 3 ,
          trailer:"https://www.youtube.com/embed/dZRqB0JLizw"
        }
       ])

      //  Adding movie function:

      const handleAdd = (newAdd) => {
      return (
        setMovies([...movies,newAdd])
      )
      }
  /* filter search*/
    const [search,setSearch] = useState("")
    const [searchRate,setSearchRate] = useState(0)
  return (
    <div className="App">
     <NavBar/>
      <header>

       <Filter setSearch={setSearch} setSearchRate={setSearchRate} search={search} searchRate={searchRate}/>
       <Add handleAdd = {handleAdd}/>

      </header>
      <br/>
      <br/>
      <Routes>
        
      <Route path='/' element={<MovieList movies = {movies} search={search} searchRate={searchRate}/>}/>
      <Route path='/Movies/:description' element={<DescriptionM movies = {movies}/>}/>
    
     </Routes>
    </div>
  );
}

export default App;
