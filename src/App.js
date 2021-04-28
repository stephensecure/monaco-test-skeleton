import React from 'react';
import Header from './components/Header'
import ShowStories from './components/ShowStories';

function App() {

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
