import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Homepage from './pages/Homepage';
import AddContacts from './pages/AddContacts';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='/sign_up' element={<SignUp />} />
                <Route path='/homepage' element={<Homepage />} />
                <Route path='/add_contacts' element={<AddContacts />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
