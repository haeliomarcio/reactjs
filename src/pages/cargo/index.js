import React, {Component} from 'react';
import CargoServices from './services';
import InputCustom from './../../components/InputCustom';

class IndexCargo extends Component{

    constructor(){
        super();
        this.state = {
            lista: [],
            nome: '',
        };
        this.services = new CargoServices();
    }

    async listaDados(){
        this.setState({lista: await this.services.findAll()});
    }

    componentDidMount(){
        this.listaDados();
    }
    componentWillMount(){}

    async salvaForm(evento){
        evento.preventDefault();
        if(this.validate()){
            await this.services.create({nome: this.state.nome});
            await this.listaDados();
            this.clearForm();
        }
    }

    validate(){
        if(this.state.nome === ''){
            alert("é obrigatório um nome");
            return false;
        }
        return true;
    }

    setNome(evento){
        this.setState({
            nome: evento.target.value,
        })
    }

    clearForm(){
        this.setState({
            nome: '',
        });
    }

    render(){
        return (
            <div className="cargo">
                <buttom className="btn btn-success" onClick={this.teste}>Adicionar</buttom>
                <form onSubmit={this.salvaForm.bind(this)}>
                    <InputCustom type="text" id="nome" label="Nome" value={this.state.nome} onChange={this.setNome.bind(this)} />
                    
                    <div className="form-control">
                        <input type="submit" value="Salvar" className="btn btn-primary" />
                    </div>
                </form>
                <table class="table table-hover tabler-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.lista.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.nome}</td>
                                        <th>
                                            <buttom>
                                                {/* <FontAwesomeIcon icon={['fa', 'trash']} /> */}
                                                <i className="fa fa-trash"></i>
                                            </buttom>
                                        </th>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}
export default IndexCargo;

