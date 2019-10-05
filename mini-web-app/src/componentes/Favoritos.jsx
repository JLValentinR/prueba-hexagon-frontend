import React, { Component } from 'react';
import '../css/favoritos.css';

import ficono2 from '../img/ficono2.png';
import ver from '../img/ver.jpg';
import opciones from '../img/opciones.png';
import Perfil from './Perfil';

const { favoritos } = { "favoritos": [] };

function fecha(params){
  if (params < 10) {
    params = '0' + params;
  }
  return params;
}

class Favoritos extends Component {
  constructor(props){
    super(props);

    this.state = {
      favoritos
    }

    this.handlerMostrar = this.handlerMostrar.bind(this);
  }

  handlerMostrar(count){
    this.props.onMostrar(count);
  }

  componentWillReceiveProps(props){
    this.setState({
      favoritos: [...props.onFavoritos]
    });
  }

  render(){
    let tamano = { width: '25px', height: '25px', background: '#FFFFFF', borderRadius: '50%' };

    const favoritos = this.state.favoritos.map((favorito, i) => {
      const fsubida = new Date(favorito.subida);
      const fmodificacion = new Date(favorito.modificacion);
      let tipo = "", color = "";

      if(favorito.tipo == 1){
        tipo = 'Completado';
        color = "puntoverde mr-1";
      }else if(favorito.tipo == 2){
        tipo = 'Proceso';
        color = "puntonaranja mr-1";
      }else if(favorito.tipo == 3){
        tipo = 'Error';
        color = "puntorojo mr-1";
      }

      return (
        <div className="row align-items-center sinmargin" style={{ margin: '10px 0px 10px 0px', padding: '10px', fontSize: '0.8em', boxShadow: '0 0 0 3px #ddd, 0 1px 1px 0px #777'}} key={i}>
          <a href="#?" className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 sinpadding"><img src={ficono2} style={tamano} /></a>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 sinpadding">
            <div className="row sinmargin">
              <div className="col-12 nombrefavorito sinpadding" style={{ fontSize: '0.9em' }}>{favorito.nombre}</div>
              <div className="col-12 nombrefavorito sinpadding">{favorito.descripcion}</div>
            </div>
          </div>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 sinpadding">{favorito.matchs}%</div>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 sinpadding">{fecha(fsubida.getFullYear()) + '/' + fecha(fsubida.getMonth()+1) + '/' + fecha(fsubida.getDate())}</div>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 sinpadding">{fecha(fmodificacion.getFullYear()) + '/' + fecha(fmodificacion.getMonth()+1) + '/' + fecha(fmodificacion.getDate())}</div>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 sinpadding">
            <div className="row align-items-center sinmargin">
              <div className={color}></div>{tipo}
            </div>
          </div>
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
      <div className="margin25">
        {favoritos}
      </div>
    );
  }
}

export default Favoritos;
