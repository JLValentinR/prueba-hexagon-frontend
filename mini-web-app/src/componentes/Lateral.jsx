import React, { Component } from 'react';
import '../css/lateral.css';

import logo from '../img/logo.jpg';
import home from '../img/home.png';
import agregar from '../img/agregar.png';
import buscar from '../img/buscar.png';
import tag from '../img/tag.png';
import ajustes from '../img/ajustes.png';
import atras from '../img/atras.png';

class Lateral extends Component {
  constructor(props){
    super(props);
    this.state = {
      lateral: false,
      estilolateral: "d-none d-sm-none d-md-none d-lg-block d-xl-block col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 lateral sinpadding",
      separacion: "row sinmargin separacion",
      width: 0,
      height: 0
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.onValidador == 1){
      if(this.props.onLateral){
        this.setState({
          lateral: false,
          estilolateral: "d-none d-sm-none d-md-none d-lg-block d-xl-block col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 lateral sinpadding",
          separacion: "row sinmargin separacion"
        });
      }else{
        this.setState({
          lateral: true,
          estilolateral: "d-sm-block d-md-block d-lg-block d-xl-block col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 lateralabsoluto sinpadding",
          separacion: "row sinmargin separacionmovil"
        });
      }
    }
  }

  componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
      let estilolateral = "";
      let separacion = "";
      if(window.innerWidth >= 1201){
        estilolateral = "d-none d-sm-none d-md-none d-lg-block d-xl-block col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 lateral sinpadding";
        separacion = "row sinmargin separacion";
      }if(window.innerWidth >= 992 && window.innerWidth <= 1200){
        estilolateral = "d-none d-sm-none d-md-none d-lg-block d-xl-block col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 lateral sinpadding";
        separacion = "row sinmargin separacion";
      }if(window.innerWidth >= 768 && window.innerWidth <= 991){
        if(this.state.lateral){
          estilolateral = "d-sm-block d-md-block d-lg-block d-xl-block col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 lateralabsoluto sinpadding";
          separacion = "row sinmargin separacionmovil";
        }else{
          estilolateral = "d-none d-sm-none d-md-none d-lg-block d-xl-block col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 lateral sinpadding";
          separacion = "row sinmargin separacion";
        }
      }if(window.innerWidth >= 0 && window.innerWidth <= 767){
        if(this.state.lateral){
          estilolateral = "d-sm-block d-md-block d-lg-block d-xl-block col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 lateralabsoluto sinpadding";
          separacion = "row sinmargin separacionmovil";
        }else{
          estilolateral = "d-none d-sm-none d-md-none d-lg-block d-xl-block col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 lateral sinpadding";
          separacion = "row sinmargin separacion";
        }
      }

      this.setState({ width: window.innerWidth, height: window.innerHeight, estilolateral: estilolateral, separacion: separacion });
  }

  render(){
    let tamano = { width: '25px', height: '25px', background: '#FFFFFF', borderRadius: '50%' };
    let iatras = { width: '40px', height: '40px'};
    return (
      <div className={this.state.estilolateral}>
        <div className="lateralopaco"></div>
        <div className="row sinmargin">
          <div className="col-12 d-flex justify-content-center">
            <img src={logo} className="mt-3 logo" />
          </div>

          <div className="col-12 sinpadding">
            <div className="row sinmargin mt-3">
              <ul className="ul">
                <li className="li"><div className="row align-items-center sinmargin" style={{ height: '60px' }}><a href="#?" className="col-12 sinpadding" style={{ color: '#FFFFFF', textDecoration: 'none' }}><img src={home} style={tamano} />&nbsp;&nbsp;El Camino S.A de C.V</a></div></li>
                <li className="li"><div className="row align-items-center sinmargin" style={{ height: '60px' }}><a href="#?" className="col-12 sinpadding" style={{ color: '#FFFFFF', textDecoration: 'none' }}><img src={agregar} style={tamano} />&nbsp;&nbsp; Crear Segmento</a></div></li>
                <li className="li"><div className="row align-items-center sinmargin" style={{ height: '60px' }}><a href="#?" className="col-12 sinpadding" style={{ color: '#FFFFFF', textDecoration: 'none' }}><img src={buscar} style={tamano} />&nbsp;&nbsp; Listado de Segmentos</a></div></li>
                <li className="li"><div className="row align-items-center sinmargin" style={{ height: '60px' }}><a href="#?" className="col-12 sinpadding" style={{ color: '#FFFFFF', textDecoration: 'none' }}><img src={tag} style={tamano} />&nbsp;&nbsp;Nuevo Tag</a></div></li>
                <li className="li"><div className="row align-items-center sinmargin" style={{ height: '60px' }}><a href="#?" className="col-12 sinpadding" style={{ color: '#FFFFFF', textDecoration: 'none' }}><img src={ajustes} style={tamano} />&nbsp;&nbsp;Configurar Destino</a></div></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={this.state.separacion}></div>
        <div className="row sinmargin">
          <div className="col-12 alignright pr-2">
            <a href="#?" style={{ color: "#FFFFFF" }}><h5>Ayuda</h5></a>
          </div>
          <div className="lineainferios mt-4 mb-2 ml-4 mr-4"></div>
          <div className="col-12 alignright pr-2 mb-2">
            <img src={atras} style={iatras} />
          </div>
        </div>
      </div>
    );
  }
}

export default Lateral;
