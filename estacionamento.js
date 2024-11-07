const prompt = require("prompt-sync")();

class Estacionamento {
    constructor() 
    {
        this.veiculos = [];
    }

    adicionarVeiculo() 
    {
        const placa = prompt("Digite a placa do carro: ");
        if(placa)
        {
          this.veiculos.push(placa)
          console.log(`Veículo com a placa ${placa} adicionado.`);
        }
        else
        {
            console.log("Placa invalida.");
        } 
    }

    listarEstacionamento() 
    {
        console.log("=== LISTA DE VEÍCULOS ===");
        if (this.veiculos.length === 0) {
            console.log("Não há veículos no estacionamento.");
        } else {
            this.veiculos.forEach((placa, index) => {
                console.log(`${index + 1}. Placa: ${placa}`);
            });
        }
    }

    removerVeiculo() 
    {
        const placa = prompt("Digite a placa que você deseja remover: ");
        const index = this.veiculos.indexOf(placa);
        if (index !== -1) {
            const horasPermanecidas = parseFloat(prompt("Quantas você permaneceu no estacionamento?"));
            const valorTotal = this.cobrarVeiculo(horasPermanecidas);
             this.veiculos.splice(index, 1);
              console.log(`Veículo com placa ${placa} removido do estacionamento. Total a pagar: R$${valorTotal.toFixed(2)}`);
        } else {
            console.log(" --- Veículo não encontrado. ---");
        }
    }
    cobrarVeiculo(horasPermanecidas)
    {
      const precoEstacionar = 2.00;
      const precoPorHora = 3.00;
      return precoEstacionar + (precoPorHora * horasPermanecidas);
    }
}

const estacionamento = new Estacionamento();

let sair = false;
do {
    console.log("\nSeja bem-vindo, você entrou no estacionamento! \nEscolha uma das opções: " +
        "\n[1] - Registrar veículo " +
        "\n[2] - Listar veículos no estacionamento" +
        "\n[3] - Remover veículo" +
        "\n[4] - Sair");
    console.log(" ========================== ");
    
    const escolha = parseInt(prompt("Escolha uma opção: "), 10);

    switch (escolha) {
        case 1:
            estacionamento.adicionarVeiculo();
            break;
        case 2:
            estacionamento.listarEstacionamento();
            break;
        case 3:
            estacionamento.removerVeiculo();
            break;
        case 4:
            sair = true;
            console.log("Você saiu do estacionamento, até a próxima...");
            break;
        default:
            console.log("Opção inexistente!...Tente novamente.");
    }
} while (!sair);
