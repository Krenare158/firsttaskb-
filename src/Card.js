// src/Card.js
import React from 'react';
import './Card.css';

const Card = ({ version, date, type, author, description, bgColor }) => {
    return (
        <div className="card">
            <div className="card-header">
                <span className="card-version">{version}</span>
                <span className="card-date">({date})</span>
            </div>
            <div className="card-author">
            <div className="card-type" style={{ backgroundColor: bgColor }}>
                {type}
            </div>
                <img src="https://www.bing.com/images/search?view=detailV2&ccid=abbHwUGf&id=A93DC3621A9DAE89C8E18E788E0A3DC534252E4E&thid=OIP.abbHwUGf7cWF1KrClYxa5AHaHa&mediaurl=https%3a%2f%2fstatic.vecteezy.com%2fsystem%2fresources%2fpreviews%2f011%2f490%2f381%2foriginal%2fhappy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.69b6c7c1419fedc585d4aac2958c5ae4%3frik%3dTi4lNMU9Co54jg%26pid%3dImgRaw%26r%3d0&exph=1920&expw=1920&q=animate+person&simid=608036691255122684&FORM=IRPRST&ck=6AE2426265230CE7F227BB6EB01187D5&selectedIndex=50&itb=0" alt="author" className="author-image" /> {}
                <span>{author}</span>
            </div>
            <div className="card-description">
                {description}
            </div>
            <button className="download-button">Download</button>
        </div>
    );
};

export default Card;
