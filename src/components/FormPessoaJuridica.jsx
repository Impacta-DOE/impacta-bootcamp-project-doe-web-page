import React, { Component } from 'react';
import { Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router';

import '../css/FormPessoaJuridica.css';
import { DadosBancario } from '../entities/DadosBancario';
import { DadosContato } from '../entities/DadosContato';
import { Endereco } from '../entities/Endereco';
import { PessoaJuridica } from '../entities/PessoaJuridica';
import LocalizacaoService from '../services/LocalizacaoService';
import PessoaJuridicaService from '../services/PessoaJuridicaService';
import AuthenticationService from '../services/AuthenticationService';

class FormPessoaJuridica extends Component {

    constructor(props){
        super(props);
        this.state = {
                        localizacaoService : new LocalizacaoService(),
                        pessoaJuridicaService: new PessoaJuridicaService(),
                        authService : new AuthenticationService(),
                        estados : [],
                        cidades : [],
                        pessoaJuridica: new PessoaJuridica(
                            new DadosContato(),
                            new DadosBancario(),
                            new Endereco(),
                            '',
                            Object,
                            Object,
                            '',
                            '',
                            '',
                            ''
                        ),
                        passwordCheck : "",
                        redirect: false, 
                        page: "/",
                        loading : false
                    };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.state.localizacaoService.getEstados().then(estados => {           
            this.setState({estados});
        });
    }

    changeCidades(uf){
        this.state.localizacaoService.getCidadesByUF(uf).then(cidades => {
            this.setState({cidades});
        })
    }

    handleChange(event){
        switch (event.target.name) {
            case "estado":
                this.changeCidades(event.target.value);
                this.state.pessoaJuridica.endereco.idEstado = event.target.value;
                break;   
            case "registro":
                this.state.pessoaJuridica.registro = event.target.value;
                break;
            case "nome":
                this.state.pessoaJuridica.nome = event.target.value;
                break;
            case "conta":
                this.state.pessoaJuridica.dadosBancario.conta = event.target.value;
                break;
            case "agencia":
                this.state.pessoaJuridica.dadosBancario.agencia = event.target.value;
                break;
            case "codigo":
                this.state.pessoaJuridica.dadosBancario.codigoBanco = event.target.value;
                break;
            case "banco":
                this.state.pessoaJuridica.dadosBancario.banco = event.target.value;
                break;
            case "email":
                this.state.pessoaJuridica.dadosContato.email = event.target.value;
                break;
            case "telefone":
                this.state.pessoaJuridica.dadosContato.telefone = event.target.value;
                break;
            case "cep":
                this.state.pessoaJuridica.endereco.cep = event.target.value;
                break;
            case "rua":
                this.state.pessoaJuridica.endereco.rua = event.target.value;
                break;
            case "numero":
                this.state.pessoaJuridica.endereco.numero = event.target.value;
                break;
            case "complemento":
                this.state.pessoaJuridica.endereco.complemento = event.target.value;
                break;
            case "bairro":
                this.state.pessoaJuridica.endereco.bairro = event.target.value;
                break;
            case "cidade":
                this.state.pessoaJuridica.endereco.idCidade = event.target.value;
                break;
            case "senha":
                this.state.pessoaJuridica.senha = event.target.value;
                break;
            case "senha-check":
                this.setState({passwordCheck: event.target.value});
                break;
        }
    }

    save() {
        this.setState({loading : true});
        this.state.pessoaJuridicaService.save(this.state.pessoaJuridica)
                                        .then(() => {
                                            alert("Cadastro realizado!!!")
                                            this.state.authService.login(this.state.pessoaJuridica.dadosContato.email, this.state.pessoaJuridica.senha)
                                            .then(() => {
                                                localStorage.setItem("isLoggedIn", true);
                                                this.setState({redirect: true});
                                                this.setState({loading : false});
                                                window.location.reload();
                                            })
                                        })
                                        .catch((err) => {
                                            alert("Erro: " + err.message);
                                            this.setState({loading : false});
                                        });
    }

    render() {
        if(this.state.redirect){
            this.setState({redirect : false});
            return <Redirect to={this.state.page} />
        }
        return (
            <div id="div-form">
                <Form>
                    <Form.Group className="mb-3" controlId="formIdentificacao">
                        <Row>
                            <Col sm="2" className="col-form">
                                <Form.Control type="text" name="registro" placeholder="CNPJ" id="input04" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="8" className="col-form">
                                <Form.Control type="text" name="nome" placeholder="Razão Social" id="input05" onChange={this.handleChange}/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formDadosBancarios">
                        <Form.Label id="titulo-group">
                            Dados Bancarios
                        </Form.Label>
                        <hr className="separador"/>
                        <Row>
                            <Col sm="2" className="col-form">
                                <Form.Control type="text" name="conta" placeholder="Conta" id="input04" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="8" className="col-form">
                                <Form.Control type="text" name="agencia" placeholder="Agência" id="input-agencia" onChange={this.handleChange}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="2" className="col-form">
                                <Form.Control type="text" name="codigo" placeholder="Código Banco" id="input04" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="8" className="col-form">
                                <select name="banco" id="estado" id="input-cod-banco" className="selector" onChange={this.handleChange}>
                                <option value="" disabled selected>Cód / Banco</option>
                                    <option value="001">001 - Banco do Brasil</option>
                                    <option value="237">237 - Banco Bradesco</option>
                                    <option value="077">077 - Banco Inter</option>
                                    <option value="033">033 - Banco Santander</option>
                                </select>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formDadosContato">
                        <Form.Label id="titulo-group">
                            Dados de contato
                        </Form.Label>
                        <hr className="separador"/>
                        <Row>
                            <Col sm="5" className="col-form">
                                <Form.Control type="text" name="email" placeholder="E-mail" id="input01" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="5" className="col-form">
                                <Form.Control type="text" name="telefone" placeholder="Telefone" id="input03" onChange={this.handleChange}/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formEndereco">
                        <Form.Label id="titulo-group">
                            Endereço
                        </Form.Label>
                        <hr className="separador"/>
                        <Row>
                            <Col sm="5" className="col-form">
                                <Form.Control type="text" name="cep" placeholder="CEP" id="input01" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="5" className="col-form">
                                <Form.Control type="text" name="rua" placeholder="Rua" id="input03" onChange={this.handleChange}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="2" className="col-form">
                                <Form.Control type="text" name="numero" placeholder="N°" id="input-numero-casa" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="4" className="col-form">
                                <Form.Control type="text" name="complemento" placeholder="Complemento" id="input-complemento" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="4" className="col-form">
                                <Form.Control type="text" name="bairro" placeholder="Bairro" id="input-bairro" onChange={this.handleChange}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="5" className="col-form">
                                <select name="estado" id="estado" id="input01" className="selector" onChange={this.handleChange}>
                                    <option value="" disabled selected>Estado</option>
                                    {this.state.estados.map(estado => <option value={estado.id}>{estado.nome}</option>)}
                                </select>
                            </Col>
                            <Col sm="5" className="col-form">
                                <select name="cidade" id="cidade" id="input03" className="selector" onChange={this.handleChange}>
                                    <option value="" disabled selected>Cidade</option>
                                    {this.state.cidades.map(cidade => <option value={cidade.id}>{cidade.nome}</option>)}
                                </select>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formSenha">
                        <Form.Label id="titulo-group">
                            Senha
                        </Form.Label>
                        <hr className="separador"/>
                        <Row>
                            <Col sm="5" className="col-form">
                                <Form.Control name="senha" type="password" placeholder="Senha" id="input01" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="5" className="col-form">
                                <Form.Control name="senha-check" type="password" placeholder="Confirmar Senha" id="input03" onChange={this.handleChange}/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Button variant="success" id="btn-cadastrar-pessoa-juridica" onClick={() => this.save()} style={{'display' : ((this.state.loading) ? 'none' : 'block')}}>CADASTRAR</Button>
                    <Spinner 
                        animation="border" 
                        variant="primary"
                        style={{
                                'margin' : '0 auto',
                                'marginTop' : '8.5%',
                                'display' : ((!this.state.loading) ? 'none' : 'block')}} 
                    />
                </Form>
            </div>
        );
    }
}

export default FormPessoaJuridica;