

import React, { useEffect, useState } from 'react';
import './App.css'; // 🧹 Import your external CSS here

function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = () => {
    setLoading(true);
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => {
        setJoke(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching joke:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="container">
      <h1 className="title">😂 Random Joke Generator</h1>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        joke && (
          <div className="joke-box">
            <p className="setup">{joke.setup}</p>
            <p className="punchline">{joke.punchline}</p>
          </div>
        )
      )}

      <button onClick={fetchJoke} className="button">
        Get Another Joke
      </button>
    </div>
  );
}

export default App;

