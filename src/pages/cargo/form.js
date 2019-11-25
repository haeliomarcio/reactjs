import React, {Component} from 'react';
import CargoServices from './services';
import InputCustom from './../../components/InputCustom';
import Swal from 'sweetalert2';
class FormCargo extends Component{

    constructor(){
        super();
        this.state = {
            lista: [],
            nome: '',
        };
        this.services = new CargoServices();
        alert(this.props.match.params.id);
    }

    async listaDados(){
        this.setState({lista: await this.services.findAll()});
    }

    componentDidMount(){
        this.listaDados();
        Swal.fire("",'TEste',"success");
        
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

    handleChange(e){
        const isChecked = e.target.type === "checkbox";
        this.setState({
            [e.target.name]: isChecked ? e.target.checked : e.target.value
        });
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
                    <InputCustom type="text" id="nome" label="Nome" value={this.state.nome} onChange={this.handleChange.bind(this)} />
                    
                    <div className="form-control">
                        <input type="submit" value="Salvar" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }

}
export default FormCargo;

