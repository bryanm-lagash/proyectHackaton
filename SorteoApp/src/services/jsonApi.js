import { create } from 'apisauce';

const config = {
  baseURL: 'http://localhost:3000/'
};

const createApi = () => {
  const { get, post } = create(config);

  const setSorteo = data =>
    post('createDraw', data => {
      console.log(data);
    });

  const getCrear = data => post('crear', data);
  const getUsers = () => get('users');
  const getSorteo = () => get('getSorteo');
  const addUsers = data => post('users/add', data);
  const ganadores = data => post('ganadores', { nombre: data });
  const getQR = () => get('getQR');
  const getGanador = () => get('ganadores/set');

  return {
    setSorteo,
    getCrear,
    getUsers,
    getSorteo,
    addUsers,
    ganadores,
    getQR,
    getGanador
  };
};

export default createApi;
