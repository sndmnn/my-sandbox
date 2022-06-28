# ECOI02-7.5

Atividade requisitada pela professora Cláudia Izeki como parte da disciplina de Lógica de Programação cursada na Universidade Federal de Itajubá - Campus Itabira

# Criação do executável

Um script `bash` foi incluso para rodar todas as instruções necessárias para criar um executável do programa.

Para instalar e rodar o programa, execute no terminal (Linux):

1. `cd ~/caminho/do/repositorio`
2. `chmod u+x install.sh`
3. `./install.sh`
4. `./app`

# Semeando dados

Por conveniência, um arquivo `.csv` foi incluso para semear a fonte de dados. Caso deseje adicionar novas entradas no arquivo, por favor siga o formato "cpf,dia_nascimento,mes_nascimento,ano_nascimento,nome,peso,altura" (sem adição de espaços). Qualquer entrada inválida será ignorada sem avisos.

# Detalhes da atividade

## **1 - Tabela preenchida:**

| Pergunta | Totalmente | Parcialmente |  Não  |
|   :---   |    :---:   |     :---:    | :---: |
| 1) O programa está identado? | X | | |
| 2) Foram colocados o(s) nome(s) do(s) programador(es) como comentários no início do programa? | X | | |
| 3) O programa não possui erros na compilação (erros de sintaxe que impeçam sua execução)? | X | | |
| 4) A função entradaPeso funciona corretamente, realizando as validações em que um peso é inválido quando é negativo ou zero e a partir de 500.0? | X | | |
| 5) A função imprimePessoaCPF funciona corretamente, imprimindo os dados da pessoa (pela chamada à função imprimePessoa) quando seu CPF está cadastrado ou emitindo mensagem de erro caso contrário? | X | | |
| 6) A função imprimePessoasSobrepesoOuMaior funciona corretamente, imprimindo os dados das pessoas (por chamadas à função imprimePessoa) com IMC a partir do sobrepeso ou emitindo uma mensagem quando não há pessoas nessa situação? | X | | |
| 7) A função da opção 4 possui um nome significativo e funciona corretamente, apresentando os dados da pessoa mais alta? | X | | |
| 8) A função da opção 5 possui um nome significativo e funciona corretamente, de acordo com suas especificações? | X | | |
| 9) A função da opção 6 possui um nome significativo e funciona corretamente, de acordo com suas especificações? | X | | |

## **2 - Prints da execução:**

Note que, por conveniência, as pessoas não são inseridas manualmente no início do programa. Elas podem ser inseridas automaticamente pela opção 7, ou manualmente pela opção 1 do menu.

Todos os casos foram testados com dados inseridos pela opção 7 do menu, com exceção do primeiro, que foi testado com a opção 1. Entretando, as duas formas de adicionar pessoas ao programa (opções 1 e 7) fazem todas as validações requisitadas.

1. A função `entradaPeso` (`static Person::validateWeight`) funciona corretamente, realizando as validações em que um peso é inválido quando é negativo ou zero e a partir de 500.0?

| Validação de Peso |
| :---: |
| ![pergunta-4](https://user-images.githubusercontent.com/50667385/126692302-e0c8b718-301a-4e2b-923e-98fd4655a197.png) |

2. A função `imprimePessoaCPF` (`MenuController::findPersonByCpf`) funciona corretamente, imprimindo os dados da pessoa quando seu CPF está cadastrado ou emitindo mensagem de erro caso contrário?

| Usuário Cadastrado | Usuário Não Cadastrado |
| :---: | :---: |
| ![pergunta-5-1](https://user-images.githubusercontent.com/50667385/126692551-38dcde37-d2ff-4aaf-a1cb-061f31ab1d5a.png) | ![pergunta-5-2](https://user-images.githubusercontent.com/50667385/126692778-21e4635b-90e8-4dea-83ee-50c5f1154e6f.png) |

3. A função `imprimePessoasSobrepesoOuMaior` (`MenuController::findPeopleOverweight`) funciona corretamente, imprimindo os dados das pessoas com IMC a partir do sobrepeso ou emitindo uma mensagem quando não há pessoas nessa situação?

| Caso Encontrado | Caso Não Encontrado |
| :---: | :---: |
| ![pergunta-6-1](https://user-images.githubusercontent.com/50667385/126693287-9626b41e-e98f-40e8-a491-04bef7df1db3.png) | ![pergunta-6-2](https://user-images.githubusercontent.com/50667385/126693296-f80b488f-d128-4459-8376-81f0a6104ec5.png) |

4. A função da opção 5 (`MenuController::findHighestPerson`) possui um nome significativo e funciona corretamente, apresentando os dados da pessoa mais alta?

| Usuários Cadastrados | Menos de um Usuários Cadastrado |
| :---: | :---: |
| ![pergunta-7-1](https://user-images.githubusercontent.com/50667385/126696051-ecd99851-6038-442e-b1cd-5d87dba17a8b.png) | ![pergunta-7-2](https://user-images.githubusercontent.com/50667385/126696074-160ab3fc-1a22-47cc-9259-90ecf7112701.png) |

5. A função da opção 6 (`MenuController::findOlderPersonByCpf`) possui um nome significativo e funciona corretamente, de acordo com suas especificações?

| Usuários Cadastrados | Menos de Dois Usuários Cadastrados |
| :---: | :---: |
|![pergunta-8-1](https://user-images.githubusercontent.com/50667385/126694344-10928c83-db10-4b67-bcca-4a308cdbb405.png) | ![pergunta-8-2](https://user-images.githubusercontent.com/50667385/126694359-495d7c9b-1d8e-4d8f-9a8e-5cf8a3acc954.png) |

6. A função da opção 7 (`MenuController::readDataFromCsv`) possui um nome significativo e funciona corretamente, de acordo com suas especificações?

| Parte 1 | Parte 2 |
| :---: | :---: |
| ![pergunta-9-1](https://user-images.githubusercontent.com/50667385/126694938-9a6c4002-d9d4-4f60-aca0-8413c4ec58ca.png) | ![pergunta-9-2](https://user-images.githubusercontent.com/50667385/126694952-6c5703a9-e4c9-43cf-add4-80cb65184195.png) |

## **3 - Descrição da experiência em realizar a atividade:**

De modo geral, foi muito interessante explorar os diversos recursos disponibilizados nas bibliotecas nativas da linguagem C++. De início tive alguns problemas com as lambda captures, mas consegui resolvê-los com certa facilidade.

## **4 - Para correção:**

Como pedido pela professora, aqui está o link para o vídeo de explicação do código: [ECO02-7.5: Vídeo de explicação do código]()

### **Breve descrição das das classes:**

`class Cpf`: Representa um CPF, contendo toda lógica para sua validação. Estrutura de dependência: `Cpf.cpp <- Cpf.h <- Verifiers.h`

`class CsvParser`: Contém toda lógica para efetuar a leitura de arquivos CSV. Estrutura de dependência: `CsvParser.cpp <- CsvParser.h`

`class Date`: Representa uma data, contendo toda lógica para sua validação. Estrutura de dependência: `Date.cpp <- Date.h`

`class Person`: Representa uma pessoa, contendo toda lógica para validação de suas propriedades e comparação de propriedades com outras entidades de mesmo tipo. Estrutura de dependência: `Person.cpp <- Person.h <- Date.h & Cpf.h`

`class PersonRepository`: Interface de comunicação entre o programa e a fonte de dados. Fornece métodos de acesso e adição de dados. Estrutura de dependência: `PersonRepository.cpp <- PersonRepository.h <- Person.h`

`class Menu`: Representa um menu, contendo toda a lógica para sua impressão, bem como validação e manipulação de opções. Estrutura de dependência: `Menu.cpp <- Menu.h <- Option.h`

`class MenuController`: Lida com a lógica de validação de entradas do usuário e processamento das requisições. Estrutura de dependência: `MenuController.cpp <- Cpf.h & CsvParser.h & MenuController.h <- PersonRepository.h`

`class App`: Representa a própria aplicação. Contém métodos necessários para sua execução. Estrutura de dependência: `App.cpp <- App.h <- Menu.h && MenuController.h`
