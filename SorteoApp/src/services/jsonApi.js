import { create } from 'apisauce';

const config = {
  // baseURL: 'http://localhost:3000/'
  baseURL: 'https://app-sorteo.firebaseio.com/'
};

const createApi = () => {
  const { get, post } = create(config);

  const setSorteo = data =>
    post('createDraw', data => {
      console.log(data);
    });

  const crearSorteo = data => post('sorteo.json', data);
  const getUsers = () => get('users.json');
  const getSorteo = () => get('sorteo.json');
  const addUsers = data => post('users/add.json', data);
  const ganadores = data => post('ganadores.json', data);
  const ganadorSet = data => post('ganador.json', data);

  const getQR = () => get('getQR.json');
  const getGanador = () => get('ganadores/set.json');

  return {
    setSorteo,
    crearSorteo,
    getUsers,
    getSorteo,
    addUsers,
    ganadores,
    getQR,
    getGanador,
    ganadorSet
  };
};

export default createApi;
