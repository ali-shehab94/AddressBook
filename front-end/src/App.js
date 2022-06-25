import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Homepage from './pages/Homepage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='/sign_up' element={<SignUp />} />
                <Route path='/homepage' element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
