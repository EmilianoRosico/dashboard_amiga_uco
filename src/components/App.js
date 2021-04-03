import React from 'react';
import SideBar from './SideBar'
import NavBar from './NavBar'
import MainContainer from './MainContainer'


import Footer from './Footer';

function App() {
    return (
        <>
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <NavBar />
                    <MainContainer />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default App;