export function geraCpf() {
    const bloqueados = [
        '12345678909',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
        '00000000000'
    ];
    const gerarNumeroAleatorio = () => Math.floor(Math.random() * 10);
    const calcularDigito = (base) => {
        let soma = 0;
        let peso = base.length + 1;
        for (let i = 0; i < base.length; i++) {
            soma += base[i] * peso--;
        }
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };
    let cpfNumerico;
    do {
        const numeros = [];
        for (let i = 0; i < 9; i++) {
            numeros.push(gerarNumeroAleatorio());
        }
        const digito1 = calcularDigito(numeros);
        numeros.push(digito1);
        const digito2 = calcularDigito(numeros);
        numeros.push(digito2);
        cpfNumerico = numeros.join('');
    } while (bloqueados.indexOf(cpfNumerico) !== -1);
    return cpfNumerico.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}
