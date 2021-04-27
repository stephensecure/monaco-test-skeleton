import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import ShowStories from './components/ShowStories';

function App() {

  // const [newsList, setNewsList] = useState([])

  useEffect(() => {
    // const getTopStories = async() => {
    //   await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    //     .then((response) => {
    //       console.log(response);
    //     })
    // }
    // getTopStories()
  }, [])


  return (
    <div className="my-10 mx-20">
      <div className="bg-primary p-3">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Hacker News</h3>
          <Header></Header>
        </div>
      </div>
      <div className="bg-secondary py-3 px-2">
        <ShowStories />
      </div>
    </div>
  );
}

export default App;
