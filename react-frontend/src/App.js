import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState('');
  const [name, setName] = useState('');
  const [helloResponse, setHelloResponse] = useState('');

  // For local development - use your API port
  const API_URL = 'http://localhost:5114';

  useEffect(() => {
    // Fetch test message
    fetch(`${API_URL}/api/test`)
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        setApiResponse(data.message);
      })
      .catch(error => {
        console.error('Error fetching API:', error);
        setApiResponse('Error connecting to API');
      });
  }, []);

  const handleSayHello = () => {
    if (name) {
      fetch(`${API_URL}/api/test/hello/${name}`)
        .then(response => response.json())
        .then(data => {
          console.log('Hello Response:', data);
          setHelloResponse(data.message);
        })
        .catch(error => {
          console.error('Error:', error);
          setHelloResponse('Error calling API');
        });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React + .NET Azure Deployment Lab</h1>
        <p>Status: Connected to API at {API_URL}</p>
        <h2>API Response:</h2>
        <p style={{ color: '#61dafb' }}>{apiResponse || 'Loading...'}</p>
        
        <div style={{ margin: '20px' }}>
          <input 
            type="text" 
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: '10px', marginRight: '10px' }}
          />
          <button 
            onClick={handleSayHello}
            style={{ padding: '10px 20px', cursor: 'pointer' }}
          >
            Say Hello
          </button>
        </div>
        
        {helloResponse && (
          <div style={{ 
            marginTop: '20px', 
            padding: '10px', 
            backgroundColor: '#282c34',
            borderRadius: '5px'
          }}>
            <h3>Response:</h3>
            <p>{helloResponse}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;