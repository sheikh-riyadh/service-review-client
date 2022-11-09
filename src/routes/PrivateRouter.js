import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRouter = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <h1 className='text-center text-xl'>Loading...</h1>
    } else if (!user?.uid) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    else return children
};

export default PrivateRouter;