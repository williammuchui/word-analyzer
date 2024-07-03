import {useState} from 'react';

export default function App(){
    const [charCount, setCharCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);

    function handleChange(event:any):void{
        const content = event.target.value;
        const words:string[] = content.split(" ");
        const chars:string[] = content.split("");
        setCharCount((prev)=>chars.length);
        setWordCount((prev)=>words.length);
}
    return (<>
            <h1>Welcome</h1>
            <h2>Type Some Text in the Text Area</h2><br/>
            <textarea type="text" onChange={handleChange} id="textAreaId"></textarea><br/>
            <span>Character Count: {charCount}</span><br/>
            <span>Word Count: {wordCount}</span><br/>
</>);
}
