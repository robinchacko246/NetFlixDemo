import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants'


function RowPost(props) {
    let {title,isSmall}=props;
    const [rowMovie,rowMovies]=useState([]);
    useEffect(() => {
          axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((res)=>
          {
              console.log("rws",res);
              rowMovies(res.data.results)
          })
    }, [])
    return (
       
        <div className="row">
            <h2>{title}</h2>
            <div className="posters">
                {
                    rowMovie.map((x)=>
                    {
                        return  <img className={isSmall ?"smallPoster":"poster" } src={imageUrl+x.backdrop_path} alt="" />
                          

                        
                    })
                }
               
            
            </div>
        </div>
    )
}

export default RowPost
