import { Navigate, Route, Routes } from 'react-router-dom';
import User from '../pages/Dashboard/user'
import Admin from '../pages/Dashboard/admin'
import ProjectDetails from '../pages/projectDetails'
import CreateProject from '../pages/createProject'
import About from '../pages/About'
import Donation from '../pages/Donation'
import Contact from '../pages/contact'
import Investors from '../pages/investors'
import FreeComponent from '../components/FreeComponent'

export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/free" element={<FreeComponent />} />                    
            <Route path='/contact' element={<Contact />} />
            <Route path='/investors' element={<Investors />} />
            <Route path='/about' element={<About />} />
            <Route path='/fundings' element={<Donation />} />
            <Route path='/user' element={<User />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/create-project' element={<CreateProject />} />
            <Route path='/donate/:Id' element={<ProjectDetails />} />
            <Route path='/login' element={<Navigate to='/' replace />}/>
            <Route path='/register' element={<Navigate to='/' replace />}/>
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    );
};