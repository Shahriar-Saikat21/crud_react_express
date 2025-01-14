import {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const {auth} = useContext(AuthContext)
  console.log(`from private context ${auth}`) //Debugging line
  return auth ? children : <Navigate to="/" replace/>;
};

export default PrivateRoute;