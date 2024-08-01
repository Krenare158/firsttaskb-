// src/App.js
import React from 'react';
import Card from './Card';
import './App.css';

function App() {
    const cardsData = [
        {
            version: "3.3.0",
            date: "14/05/2018",
            type: "New",
            author: "Kevin Joe",
            description: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Shar permissions re-design and optimization",
            bgColor: "#28a745",
        },
        {
            version: "3.1.0",
            date: "20/05/2015",
            type: "Fix",
            author: "Kevin Joe",
            description: "Introducing Host Cloud Drive - virtual drive functionality New Share options and managment New,more user friendly design Sync optimizations Various performance improvements and bug fixes",
            bgColor: "#007bff",
        },
        {
            version: "3.1.0",
            date: "20/05/2015",
            type: "Improvement",
            author: "Kevin Joe",
            description: "Added Settings for Auto Start, Added Update Notification Speed Optimization Bug Fixes",
            bgColor: "#d63384",
        },
        {
            version: "3.3.1",
            date: "18/06/2019",
            type: "Update",
            author: "Kevin Joe",
            description: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Shar permissions re-design and optimization",
            bgColor: "#ff5733",
        },
        {
            version: "3.2.0",
            date: "10/08/2016",
            type: "Bug Fix",
            author: "Kevin Joe",
            description: "Introducing Host Cloud Drive - virtual drive functionality New Share options and managment New,more user friendly design Sync optimizations Various performance improvements and bug fixes",
            bgColor: "#ffc107",
        },
        {
            version: "3.0.0",
            date: "15/02/2014",
            type: "Release",
            author: "Kevin Joe",
            description: "Added Settings for Auto Start, Added Update Notification Speed Optimization Bug Fixes",
            bgColor: "#6f42c1",
        },
    ];

    return (
        <div className="App">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    version={card.version}
                    date={card.date}
                    type={card.type}
                    author={card.author}
                    description={card.description}
                    bgColor={card.bgColor}
                />
            ))}
        </div>
    );
}

export default App;
