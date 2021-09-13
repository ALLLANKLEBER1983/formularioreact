import React from "react";
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

function FormularioCadastro() {
    return (
        <form>
            <TextField id="nome" label="Nome"/>

            <TextField label="Sobrenome"/>
            
            <TextField label="CPF"/>

            <label>Promoção</label>
            <input type="checkbox" />
            <label>Novidades</label>
            <input type="checkbox" />

            <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
        </form>)

}

export default FormularioCadastro;