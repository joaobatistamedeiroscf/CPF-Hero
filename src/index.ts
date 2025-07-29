import { validaCpf } from './validaCpf.js'; 

const botaoVerificarCpf = document.getElementById("botao__verificar") as HTMLButtonElement;
const inputCpf = document.getElementById("cpf") as HTMLInputElement;
const mensagem = document.getElementById("mensagem") as HTMLDivElement;

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