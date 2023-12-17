import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Header from './Components/Header';
import LoginPage from './Components/Auth/LoginPage';
import { SignInContext } from './context/SignInContext';

function App() {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <SignInContext.Provider value={{ isLogged, setIsLogged }}>
            <Router>
            <Header />
                <Routes>
                    <Route path="/Login" Component={() => <LoginPage />} />
                </Routes>
            </Router>
        </SignInContext.Provider>
    );
}

export default App;
