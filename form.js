var dadosCliente = {
    endereco: {
        pais: '',
        cidade: '',
        estado: '',
        zipcode: '',
        adress1: '',
        adress2: ''
    },
    contato: {
        primeiroNome : '',
        segundoNome : '',
        email : '',
        phone : ''
    },
};


function validarFormulario(){
    event.preventDefault();
    //gerar objeto endereço
    objEndereco = {
        pais : document.getElementById('selection_country').value,
        cidade : document.getElementById('city').value,
        estado : document.getElementById('state-region-provincy').value,
        zipcode : document.getElementById('zipCode').value,
        adress1 : document.getElementById('adress1').value,
        adress2 : document.getElementById('adress2').value
    };

    dadosCliente.endereco = objEndereco;
    console.log(objEndereco);

    //gerar objeto contato 
    objContato = {
        primeiroNome : document.getElementById('selection_country').value,
        segundoNome : document.getElementById('city').value,
        email : document.getElementById('state-region-provincy').value,
        telefone : document.getElementById('zipCode').value
    }

}

function validarEndereço( _objEndereco ) {

}

function validarContato( _objContato ) {

}