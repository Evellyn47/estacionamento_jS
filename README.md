# Estrutura do Código

## 1. **Classe Estacionamento**

Contém os métodos para gerenciar os veículos no estacionamento.

- **`adicionarVeiculo()`**: Solicita ao usuário que insira a placa de um veículo e adiciona à lista de veículos.
  
- **`listarEstacionamento()`**: Exibe todos os veículos no estacionamento e verifica se a placa é existente.
  
- **`removerVeiculo()`**: Solicita a placa de um veículo a ser removido, calcula o valor a pagar e o remove da lista, verificando se a placa é válida.
  
- **`cobrarVeiculo(horasPermanecidas)`**: Calcula a cobrança com base no tempo de permanência do veículo (taxa fixa + valor por hora).

## 2. **Menu Interativo**

O programa apresenta um menu com as seguintes opções:

- **[1] Registrar veículo**: Adiciona um veículo ao estacionamento.
  
- **[2] Listar veículos**: Exibe a lista de veículos estacionados.
  
- **[3] Remover veículo**: Remove um veículo e calcula o valor da cobrança.
  
- **[4] Sair**: Encerra o programa.

## 3. **Lógica de Execução**

O código roda em um loop contínuo, esperando que o usuário escolha uma opção. O loop continua até o usuário escolher a opção de sair.
