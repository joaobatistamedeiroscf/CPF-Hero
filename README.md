


# <img src="/public/assets/cpfverde.png" alt="Logo CPF" width="30" style="vertical-align: middle;"/> CPF Hero - Gerador e Validador de CPF 🚀


Um site simples e eficiente para **gerar** e **validar** números de CPF (Cadastro de Pessoa Física) . Desenvolvido com HTML, CSS e TypeScript, com objetivo de  práticar e releembrar conhecimentos adquiridos.


---

## 📌 Funcionalidades

- ✅ Verifica se um CPF digitado é válido
- 🔁 Gera CPFs válidos aleatórios
- 📋 Copia o CPF para a área de transferência
- 🎯 Máscara de input para facilitar a digitação (`IMask.js`) 
- ⚡ Interface leve e responsiva

---

## 🗂 Estrutura de Pastas
```
CPF-Hero/
├── dist/ # Arquivos compilados (JavaScript)
│ ├── main.js
│ └── utils/
│ ├── geraCpf.js
│ └── validaCpf.js
│
├── public/ # Arquivos públicos e acessíveis diretamente
│ ├── index.html
│ └── assets/
│ ├── cpf.png
│ └── cpfverde.png
│
├── src/ # Código-fonte em TypeScript e CSS
│ ├── styles/
│ │ └── style.css
│ ├── utils/
│ │ ├── geraCpf.ts
│ │ └── validaCpf.ts
│ └── main.ts
│
├── tsconfig.json # Configuração do TypeScript
└── README.md # Este arquivo
```

---

## 🧪 Tecnologias Utilizadas

- HTML5
- CSS3 (modularizado)
- TypeScript
- JavaScript (transpilado)
- [IMask.js](https://imask.js.org/) – para máscara de input

---

## 🚀 Como Usar

1. **Clone o repositório:**

```
git clone https://github.com/seu-usuario/CPF-Hero.git
cd CPF-Hero
```

2. **Compile o TypeScript:**

Se você ainda não tem o TypeScript instalado:
```
npm install -g typescript

```
Depois:
```
tsc
```

3. **Abra o arquivo HTML:**

**public/index.html**

**Você pode simplesmente abrir o HTML no navegador, sem servidor local.**
