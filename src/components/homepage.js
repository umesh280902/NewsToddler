import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Homepage(props) {
  const [News, setNews] = useState([]);
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)
  const totalPages=Math.ceil(totalResults/props.pageSize)
  useEffect(()=>{
    setPage(1)
  },[props.category])
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await axios.get(
          `https://newsapi.org/v2/${props.heading}?country=in&category=${props.category}&pageSize=${props.pageSize}&page=${page}&apiKey=${apiKey}`
        );            
        setTotalResults(details.data.totalResults)
        setNews(details.data.articles);
      } catch {
        console.log('Some error occurred');
      }
    };
    fetchData();
  }, [props.category,page]);
  const prevPageHandler=()=>{
    setPage((prevPage)=>prevPage-1)
    
  }
  const nextPageHandler=()=>{
    setPage((prevPage)=>prevPage+1)
    
  }
  return (
    <>
      <h1 className="heading" style={{ display: "flex", justifyContent: "center" }}>NewsToddler - Top {props.category.substring(0,1).toUpperCase()+props.category.substring(1,props.category.length)} News</h1>
      <div className='container'
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          justifyContent: "center",
          marginTop: "32px"
        }}>
        {News.length > 0 ? (
          News.map((news, newsIndex) => (
            <div key={newsIndex} style={{ border: "1px gray solid", display: "flex", alignItems: "center", flexFlow: "column", padding: "10px", borderRadius: "10px", backgroundColor: "lightgray",height:"auto",width:"auto" }}>
              <img src={news.urlToImage?news.urlToImage:"newsImage.webp"} alt="" style={{ width: "430px", height: "350px" }} />
              <div className="news-title" ><Link to={news.url} style={{color:"red",fontSize:"20px",textDecoration:"none"}}>{news.title}</Link></div>
              <div className="news-author" style={{fontWeight:"bold"}}>{news.author ? news.author : 'Unknown'}</div>
              <div className="news-content" style={{fontFamily:"sans-serif",fontSize:"20px"}}>{news.content?news.content.substring(0,100):""} read more</div>
              <div className="news-publishedAt">Published At: {news.publishedAt}.</div>
            </div>
          ))
        ) : (
          <div style={{display:"flex",justifyContent:"center"}}>Loading</div>
          )}
      </div>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
        <button type="button" disabled={page===1} className="btn btn-success" style={{marginLeft:"-100px",marginBottom:"10px"}} onClick={()=>{prevPageHandler()}}>Prev</button>
        <button type="button" disabled={page===totalPages} className="btn btn-success" style={{marginRight:"-100px",marginBottom:"10px"}} onClick={()=>{nextPageHandler()}}>Next</button>
      </div>
      <div style={{display:"flex",justifyContent:"flex-end",fontSize:"32px",marginRight:"-100px",fontStyle:"italic",color:"gray"}}>page {page} of {totalPages}</div>
    </>
  );
}
