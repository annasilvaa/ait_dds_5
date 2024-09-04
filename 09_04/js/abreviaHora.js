'use strict';

function abreviaHora (dataHora) {
    const data = new Date(dataHora);
    const hora = data.toLocaleString('pt-br',{hour:'2-digit', minute:'2-digit'});
    return hora;
}
export default abreviaHora;