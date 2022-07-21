import React, { useEffect,useState } from 'react';
import axios from 'axios';

const FetchAPI = () =>{
    const [data,setData] =  useState([]);

    useEffect(()=>{
        axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&playlistId=UUzaxzm6jitB_qcVdwbG7ZFg&key=AIzaSyBifPFvIMIJyZbOi3NL4Nt4Du6ZD1PSs2s&maxResults=5')
            .then(res=>{
                console.log(res)
                const item = res.data.items;
                console.log(item)
                setData(item)
            })
            .then(err=>{
                console.log(err)
            })

    },[])


    return(
        <div>
            {data.map((item,key)=>(
                <div>
                    <li>{item.snippet.title}</li>
                    <img src={item.snippet.thumbnails.high.url}></img>
                    <a href={'https://www.youtube.com/watch?v='+item.contentDetails.videoId}>{key}</a>
                </div>
            ))}
         </div>
    )
};

export default FetchAPI