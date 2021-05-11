window.onload = function() {

    let estados = {
        acre: ['Acre', 'AC'],
        alagoas: ['Alagoas', 'AL'],
        amapa: ['Amapá', 'AP'],
        amazonas: ['Amazonas', 'AM'],
        bahia: ['Bahia', 'BA'],
        ceara: ['Ceará', 'CE'],
        distritoFederal: ['Distrito federal', 'DF'],
        espiritoSanto: ['Espírito Santo', 'ES'],
        goias: ['Goiás', 'GO'],
        maranhao: ['Maranhão', 'MA'],
        matoGrosso: ['Mato Grosso', 'MT'],
        matoGrossoDoSul: ['Mato Grosso Do Sul', 'MS'],
        minasGerais: ['Minas Gerais', 'MG'],
        para: ['Pará', 'PA'],
        paraiba: ['Paraíba', 'PB'],
        parana: ['Paraná', 'PR'],
        pernambuco: ['Pernambuco', 'PE'],
        piaui: ['Piauí', 'PI'],
        rioDeJaneiro: ['Rio de Janeiro', 'RJ'],
        rioGrandeDoNorte: ['Rio Grande Do Norte', 'RN'],
        rioGrandeDoSul: ['Rio Grande Do Sul', 'RS'],
        rondonia: ['Rondônia', 'RO'],
        roraima: ['Roraima', 'RR'],
        santaCatarian: ['Santa Catarina', 'SC'],
        saoPaulo: ['São Paulo', 'SP'],
        sergipe: ['Sergipe', 'SE'],
        tocantins: ['Tocantins', 'TO']
    };
    
    generateEstates();

    function generateEstates() {
        let inputEstado = document.getElementById('input-estado');

        for (let key in estados) {
            let option = document.createElement('option');
            option.innerHTML = estados[key][0];
            option.value = estados[key][1];
            inputEstado.appendChild(option);
        }
    }

}