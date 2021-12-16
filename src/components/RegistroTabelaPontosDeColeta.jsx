import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

import '../css/RegistroTabelaPontosDeColeta.css';
import LocalizacaoService from '../services/LocalizacaoService';

class RegistroTabelaPontosDeColeta extends Component {

    constructor(props){
        super(props);
        this.state = { localizacaoService : new LocalizacaoService() , cidade : "", estado : ""};
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    componentDidMount(){
        this.state.localizacaoService.getEstadoById(this.props.pontoColeta.idEstado).then(estado => {
            this.setState({estado: estado.nome});
        });
        this.state.localizacaoService.getCidadeById(this.props.pontoColeta.idCidade).then(cidade => {
            this.setState({cidade: cidade.nome});
        });
    }

    handleOnChange(event){
        this.props.setPontoColetaSelecionado(this.props.pontoColeta.id, event.target.checked);
    }

    render() {
        return (
        <div id="registry">
            {(this.props.selectMode) ? 
                <>
                    <div style={{width: "10%", height: "2em", float: "left", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Form.Check
                            active
                            type={'checkbox'}
                            id={'selecionado'}
                            defaultChecked={this.props.pontoColeta.pontoSelecionado}
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <div className="vertical-line-registry"></div>
                </>
                : null
            }
            <p className="column-registry" style={{width: "24%"}}>{this.props.pontoColeta.rua}</p>
            <div className="vertical-line-registry"></div>
            <p className="column-registry" style={{width: "5%"}}>{this.props.pontoColeta.numero}</p>
            <div className="vertical-line-registry"></div>
            <p className="column-registry" style={{width: "9%"}}>{this.props.pontoColeta.complemento}</p>
            <div className="vertical-line-registry"></div>
            <p className="column-registry" style={{width: (this.props.selectMode) ? "12%" : "16%"}}>{this.state.cidade}</p>
            <div className="vertical-line-registry"></div>
            <p className="column-registry" style={{width: (this.props.selectMode) ? "12%" : "16%"}}>{this.state.estado}</p>
            <div className="vertical-line-registry"></div>
            <p className="column-registry" style={{width: "7%"}}>{this.props.pontoColeta.cep}</p>
            <div className="vertical-line-registry"></div>
            <p className="column-registry" style={{width: "16%", marginLeft: "3%"}}>{this.props.pontoColeta.responsavel}</p>
        </div>
        );
    }
}

export default RegistroTabelaPontosDeColeta;