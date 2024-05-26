const pergunta = document.getElementById('pergunta');
const seAcertou = document.getElementById('acertouerrou');
const nome = document.getElementById('nome');
const frase = document.getElementById('frase');
const uso = document.getElementById('uso');

const frases = [
    {
        nome: 'ZygmuntBauman',
        frase: 'De acordo com (nome), uma instituição quando posicionada de forma a ignorar a sua função original, encontra-se em um "estado de zumbi".',
        uso: 'Vários temas',
        usoDesc: 'Atende a uma infinidade de temas, como a violência doméstica, corrupção, quebra de direitos, etc...'
    },
    {
        nome: 'GilbertoDimenstein',
        frase: 'Para (nome), em sua obra "O Cidadão de Papel", nem sempre as leis presentes nos documentos oficiais são cumpridas, desencadeando uma realidade em que os indivíduos não são amparados pelo Estado.',
        uso: 'Omissão governamental',
        usoDesc: 'Embasar os danos causados devido à negligência ou omissão governamental e marginalização dos indivíduos'
    },
    {
        nome: 'HannahArendt',
        frase: 'Na obra Eichmann em Jerusalém, () filósof() (nome) propõe que o mal, que está presente no cotidiano e aparenta ser normal, pode alienar as pessoas até à perda da consciência do quanto isso pode ser prejudicial.',
        uso: 'Passividade da sociedade',
        usoDesc: 'Ideal para embassar críticas à passividade atribuída pela sociedade às mazelas do cotidiano, como violência e preconceitos.'
    },
    {
        nome: 'JohnLocke',
        frase: '() filósof() contratualista (nome) construiu a tese de que os indivíduos cedem a confiança ao Estado, que, em contrapartida, deve garantir direitos aos cidadãos.',
        uso: 'Direitos fundamentais',
        usoDesc: 'É válido para qualquer tema em que se pode argumentar sobre a quebra de direitos fundamentais: bem-estar, segurança, lazer, moradia, etc...'
    },
    {
        nome: 'Lamarck',
        frase: 'Para essa pessoa, o ser é modificado pelo meio, isto é, o indivíduo tende a se adaptar ao ambiente em que está inserido.',
        uso: 'Influência sobre individuo',
        usoDesc: 'É possível encaixar essa ideia em diversos temas, principalmente os que tratam sobre a influência, como a familiar e a midiática.'
    },
]

const adivinharFrase = () => {
    let indice = Math.floor(Math.random() * 5);

    console.log('===================');
    console.log(`De quem é a lógica: ${frases[indice].frase}`);
    /* pergunta.innerText = `De quem é a lógica: ${frases[indice].frase}`; */
    
    for(let i = 0; i < frases.length; i++) {
        console.log(frases[i].nome);
    }

    console.log('===================');

    let valor = prompt(`De quem é a lógica: ${frases[indice].frase}`);
    if(valor == frases[indice].nome) {
        console.log("Parabéns! Você acertou!");
        seAcertou.innerText = 'Parabéns! Você acertou!';
    } else {
        console.log("Errado! A frase é de " + frases[indice].nome);
        seAcertou.innerText = `Errado! A frase é de ${frases[indice].nome}`;
    }

    nome.innerText = `Nome: ${frases[indice].nome}`;
    frase.innerText = `Frase: ${frases[indice].frase}`;
    uso.innerText = `Uso: ${frases[indice].usoDesc}`;
}

const adivinharUso = () => {
    let indice = Math.floor(Math.random() * 5);

    console.log('===================');
    console.log(`Para o que podemos utilizar a ideia de: ${frases[indice].frase}`);
    /* pergunta.innerText = `Para o que podemos utilizar a ideia de: ${frases[indice].frase}`; */
    
    for(let i = 0; i < frases.length; i++) {
        console.log(frases[i].uso);
    }

    console.log('===================');

    valor = prompt(`Para o que podemos utilizar a ideia de: ${frases[indice].frase}`);

    if(valor == frases[indice].uso) {
        console.log("Isso mesmo!");
        seAcertou.innerText = 'Isso mesmo!';
    } else {
        console.log("Não exatamente. Devemos utilizar para: " + frases[indice].uso);
        seAcertou.innerText = "Não exatamente. Devemos utilizar para: " + frases[indice].uso;
    }

    nome.innerText = `Nome: ${frases[indice].nome}`;
    frase.innerText = `Frase: ${frases[indice].frase}`;
    uso.innerText = `Uso: ${frases[indice].usoDesc}`;
}