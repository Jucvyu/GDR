import {  useEffect } from 'react';
import { AppRoutes } from './AppRoutes';
import { isTokenExpired } from './shared/utils/expToken';

function App() {
  useEffect(() => {
    const token = localStorage.getItem('token');
  
    if (token && isTokenExpired(token)) {
      localStorage.removeItem('token');
      alert('Sesión expirada, por favor, inicia sesión nuevamente');
      window.location.reload();
    }
  }, []);
  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
