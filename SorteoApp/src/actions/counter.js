import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    listaUsuarios: ['index'],
    dropUsuariosCargados: ['index'],
    updateUser: ['index']
  },
  {
    prefix: 'COUNTER/'
  }
);

const { listaUsuarios, dropUsuariosCargados, updateUser } = Creators;

const { LISTA_USUARIOS, DROP_USUARIOS_CARGADOS, UPDATE_USER } = Types;

export {
  listaUsuarios,
  dropUsuariosCargados,
  updateUser,
  LISTA_USUARIOS,
  DROP_USUARIOS_CARGADOS,
  UPDATE_USER
};
