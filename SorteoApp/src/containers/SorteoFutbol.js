import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as firebase from 'firebase';

import { equiposFutbol, capitanesEquipos } from '../actions/sorteoFutbol';
import { useMount } from '../hooks/index';

const SorteoFutbol = () => {
  const { equipoA, equipoB, capitanes } = useSelector(
    ({ sorteoFutbol }) => sorteoFutbol
  );
  const dispatch = useDispatch();
  const jugadores = [
    { nombre: 'bryan' },
    { nombre: 'mathias' }
    // { nombre: 'andres' },
    // { nombre: 'maximiliano' }
    // { nombre: 'neko' },
    // { nombre: 'marco' },
    // { nombre: 'patricio' },
    // { nombre: 'pipo' },
    // { nombre: 'jeremy' },
    // { nombre: 'jimy' }
  ];

  useMount(async () => {
    firebase
      .database()
      .ref('users/add')
      .on('value', snap => {
        const response = snap.val();

        console.log(Object.values(response));

        if (response !== null) {
          // dispatch(equiposFutbol(Object.values(response)));
          dispatch(equiposFutbol(jugadores));
        }
      });
  });

  const handleData = j => {
    dispatch(capitanesEquipos(j));

    console.log('selector', capitanes);
  };

  return (
    <div>
      <h1>HOLA SORTEO FUTBOL</h1>
      <div>
        <h2>EQUIPO A</h2>
        <h3>Capitan: {capitanes.capitanA}</h3>
        {equipoA.map(({ nombre, id }) => (
          <div key={id}>
            <div>Nombre:{nombre}</div>
          </div>
        ))}
      </div>
      <div>
        <h2>EQUIPO B</h2>
        <h3>Capitan: {capitanes.capitanB}</h3>
        {equipoB.map(({ nombre, id }) => (
          <div key={id}>
            <div>Nombre:{nombre}</div>
          </div>
        ))}
      </div>
      <button onClick={() => handleData([{ equipoA }, { equipoB }])}>
        Escoger Capitanes
      </button>
    </div>
  );
};

export default SorteoFutbol;

// class SorteoFutbol extends Component {
//   state = {
//     jugadores: [
//       { nombre: 'bryan' },
//       { nombre: 'mathias' },
//       { nombre: 'andres' },
//       { nombre: 'maximiliano' },
//       { nombre: 'neko' },
//       { nombre: 'marco' },
//       { nombre: 'patricio' },
//       { nombre: 'pipo' },
//       { nombre: 'jeremy' },
//       { nombre: 'jimy' }
//     ]
//   };

//   render() {
//     const dispatch = useDispatch();
//     const { equipoA, equipoB } = useSelector(
//       ({ sorteoFutbol }) => sorteoFutbol
//     );
//     // this.componentDidMount()=>{
//     //   dispatch(equiposFutbol(this.state.jugadores))
//     // }

//     const handleData = j => {
//       dispatch(equiposFutbol(j));
//     };
//     const mapDispatchToProps=dispatch=>{
//       return{
//         calculoEquipo: dispatch(equipoA())
//       }
//     }

//     return (
//       <div>
//         <h1>HOLA SORTEO FUTBOL</h1>
//         <div>
//           <h2>EQUIPO A</h2>
//           {equipoA.map(({ nombre }) => (
//             <div>{nombre}</div>
//           ))}
//         </div>
//         <div>
//           <h2>EQUIPO B</h2>
//           {equipoB.map(({ nombre }) => (
//             <div>{nombre}</div>
//           ))}
//         </div>
//         <button onClick={handleData(this.state.jugadores)}>DATA</button>
//       </div>
//     );
//   }
// }

// export default SorteoFutbol;
