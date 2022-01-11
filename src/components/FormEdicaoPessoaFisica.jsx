import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import '../css/FormEdicaoPessoaFisica.css';
import { DadosBancario } from '../entities/DadosBancario';
import { DadosContato } from '../entities/DadosContato';
import { Endereco } from '../entities/Endereco';
import { Nacionalidade } from '../entities/Nacionalidade';
import { PessoaFisica } from '../entities/PessoaFisica';
import LocalizacaoService from '../services/LocalizacaoService';
import PessoaFisicaService from '../services/PessoaFisicaService';

class FormEdicaoPessoaFisica extends Component {

    constructor(props){
        super(props);
        this.state = {
                        type : 'text', 
                        localizacaoService : new LocalizacaoService(),
                        pessoaFisicaService : new PessoaFisicaService(),
                        estados : [],
                        cidades : [],
                        nome: "",
                        email: "",
                        telefone: "",
                        conta: "",
                        agencia: "",
                        codigoBanco: "",
                        banco: "",
                        cep: "",
                        rua: "",
                        numero: "",
                        complemento: "",
                        bairro: "",
                        idEstado: 0,
                        idCidade: 0,
                        senha: "",
                        descricao: "",
                        nome: "",
                        registro: "",
                        dataNasc: "",
                        sexo: "",
                        descricaoNacionalidade: "",
                        idContato: 0,
                        idContaBanco: 0,
                        idEndereco: 0,
                        idNacionalidade: 0
                    };
        this.handleChange = this.handleChange.bind(this);
        this.atualizarCampos = this.atualizarCampos.bind(this);
        this.editarDados = this.editarDados.bind(this);
    }

    componentDidMount(){
        this.state.pessoaFisicaService.getPessoaFisicaByLoggedIdUser()
                                        .then(result => {
                                            this.atualizarCampos(result);
                                        }).catch(err => {
                                            alert(err);
                                        });        
        this.state.localizacaoService.getEstados().then(estados => {           
            this.setState({estados});
        });
    }

    changeInputType(newType) {
        this.setState({type : newType});
    }

    changeCidades(uf){
        this.state.localizacaoService.getCidadesByUF(uf).then(cidades => {  
            this.setState({cidades});
        })
    }

    handleChange(event){
        switch (event.target.name) {
            case "nome-completo":
                this.setState({nome: event.target.value});
                break; 
            case "data-nascimento":
                this.setState({dataNasc: event.target.value});
                break;
            case "sexo":
                this.setState({sexo: event.target.value});
                break;
            case "nacionalidade":
                this.setState({descricaoNacionalidade: event.target.value});
                break;
            case "registro":
                this.setState({registro: event.target.value});
                break;
            case "email":
                this.setState({email: event.target.value});
                break;
            case "telefone":
                this.setState({telefone: event.target.value});
                break;
            case "cep":
                this.setState({cep: event.target.value});
                break;
            case "rua":
                this.setState({rua: event.target.value});
                break;
            case "numero":
                this.setState({numero: event.target.value});
                break;
            case "complemento":
                this.setState({complemento: event.target.value});
                break;
            case "bairro":
                this.setState({bairro: event.target.value});
                break;
            case "estado":
                this.setState({idEstado: event.target.value});
                this.setState({idCidade: ""});
                this.changeCidades(event.target.value);
                break;
            case "cidade":
                this.setState({idCidade: event.target.value});
                break;
            case "password":
                this.setState({senha: event.target.value});
                break;
            case "password-check":
                this.setState({passwordCheck: event.target.value});
                break;
            case "conta":
                this.setState({conta: event.target.value});
                break;
            case "agencia":
                this.setState({agencia: event.target.value});
                break;
            case "codigo":
                this.setState({codigoBanco: event.target.value});
                break;
            case "banco":
                this.setState({banco: event.target.value});
                break;
        }
    }

    atualizarCampos(result){
        this.setState({nome: result.nomeCompleto});

        this.setState({idContato: result.dadosContato.id});
        this.setState({email: result.dadosContato.email});
        this.setState({telefone: result.dadosContato.telefone});

        this.setState({idContaBanco: result.dadosBancarios.id});
        this.setState({conta: result.dadosBancarios.conta});
        this.setState({agencia: result.dadosBancarios.agencia});
        this.setState({codigoBanco: result.dadosBancarios.codigoBanco});
        this.setState({banco: result.dadosBancarios.banco});

        this.setState({idEndereco: result.endereco.id});
        this.setState({cep: result.endereco.cep});
        this.setState({rua: result.endereco.logradouro});
        this.setState({numero: result.endereco.numero});
        this.setState({complemento: result.endereco.complemento});
        this.setState({bairro: result.endereco.bairro});
        this.setState({idEstado: result.endereco.idDoEstado});
        this.changeCidades(this.state.idEstado);
        this.setState({idCidade: result.endereco.idDaCidade});

        this.setState({senha: result.senha});
        this.setState({descricao: result.descricao});
        this.setState({registro: result.registro});
        this.setState({dataNasc: result.dataNascimento});
        this.setState({sexo: result.sexo});

        this.setState({idNacionalidade: result.nacionalidade.id});
        this.setState({descricaoNacionalidade: result.nacionalidade.descricao});
    }

    editarDados(){

        let contato = new DadosContato(this.state.idContato, this.state.email, this.state.telefone);
        
        let dadosBancarios = new DadosBancario();
        dadosBancarios.conta = this.state.conta;
        dadosBancarios.agencia = this.state.agencia;
        dadosBancarios.codigoBanco = this.state.codigoBanco;
        dadosBancarios.banco = this.state.banco;
        dadosBancarios.id = this.state.idContaBanco;

        let endereco = new Endereco(
            this.state.cep,
            this.state.rua,
            this.state.numero,
            this.state.complemento,
            this.state.bairro,
            this.state.idEstado,
            this.state.idCidade,
            this.state.idEndereco
        );

        let novaData = this.state.dataNasc.split("-")
        let data = new Date();
        data.setFullYear(novaData[0], novaData[1], novaData[2]);

        let nacionalidade = new Nacionalidade();
        nacionalidade.id = this.state.idNacionalidade;
        nacionalidade.descricao = this.state.descricaoNacionalidade;

        let pessoaFisica = new PessoaFisica(
            contato,
            dadosBancarios,
            endereco,
            this.state.senha,
            Object,
            Object,
            this.state.descricao,
            this.state.nome,
            this.state.registro,
            data,
            this.state.sexo,
            nacionalidade
        )

        this.props.atualizarDadosUsuario(pessoaFisica);

    }

    render() {
        return (
            <div>
                <Row>
                    <div className="box-titulo-principal mb-2">
                        Dados do perfil
                    </div>
                    <hr className="separador-profile"/>
                </Row>
                <Form>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="nome-completo" value={this.state.nome} placeholder="Nome Completo" className="input-default" onChange={this.handleChange}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6" className="col-form">
                                <input 
                                    id="date" 
                                    type={this.state.type} 
                                    name="data-nascimento"
                                    placeholder="Data de nascimento" 
                                    className="input-date-edicao" 
                                    value={this.state.dataNasc}
                                    onFocus={() => this.changeInputType('date')}
                                    onBlur={() => this.changeInputType('text')}
                                    onChange={this.handleChange}
                                ></input>
                            </Col>
                            <Col xs="6" className="col-form">
                                <select name="sexo" value={this.state.sexo} className="selector input-default" onChange={this.handleChange}>
                                    <option value="" disabled selected>Sexo</option>
                                    <option value="Feminino">Feminino</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Outros">Outros</option>
                                    <option value="Não quero informar">Não quero informar</option>
                                </select>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="6" className="col-form">
                                <select name="nacionalidade" value={this.state.descricaoNacionalidade} className="selector input-default" onChange={this.handleChange}>
                                    <option value="" disabled selected>Nacionalidade</option>
                                    <option value="nasc01">Nascionalidade 01</option>
                                    <option value="nasc02">Nascionalidade 02</option>
                                    <option value="nasc03">Nascionalidade 03</option>
                                    <option value="nasc04">Nascionalidade 04</option>
                                </select>
                            </Col>
                            <Col sm="6" className="col-form">
                                <Form.Control name="registro" value={this.state.registro} type="text" placeholder="CPF / RNE" className="input-default" onChange={this.handleChange}/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="titulo-group" className="mt-3">
                            Dados bancários
                        </Form.Label>
                        <hr className="separador-profile-group"/>
                        <Row>
                            <Col sm="8" className="col-form">
                                <Form.Control type="text" name="conta" value={this.state.conta} placeholder="Conta" className="input-default" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="4" className="col-form">
                                <Form.Control type="text" name="agencia" value={this.state.agencia} placeholder="Agência" className="input-default" onChange={this.handleChange}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="4" className="col-form">
                                <Form.Control type="text" name="codigo" value={this.state.codigoBanco} placeholder="Código Banco" className="input-default" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="8" className="col-form">
                                <select name="banco" value={this.state.banco} className="selecto input-default" onChange={this.handleChange}>
                                    <option value="" disabled selected>Cód / Banco</option>
                                    <option value="001">001 - Banco do Brasil</option>
                                    <option value="237">237 - Banco Bradesco</option>
                                    <option value="077">077 - Banco Inter</option>
                                    <option value="033">033 - Banco Santander</option>
                                </select>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="titulo-group" className="mt-3">
                            Dados de contato
                        </Form.Label>
                        <hr className="separador-profile-group"/>
                        <Row>
                            <Col sm="6" className="col-form">
                                <Form.Control type="text" name="email" value={this.state.email} placeholder="E-mail" className="input-default" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="6" className="col-form">
                                <Form.Control type="text" name="telefone" value={this.state.telefone} placeholder="Telefone" className="input-default" onChange={this.handleChange}/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="titulo-group" className="mt-3">
                            Endereço
                        </Form.Label>
                        <hr className="separador-profile-group"/>
                        <Row>
                            <Col sm="4" className="col-form">
                                <Form.Control type="text" name="cep" value={this.state.cep} placeholder="CEP" className="input-default" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="8" className="col-form">
                                <Form.Control type="text" name="rua" value={this.state.rua} placeholder="Rua" className="input-default" onChange={this.handleChange}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="2" className="col-form">
                                <Form.Control type="text" name="numero" value={this.state.numero} placeholder="N°" className="input-default" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="5" className="col-form">
                                <Form.Control type="text" name="complemento" value={this.state.complemento} placeholder="Complemento" className="input-default" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="5" className="col-form">
                                <Form.Control type="text" name="bairro" value={this.state.bairro} placeholder="Bairro" className="input-default" onChange={this.handleChange}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="6" className="col-form">
                                <select name="estado" id="estado" value={this.state.idEstado} className="selector input-default" onChange={this.handleChange}>
                                    <option value="" disabled selected>Estado</option>
                                    {this.state.estados.map(estado => <option value={estado.id}>{estado.nome}</option>)}
                                </select>
                            </Col>
                            <Col sm="6" className="col-form">
                                <select name="cidade" id="cidade" value={this.state.idCidade} className="selector input-default" onChange={this.handleChange}>
                                    <option value="" disabled selected>Cidade</option>
                                    {this.state.cidades.map(cidade => <option value={cidade.id}>{cidade.nome}</option>)}
                                </select>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="titulo-group" className="mt-3">
                            Senha
                        </Form.Label>
                        <hr className="separador-profile-group"/>
                        <Row>
                            <Col sm="6" className="col-form">
                                <Form.Control type="password" name="password" value={this.state.senha} placeholder="Senha" className="input-default" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="6" className="col-form">
                                <Form.Control type="password" name="password-check" value={this.state.passwordCheck} placeholder="Confirmar Senha" className="input-default" onChange={this.handleChange}/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" id="btn-editar" onClick={() => this.editarDados()}>Editar dados</Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default FormEdicaoPessoaFisica;