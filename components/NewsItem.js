// import { getByTitle } from '@testing-library/react'
import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card" style={{ cursor: "pointer" }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span className="badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>
                        {source}
                    </span>
                </div>
                <img src={!imageUrl ? "https://images.hindustantimes.com/tech/img/2022/04/30/1600x900/IMG_4566_1621081496743_1651316180866.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-danger">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
