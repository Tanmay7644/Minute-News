import React from 'react'

const Card = ({ data }) => {
    const readMore=(url)=>{
        console.log('Read More Clicked');
        window.open(url,'_blank');
    };
    if (!data) {
        return <p>Loading...</p>; // or any other placeholder content
    }
    console.log(data);
    return (
        <div className='cardContainer'>

            {data.map((currItem,index)=>{
                if(currItem.urlToImage==null){
                    return null;
                }
                else{
                    return (
                        <div className="card" key={index}>
                            <img src={currItem.urlToImage} alt="" />
                            <div className="content">
                                <a className='title' onClick={()=>readMore(currItem.url)}>{currItem.title}</a>
                                <p>{currItem.description}</p>
                                <button onClick={()=>readMore(currItem.url)}>Read More</button>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Card
