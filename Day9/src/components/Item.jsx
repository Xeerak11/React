import React,{useState,useEffect} from 'react'


// async function getResponse(){
//     const api_key=await fetch("https://official-joke-api.appspot.com/random_joke");
//     const response=await api_key.json();
//     return response
// }



function Item(){
    const [Joke, setJoke] = useState(null)
 async function getResponse() {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    setJoke(data);
  }

  useEffect(() => {
      
    getResponse(); 
  }, []);

    return(
        <>
        <button onClick={()=>getResponse()}>Refresh quote </button>
                <div>{Joke && (
  <>
    <p>{Joke.setup}</p>
    <p>{Joke.punchline}</p>
  </>
)}</div>
        </>
    )
}

export default Item
