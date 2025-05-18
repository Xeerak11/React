// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const [flag,setFlag]=useState(false)

//   return (
//     <>
//       <div>The count is {count}</div>
//       <button onClick={()=>{setCount(count + 1);setFlag(!flag);console.log("The value of count is: ",count);console.log/("The flag is: ",flag)}}>Update count</button>
      
//       {/* {console.log("The value of count is: ",count)}
//       {console.log("The flag is: ",flag)} */}

//     </>
//   )
// }

// export default App


//USE EFFECR HOOK
import { useState, useEffect,useRef } from 'react';

// function App() {
//   const [count, setCount] = useState(0);
//   const [flag, setFlag]   = useState(false);
//   const ref= useRef(0)

//   useEffect(() => {
//     ref.current=ref.current+1
//     console.log("Updated count:", count);
//     console.log("Updated flag:", flag);
//     alert("The value of ref is: "+ref.current)
//   }, [count, flag]);

//   return (
//     <div>
//       <div>The count is {count}</div>
//       <button onClick={() => {
//         setCount(c => c + 1);
//         setFlag(f => !f);
//       }}>
//         Update count
//       </button>
//     </div>
//   );
// }
// export default App
// import { useState, useEffect, useRef } from 'react';

export default function App() {
  // 1) ref for the textarea
  const textareaRef = useRef(null);

  // 2) state for the current draft and the list of saved notes
  const [draft, setDraft]     = useState('');
  const [history, setHistory] = useState([]);

  // 3) on mount, focus the textarea
  useEffect(() => {
    // TODO: focus textareaRef.current
    textareaRef.current?.focus()
  }, []); // ← empty deps = run once on mount

  // 4) when history changes, log + update document.title
  useEffect(() => {
    // TODO: console.log the last note
    // TODO: document.title = `Last note: ${…}`
    // console.log(history[-1])
    if (history.length === 0) return;
    const lastNote = history[history.length - 1];
    console.log('Saved note:', lastNote);
    document.title = `Last note: ${lastNote}`;

  }, [history]);

  // 5) handler to save current draft
  function saveNote() {
    // TODO: append draft to history, then clear draft
    // history.push(draft)
    // setHistory(history)
    setHistory(prev => [...prev, draft]);
    setDraft('');
    setDraft('')
    
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Magic Notes</h1>
      <textarea
        ref={textareaRef}
        value={draft}
        onChange={e => setDraft(e.target.value)}
        rows={4}
        cols={40}
        placeholder="Type your note here…"
      />
      <br />
      <button onClick={saveNote} disabled={!draft.trim()}>
        Save Note
      </button>

      <h2>History</h2>
      <ul>
        {history.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>
    </div>
  );
}
