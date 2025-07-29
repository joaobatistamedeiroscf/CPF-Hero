

export function validaCpf(cpf:string):boolean {
    cpf = cpf.replace(/[^\d]+/g, '');

    if( cpf.length !== 11 || /^(\d)\1+$/.test(cpf) ){
         
        return false ; 
    }

    const calcularDigito  =  (base:number) => {
        let soma  = 0  ; 
        for (let  i = 0 ; i < base -1 ;i++){
            soma += parseInt(cpf.charAt(i)) * (base - i) ; 
        }

        const resto = soma % 11  ; 
        return resto < 2 ? 0 : 11 - resto ; 
    };

    const primeiroDigito = calcularDigito(10);
    const segundoDigito = calcularDigito(11); 

    return (primeiroDigito === parseInt(cpf.charAt(9)) && segundoDigito === parseInt(cpf.charAt(10))); 
}