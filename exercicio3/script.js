// // 
// Nome completo
   
//    b) Data de nascimento (utilize as / ) 
   
//    c) Endereço
   
//    d) CPF
   
//    e) Escolaridade
   
//    f) Possui CHN?
   
//    g) Quantos filhes possui?
   
//    h) Cargo atual
   
//    i) Salário
   
//    j) Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero
   
//    k) Informe o ano de admissão

const nomeCompleto = prompt("Nome Completo")
const dataDenascimento = Number(prompt("Data de Nascimento"))
const endereco = prompt("Endereço")
const cpfUsuario = Number(prompt("CPF"))
const escolaridade = prompt("Escolaridade")
const carteiraMotorista = Boolean(prompt("CNH"))
const filhos = Number(prompt("Quantos filhos possui?"))
const cargo = prompt("Cargo Atual")
const salario = Number(prompt("Salário"))
const comissao = Boolean(prompt("Recebe comissão?Se sim, informe a porcentagem, caso não, responda com zero"))
const admissao = Number(prompt("Ano de admissão"))

console.log("Qual o seu nome?", nomeCompleto)
console.log("Qual a sua data de nascimento?", dataDenascimento)
console.log("Qual o seu endereço?", endereco)
console.log("CPF",cpfUsuario)
console.log("Escolaridade", escolaridade)
console.log("CNH", carteiraMotorista)
console.log("Quantos filhos possui?", filhos)
console.log("Cargo atual", cargo)
console.log("Salário", salario)
console.log("Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero", comissao)
console.log("Ano de admissão", admissao)

console.log(typeof nomeCompleto)
console.log(typeof dataDenascimento)
console.log(typeof endereco)
console.log(typeof cpfUsuario)
console.log(typeof escolaridade)
console.log(typeof carteiraMotorista)
console.log(typeof filhos)
console.log(typeof cargo)
console.log(typeof salario)
console.log(typeof comissao)
console.log(typeof admissao)



