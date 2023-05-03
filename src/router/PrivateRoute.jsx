import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingData from '../components/LoadingData/LoadingData';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    let location = useLocation();

    if(loading){
        return <LoadingData />
    }

    if(user){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;