import React, { Component } from 'react';
import '../css/proceso.css';

import ficono2 from '../img/ficono2.png';
import ver from '../img/ver.jpg';
import opciones from '../img/opciones.png';

import Perfil from './Perfil';
import Favoritos from './Favoritos';

const { procesos } = { "procesos": [] };

function fecha(params){
  if (params < 10) {
    params = '0' + params;
  }
  return params;
}

class Proceso extends Component {
  constructor(props){
    super(props);

    this.state = {
      procesos
    }

    this.handlerMostrar = this.handlerMostrar.bind(this);
  }

  handlerMostrar(count){
    this.props.onMostrar(count);
  }

  componentWillReceiveProps(props){
    console.log(props.onProceso);
    this.setState({
      procesos: [...props.onProceso]
    });
  }

  render(){
    let tamano = { width: '25px', height: '25px', background: '#FFFFFF', borderRadius: '50%' };

    const procesos = this.state.procesos.map((proceso, i) => {
      const fsubida = new Date(proceso.subida);
      const fmodificacion = new Date(proceso.modificacion);

      return (
        <div className="row align-items-center marginshadow sinmargin" key={i}>
          <a href="#?" className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 sinpadding"><img src={ficono2} style={tamano} /></a>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 sinpadding">
            <div className="row sinmargin">
              <div className="col-12 nombrefavorito sinpadding" style={{ fontSize: '0.9em' }}>{proceso.nombre}</div>
              <div className="col-12 nombrefavorito sinpadding">{proceso.descripcion}</div>
            </div>
          </div>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 sinpadding">{proceso.matchs}%</div>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 sinpadding">{fecha(fsubida.getFullYear()) + '/' + fecha(fsubida.getMonth()+1) + '/' + fecha(fsubida.getDate())}</div>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 sinpadding">{fecha(fmodificacion.getFullYear()) + '/' + fecha(fmodificacion.getMonth()+1) + '/' + fecha(fmodificacion.getDate())}</div>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 sinpadding">
            <div className="row sinmargin">
              <a href="#?" className="mr-2"><img src={ver} style={tamano} /></a>
              <a href="#?"><img src={opciones} style={tamano} /></a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="margin25" style={{ display: this.props.onStyle }}>
        {procesos}
      </div>
    );
  }
}

export default Proceso;
