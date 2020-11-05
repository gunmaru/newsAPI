

import React,    {useState, useEffect} from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/UsePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom : 3rem;
    display:flex;
    width:100px;
    margin-top: 2rem;
    @media screen and (max-width:100px){
        width: 100%;
        padding-left:1rem;
        padding-right: 1rem;
    }
`;

const NewsListTitle = styled.div`
font-size:1.125rem;
cursor: pointer;
white-space: pre;
text-decoration :none;
color: red;
padding-bottom: 0.25rem;

`;


const NewsList =({category}) =>{



    // const [articles, setArticles] = useState(null);
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     const fetchData = async() => {
    //         setLoading(true);
    //          try{
    //              const query = category ==='all'? '' : `&category=${category}`
    //             const response = await axios.get(
    //                 `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e8714096a4d342c08712be76cf9833c6`
    //                 ,);
    //             setArticles(response.data.articles); //

    //          }
    //          catch(e){
    //              console.log(e);
    //          }
    //          setLoading(false);
    //     };
    //     fetchData();

    // },[category]);

    const[loading, response, error] = usePromise(()=>{
        const query = category ==='all' ? '' :`&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e8714096a4d342c08712be76cf9833c6`
            ,
        );
    }, [category])



    if(loading){
        return<NewsListBlock>대기중..</NewsListBlock>
    }
    
    if(!response)
    {
        return null;
    }

    if(error)
    {
        return <NewsListBlock></NewsListBlock>
    }

    const {articles} =response.data;
    

    return(
        <>
          <div className="NewsListTitle">
                {category}
          </div>
       <NewsListBlock>
           
        {articles.map(article =>(
          
                    <NewsItem key={article.url} article ={article} category={category}></NewsItem>
                             

        ))}

         
       </NewsListBlock>
       </>
    );
};

export default NewsList;