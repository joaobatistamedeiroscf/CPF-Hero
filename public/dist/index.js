var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { validaCpf } from './utils/validaCpf.js';
import { geraCpf } from './utils/geraCpf.js';
const botaoVerificarCpf = document.getElementById("botao__verificar");
const inputCpf = document.getElementById("cpf");
const mensagem = document.getElementById("mensagem");
const botaoGerarCpf = document.getElementById("gerar__cpf");
const botaoCopiaCpf = document.getElementById("copy-cpf");
botaoVerificarCpf.addEventListener("click", (evento) => {
    evento.preventDefault();
    const cpf = inputCpf.value;
    if (validaCpf(cpf)) {
        mensagem.textContent = "✅🙌 CPF válido!";
        mensagem.className = "mensagem sucesso";
        mensagem.style.display = "block";
    }
    else {
        mensagem.textContent = "❌💀 CPF inválido!";
        mensagem.className = "mensagem erro";
        mensagem.style.display = "block";
    }
    setTimeout(() => {
        mensagem.style.display = "none";
    }, 4000);
});
botaoGerarCpf.addEventListener("click", (evento) => {
    evento.preventDefault();
    const cpfGerado = geraCpf();
    inputCpf.value = cpfGerado;
    mensagem.textContent = "✅🙌 CPF gerado com sucesso !";
    mensagem.className = "mensagem sucesso";
    mensagem.style.display = "block";
    setTimeout(() => {
        mensagem.style.display = "none";
    }, 4000);
});
botaoCopiaCpf.addEventListener("click", (evento) => __awaiter(void 0, void 0, void 0, function* () {
    evento.preventDefault();
    const cpf = inputCpf.value;
    if (cpf == "") {
        alert("⚠️ Nenhum CPF para copiar!");
        return;
    }
    try {
        yield navigator.clipboard.writeText(cpf);
        alert(`✅ CPF copiado com sucesso! 🙌: ${cpf}`);
    }
    catch (err) {
        alert("❌ Erro ao copiar CPF. Tente novamente.");
        console.error("Erro ao copiar para clipboard:", err);
    }
}));
