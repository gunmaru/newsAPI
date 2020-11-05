import React from 'react';
import styled from 'styled-components';

// const NewsItemBlock = styled.div`
//     display:flex;
//     .thimnail{
//         margin-right:1rem;
//         img{
//             display:block;
//             width: 160px;
//             height:100px;
//             object-fit: cover;
//         }

//     }

//     .contents{
//         h2{
//             margin: 0;
//             a{
//                 color: black;
//             }


//         }
//         p{
//             margin:0;
//             line-height:1.5rem;
//             margin-top: 0.5rem;
//             white-space: normal;


//         }
//     }

//     & + &{
//         margin-top 3rem;
//     }
// `;
const NewsItemBlock = styled.div`
    display:flex;
    .thumbnail{
        margin-right:1rem;
        img{
            display:block;
            width:160px;
            height:100px;
            object-fit :cover;

        }
    }
    .contents{
        h2{
            margin :0;
            a{
                    contents{
                        h2{
                            margin:0;
                            a{
                              
                                color:black
                            }

                        }
                    }
                    p{
                        margin:0;
                        line-height:1.5;
                        margin-top: 0.5rem;
                        white-space:normal;
                        
                        
                    }

            }
            & + &{
                margin-top:3rem;
            }
        }
    }

    contents2{
        p{
            margin:0;
            line-height:1.5;
            margin-top: 0rem;
            white-space:normal;
            
            
        }
    }

`;


const NewsItem = ({article, category})=>{
    const{title, description, url, urlToImage} = article;
    return(
        
            
      
        <NewsItemBlock>
            
        {urlToImage && (
                    
                <div className="thumbnail">
                    <a href={url} target ="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail"></img>
                    </a>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                    {title}
                    </a>
                </div>

        )}
        

        {/* <div className="contents">
            <h2>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            </h2>
            <p> */}
                {/* {description} */}
            {/* </p>
        </div> */}

        </NewsItemBlock>
     
      
    );

};
export default NewsItem;
