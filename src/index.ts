import { validaCpf } from './validaCpf.js'; 
import { geraCpf } from './geraCpf.js';

const botaoVerificarCpf = document.getElementById("botao__verificar") as HTMLButtonElement;
const inputCpf = document.getElementById("cpf") as HTMLInputElement;
const mensagem = document.getElementById("mensagem") as HTMLDivElement;
const botaoGerarCpf = document.getElementById("gerar__cpf") as HTMLButtonElement ; 

botaoVerificarCpf.addEventListener("click", (evento) => {
    evento.preventDefault();
    const cpf = inputCpf.value;
    if (validaCpf(cpf)) {
        mensagem.textContent = "✅🙌 CPF válido!";
        mensagem.className = "mensagem sucesso" ; 
        mensagem.style.display = "block" ; 
    } else {
        mensagem.textContent =  "❌💀 CPF inválido!" ; 
        mensagem.className = "mensagem erro" ; 
        mensagem.style.display = "block" ; 
    }
    
    setTimeout(() => {
    mensagem.style.display = "none";
}, 4000);
});

botaoGerarCpf.addEventListener("click" , (evento)=>{
    evento.preventDefault() ; 
    const cpfGerado = geraCpf();
    inputCpf.value = cpfGerado ;

    mensagem.textContent = "✅🙌 CPF gerado com sucesso !" ; 
    mensagem.className = "mensagem sucesso" ; 
    mensagem.style.display = "block" ; 
});