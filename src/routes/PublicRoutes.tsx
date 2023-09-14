import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import About from '../pages/About'
import Donation from '../pages/Donation'
import Contact from '../pages/contact'
import Investors from '../pages/investors'
import FreeComponent from '../components/FreeComponent'


export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/free" element={<FreeComponent />} />                    
            <Route path='/contact' element={<Contact />} />
            <Route path='/investors' element={<Investors />} />
            <Route path='/about' element={<About />} />
            <Route path='/fundings' element={<Donation />} />
            <Route path='*' element={<Navigate to='/404' replace />} />
        </Routes>
    );
};