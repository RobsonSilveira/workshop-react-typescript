import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate('/user');
        }}
      >
        Acessar
      </button>
    </div>
  );
};
