import React, { useState, useEffect } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from './firebase';


function App() {

  const[reels,setReels] = useState([]);

  useEffect(() => {
    //  App Component will run ONCE when it loads, and never again
    db.collection('reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc => doc.data()))
    )) 
  }, [])
  

  return (
    <div className="app">
      {/* <h1>One Day I will be Awesome 🚀</h1> */}

      <div className="app__top">


      {/* Image of instagram at top */}
      <img className="app__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="app_logo"/>

      {/* Reels Text */}
      <h1>Reels</h1>
      
      </div>

      <div className="app__videos">
        {/* {Container of App videos} */}
        {reels.map(({channel,avatarSrc,song,url,likes,shares})=>(
          <VideoCard 
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}

      </div>
    </div>
  )
}

export default App;
