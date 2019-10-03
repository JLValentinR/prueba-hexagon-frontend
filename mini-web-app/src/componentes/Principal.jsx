import React, { Component } from 'react';
import '../css/principal.css';

import Lateral from './Lateral';
import Contenedor from './Contenedor';

class Principal extends Component {
  constructor(props){
    super(props);
    this.state = {
      lateral: false
    }

    this.handlerMostrar = this.handlerMostrar.bind(this);
  }

  handlerMostrar(count){
    let parsejson = JSON.parse(count);
    this.setState({
      lateral: parsejson.lateral
    });
  }

  render(){
    return (
      <div className="container-fluid principal">
        <div className="row">
          <Lateral onLateral={this.state.lateral} />
          <Contenedor onMostrar={this.handlerMostrar} onLateral={this.state.lateral} />
        </div>
      </div>
    );
  }
}

export default Principal;
