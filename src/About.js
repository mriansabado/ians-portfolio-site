import React from "react";
import Profile from './assets/profile-photo.jpg';

export default function About() {

    return (
        <>
            <div className="text-center">
                 <h1 className="text-4xl mt-5">About</h1>
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <img src={Profile} className="h-40"></img>
                </div>
                <div className="text-center">
                    <p>Im a Software Engineer</p>
                    <p>Based in the San Francisco Bay Area</p>
                </div>
            </div>
        </>
    )
}