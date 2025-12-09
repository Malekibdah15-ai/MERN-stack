import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(0)
  function tossCoin() {
      return Math.random() > 0.5 ? "heads" : "tails";
  }

  function fiveHeadsSync() {
      let headsCount = 0;

      let attempts = 0;
      while(headsCount < 5) {
          attempts++;
          let result = tossCoin();
          console.log(`${result} was flipped`);
          if(result === "heads") {
              headsCount++;
              console.log(headsCount, "batata");
              
              setCounter(headsCount)

              console.log(counter);
              

          } else {
              headsCount = 0;
              setCounter(0)

          }
      }
      return `It took ${attempts} tries to flip five "heads"`;
  }

useEffect(() => {
    console.log(fiveHeadsSync());
    console.log("This is run after the sync function completes");

    function fiveHeads() {
      return new Promise((resolve, reject) => {
        if (counter ==5) resolve("Finished!");
        else reject("Not yet");
      });
    }

    fiveHeads()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    console.log("When does this run now?");
  }, []);
  

  

  return (
    <>
      
    </>
  )
}

export default App
