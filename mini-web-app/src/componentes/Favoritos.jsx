import React, { Component } from 'react';
import '../css/favoritos.css';

import ficono2 from '../img/ficono2.png';
import ver from '../img/ver.jpg';
import opciones from '../img/opciones.png';
import Perfil from './Perfil';

class Favoritos extends Component {
  constructor(props){
    super(props);

    this.handlerMostrar = this.handlerMostrar.bind(this);
  }

  handlerMostrar(count){
    this.props.onMostrar(count);
  }

  render(){
    let tamano = { width: '25px', height: '25px', background: '#FFFFFF', borderRadius: '50%' };

    return (
      <div className="margin25">
        <div className="row align-items-center sinmargin" style={{ margin: '10px 0px 10px 0px', padding: '10px', fontSize: '0.8em', boxShadow: '0 0 0 3px #ddd, 0 1px 1px 0px #777'}}>
          <a href="#?" className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 sinpadding"><img src={ficono2} style={tamano} /></a>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 sinpadding">
            <div className="row sinmargin">
              <div className="col-12 nombrefavorito sinpadding" style={{ fontSize: '0.9em' }}>NombreArchivo_Prueba_DFYG...</div>
              <div className="col-12 nombrefavorito sinpadding">Descripción del archivo de prueba 27hbf</div>
            </div>
          </div>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 sinpadding">210.5%</div>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 sinpadding">03/08/2019</div>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 sinpadding">03/08/2019</div>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 sinpadding">
            <div className="row align-items-center sinmargin">
              <div className="puntoverde mr-1"></div>Completado
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
        <div className="row align-items-center sinmargin" style={{ margin: '10px 0px 10px 0px', padding: '10px', fontSize: '0.8em', boxShadow: '0 0 0 3px #ddd, 0 1px 1px 0px #777'}}>
          <a href="#?" className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 sinpadding"><img src={ficono2} style={tamano} /></a>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 sinpadding">
            <div className="row sinmargin">
              <div className="col-12 nombrefavorito sinpadding" style={{ fontSize: '0.9em' }}>NombreArchivo_Prueba_DFYG...</div>
              <div className="col-12 nombrefavorito sinpadding">Descripción del archivo de prueba 27hbf</div>
            </div>
          </div>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 sinpadding">210.5%</div>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 sinpadding">03/08/2019</div>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 sinpadding">03/08/2019</div>
          <div className="d-sm-block d-md-block d-lg-none d-xl-none col-12 col-sm-12 col-md-12 separadorinferior"></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 sinpadding">
            <div className="row align-items-center sinmargin">
              <div className="puntoverde mr-1"></div>Completado
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
      </div>
    );
  }
}

export default Favoritos;
