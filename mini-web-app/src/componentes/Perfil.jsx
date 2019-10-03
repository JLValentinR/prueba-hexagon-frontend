import React, { Component } from 'react';
import '../css/perfil.css';

import logo from '../img/logo.jpg';
import abajo from '../img/abajo.png';
import rayo from '../img/rayo.png';
import hamburguesa from '../img/hamburguesa.png';
import iconocerrar from '../img/cerrar.png';

class Perfil extends Component {
  constructor(props){
    super(props);

    this.handlerMostrar = this.handlerMostrar.bind(this);
    this.handlerCerrar = this.handlerCerrar.bind(this);
  }

  handlerMostrar(){
    this.props.onMostrar('{ "lateral": true }');
  }

  handlerCerrar(){
    this.props.onMostrar('{ "lateral": false }');
  }

  render(){
    const cerrar = (function (){
      if(this.props.onLateral){
        return (
          <a href="#?" className="row sinmargin" onClick={this.handlerCerrar}>
            <img src={iconocerrar} className="d-block d-sm-block d-md-block d-lg-none d-xl-none imgperfil" />
          </a>
        );
      }else{
        return (
          <a href="#?" className="row sinmargin" onClick={this.handlerMostrar}>
            <img src={hamburguesa} className="d-block d-sm-block d-md-block d-lg-none d-xl-none imgperfil" />
          </a>
        );
      }
    }).bind(this)();

    return (
      <div className="col-12 perfil sinpadding">
        <div className="float-left">
          {cerrar}
        </div>
        <div className="float-right">
          <div className="row sinmargin">
            <img src={rayo} className="imgperfil" />
            <img src={logo} className="imgperfil" />
            <div className="fondoadmin">
              <div>Jorge Uriel</div>
              <div>Admin</div>
            </div>
            <a href="#?"><img src={abajo} className="abajo" /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Perfil;
