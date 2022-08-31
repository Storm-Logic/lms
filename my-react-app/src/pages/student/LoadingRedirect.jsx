import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LoadingRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const redirectPath = searchParams.get('redirect') || '/';

    setTimeout(() => {
      navigate(redirectPath);
    }, 2000);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center text-xl">
      Processing your enrollment...
    </div>
  );
};

export default LoadingRedirect;
