import { useEffect, useState } from 'react';

function randomSzam(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const App = () => {
  const [count, setCount] = useState(0);
  const [megy, setMegy] = useState(false); 
  const [van, setVan] = useState(true); 
  const [rnd, setRnd] = useState(randomSzam(1, 2));


  useEffect(() => {
    if (van) {
      const hideTimeout = setTimeout(() => {
        setVan(false);
        setMegy(true); 
      }, rnd * 1000); 

      return () => clearTimeout(hideTimeout);
    }
  }, [van, rnd]);


  useEffect(() => {
    if (megy) {
      const id = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1);

      return () => {
        clearInterval(id);
      };
    }
  }, [megy]);

  return (
    <div>

      {van && (
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'red',
            marginBottom: '20px',
          }}
        >
          
        </div>
      )}
      

      <div id='ok' onClick={() => setMegy(!megy)}>
        {count + "ms"}
      </div>
    </div>
  );
};

export default App;