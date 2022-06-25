import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='/homepage' element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
