import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import LoadingData from '../components/LoadingData/LoadingData';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <LoadingData />
    }

    if(user){
        return children
    }
    return <Navigate to="/login" />
};

export default PrivateRoute;