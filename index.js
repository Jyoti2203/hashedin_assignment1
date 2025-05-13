import React,{useState} from'react';
const BrowserHistory=()=>{const[url,setUrl]=useState('');
const[history,setHistory]=useState([]);
MAX_HISTORY=1000; const N=5;
const visitUrl=(newUrl)=>{setHistory((prevHistory)=>{const filtered=prevHistory.filter((item)=>item!==newUrl);
    const updated=[newUrl,...filtered];
    return updated.slice(0,MAX_HISTORY);

});}  ;
const handleVisit=()=>{const trimmedUrl=url.trim();
    if(trimmedUrl){visitUrl(trimmedUrl);setUrl('');}};
    return(<div className="p-4 max-ww-mdmx-auto"><h2 className="text-xlfont-boldmb-4">Browwser History</h2>
    <div className="flex gap-2mb-4">
        <input 
         type="text"
         className="border p-2 rounded flex-grow"
         placeholder="Enter URL"
         value={url}
         onchange={(e)=>setUrl(e.target.value)}></input>
         <button onclick={handleVisit}
         className="bg-blue-500 text-whiltepx-4 py-2 rounded"></button>

    </div>
    <h3 className="text-lg font-semiboldmb-2">Most Recent{N}Unique Visits</h3>
    <ul className="list-disc pl-5">{history.slice(0,N).map((site,index)=>(
        <li key={index}>{site}</li>))}</ul>
    </div>);
};
export default BrowserHistory;
