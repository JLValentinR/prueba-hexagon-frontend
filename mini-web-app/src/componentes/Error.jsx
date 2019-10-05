import React, { Component } from 'react';
import '../css/error.css';

import ficono3 from '../img/ficono3.png';
import ver from '../img/ver.jpg';
import opciones from '../img/opciones.png';

const { errores } = { "errores": [] };

let x = 1;

function fecha(params){
  if (params < 10) {
    params = '0' + params;
  }
  return params;
}

function _xuma(a){ return document.getElementById(a); }

class Error extends Component {
  constructor(props){
    super(props);

    this.state = {
      errores,
      paginacion: 0,
      menor: 0,
      limite: 5
    }

    this.handlerMostrar = this.handlerMostrar.bind(this);
  }

  handlerMostrar(count){
    this.props.onMostrar(count);
  }

  componentWillReceiveProps(props){
    this.setState({
      errores: [...props.onError],
      paginacion: Math.trunc(props.onError.length / 5),
      menor: 0,
      limite: 5
    });
  }

  handlerLimite(a){
    this.setState({
      menor: ((a * 5) - 5),
      limite: a * 5
    });
  }

  render(){
    let tamano = { width: '25px', height: '25px', background: '#FFFFFF', borderRadius: '50%' };

    const drawHpBar=function(hp){
      let incre = 0;
      let result = [];

      if((this.state.paginacion * 5) == this.state.errores.length){
        incre = this.state.paginacion;
      }else{
        incre = this.state.paginacion + 1;
      }

      for(x = 1; x <= incre; x ++){
        result.push(<a href='#segmentos' className='pag' onClick={this.handlerLimite.bind(this, x)} key={x}>{x}</a>);
      }

      return result;
    }.bind(this)();

    const errores = this.state.errores.map((error, i) => {
      const fsubida = new Date(error.subida);
      const fmodificacion = new Date(error.modificacion);

      if(i >= this.state.menor && i < this.state.limite){
        return (
          <div className="row align-items-center marginshadow sinmargin" key={i}>
            <a href="#?" className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 sinpadding"><img src={ficono3} style={tamano} /></a>
            <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 sinpadding">
              <div className="row sinmargin">
                <div className="col-12 nombrefavorito sinpadding" style={{ fontSize: '0.9em' }}>{error.nombre}</div>
                <div className="col-12 nombrefavorito sinpadding">{error.descripcion}</div>
              </div>
            </div>
            <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 sinpadding">{error.matchs}%</div>
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
      }
    });

    return (
      <div className="margin25" style={{ display: this.props.onStyle }}>
        {errores}
        <div className="row sinmargin">{drawHpBar}</div>
      </div>
    );
  }
}

export default Error;

