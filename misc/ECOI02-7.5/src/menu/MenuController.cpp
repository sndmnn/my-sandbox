/**
 * @author Henrique Cotta
 * @date 22 Jul. 2021
 */

#include <iostream>
#include <vector>
#include <tuple>
#include <string>
#include <numeric>
#include <functional>
#include "../cpf/Cpf.h"
#include "../csv/CsvParser.h"
#include "MenuController.h"

/**
 * Handles unexpected user input type
 * 
 * @param <T> type of the expected input
 * @returns a value of the expected type
 */
template <typename T>
T handleNumericInput()
{
    T value;
    while (!(std::cin >> value))
    {
        std::cout << "Por favor insira um valor numérico" << std::endl;
        std::cin.clear();
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
    }

    return value;
};

MenuController::MenuController()
{
    this->dataStore = PersonRepository();
}

Cpf MenuController::inputCpf()
{
    Cpf cpf;
    int cpfArr[11];

    while (!cpf.isValid())
    {
        for (int i{0}; i < 11; ++i)
            cpfArr[i] = handleNumericInput<int>();

        cpf = Cpf(cpfArr);

        if (!cpf.isValid())
            std::cout << "CPF inválido, tente novamente" << std::endl;
    }

    return cpf;
}

Date MenuController::inputDate()
{
    Date birthdate;

    while (!birthdate.isValid())
    {
        int dateArr[3];

        for (int i{0}; i < 3; ++i)
            dateArr[i] = handleNumericInput<int>();

        birthdate = Date(dateArr[0], dateArr[1], dateArr[2]);

        if (!birthdate.isValid())
            std::cout << "Data de nascimento inválida, tente novamente" << std::endl;
    }

    return birthdate;
}

Person MenuController::inputPerson()
{
    std::cout << "Insira os digitos do CPF (linha a linha ou separados por espaços)" << std::endl;
    Cpf cpf;

    std::vector<Person> people;
    people.push_back(Person());

    while (!people.empty())
    {
        cpf = this->inputCpf();
        people = this->dataStore.find([cpf](Person p)
                                      { return p.getCpf() == cpf; });

        if (!people.empty())
            std::cout << "CPF já registrado, tente novamente" << std::endl;
    }

    std::cout << "Insira a data de nascimento no formato \"dia\" \"mes\" \"ano\" (linha a linha ou separados por espaços)" << std::endl;
    Date birthdate = this->inputDate();

    std::cout << "Insira o nome" << std::endl;
    std::string nome;
    std::getline(std::cin >> std::ws, nome);

    std::cout << "Insira o peso da pessoa em quilogramas (ex: 70 ou 70.0)" << std::endl;
    double weight = -1.0;

    while (Person::validateWeight(weight))
    {
        weight = handleNumericInput<double>();
        if (Person::validateWeight(weight))
            std::cout << "Peso inválido, tente novamente" << std::endl;
    }

    std::cout << "Insira a altura da pesso em metros (ex: 1.7 ou 1.6)" << std::endl;
    double height = -1;

    while (Person::validateHeight(height))
    {
        height = handleNumericInput<double>();
        if (Person::validateHeight(height))
            std::cout << "Altura inválida, tente novamente" << std::endl;
    }

    Person p = Person(cpf, birthdate, nome, height, weight);

    return p;
}

void MenuController::insertPerson()
{
    Person newPerson = this->inputPerson();

    std::vector<Person> foundPeople = this->dataStore.find([&newPerson](Person p)
                                                           { return p.getCpf() == newPerson.getCpf(); });

    if (foundPeople.empty())
        this->dataStore.addPerson(newPerson);
    else
        std::cout << "CPF em uso, tente novamente" << std::endl;
}

void MenuController::index()
{
    std::vector<Person> people = this->dataStore.index();

    if (!people.empty())
    {
        std::cout << "-- Pessoas Registradas --" << std::endl;
        for (Person p : people)
        {
            std::cout << p << std::endl;
            std::cout << "-------------------------" << std::endl;
        }
    }
    else
    {
        std::cout << "Nenhuma pessoa cadastrada" << std::endl;
    }
}

void MenuController::findPersonByCpf()
{
    std::cout << "Insira os digitos do CPF da pessoa (linha a linha ou separados por espaços)" << std::endl;
    Cpf cpf = this->inputCpf();

    std::vector<Person> p = this->dataStore.find([cpf](Person p)
                                                 { return p.getCpf() == cpf; });

    if (!p.empty())
    {
        std::cout << "-- Pessoa Encontrada --" << std::endl;
        std::cout << p.at(0) << std::endl;
        std::cout << "-----------------------" << std::endl;
    }
    else
    {
        std::cout << "Nenhuma pessoa encontrada com esse CPF" << std::endl;
    }
}

void MenuController::findPeopleOverweight()
{

    std::vector<Person> people = this->dataStore.find([](Person p)
                                                      { return p.isOverweight(); });

    if (!people.empty())
    {
        std::cout << "-- Pessoas Com Sobrepeso --" << std::endl;
        for (Person p : people)
            std::cout << p << std::endl;
        std::cout << "---------------------------" << std::endl;
    }
    else
    {
        std::cout << "Nenhuma pessoa com sobrepeso encontrada" << std::endl;
    }
}

void MenuController::findHighestPerson()
{
    Person *highestPerson = new Person();

    std::vector<Person> people = this->dataStore.index();

    for (Person p : people)
    {
        if (p.isHigherThan(*highestPerson))
            *highestPerson = p;
    }

    if (highestPerson->getCpf().isValid())
    {
        std::cout << "-- Pessoa Mais Alta --" << std::endl;
        std::cout << *highestPerson << std::endl;
        std::cout << "----------------------" << std::endl;
    }
    else
    {
        std::cout << "Nenhuma pessoa cadastrada para comparação" << std::endl;
    }
}

void MenuController::findOlderPersonByCpf()
{
    std::vector<Person> people = this->dataStore.index();

    if (people.size() >= 2)
    {
        std::cout << "Insira os digitos do CPF da primeira pessoa (linha a linha ou separados por espaços)" << std::endl;
        Cpf cpf1 = this->inputCpf();
        std::cout << "Insira os digitos do CPF da segunda pessoa (linha a linha ou separados por espaços)" << std::endl;
        Cpf cpf2 = this->inputCpf();

        std::vector<Person> foundPeople = this->dataStore.find([cpf1, cpf2](Person p)
                                                               { return p.getCpf() == cpf1 || p.getCpf() == cpf2; });

        if (foundPeople.size() < 2)
            std::cout << "CPF(s) inválido(s), tente novamente" << std::endl;

        Person p1 = foundPeople.at(0);
        Person p2 = foundPeople.at(1);

        if (p1.isOlderThan(p2))
            std::cout << p1.getName() << " é mais velho(a) que " << p2.getName() << std::endl;
        else if (p2.isOlderThan(p1))
            std::cout << p2.getName() << " é mais velho(a) que " << p1.getName() << std::endl;
        else
            std::cout << p1.getName() << " e " << p2.getName() << " possuem a mesma idade" << std::endl;
    }
    else
    {
        std::cout << "Pessoas insuficientes cadastradas para comparação" << std::endl;
    }
}

void MenuController::readDataFromCsv(std::string filePath)
{
    CsvParser parser = CsvParser(filePath, ",");
    std::vector<std::vector<std::string>> fileData = parser.readData();

    for (std::vector<std::string> line : fileData)
    {
        std::string cpfString = line.at(0);
        Cpf cpf = Cpf::stringToCpf(cpfString);

        std::vector<Person> existingPeople = this->dataStore.find([cpf](Person p)
                                                                  { return p.getCpf() == cpf; });
        if (!existingPeople.empty())
            continue;

        int day = std::stoi(line.at(1));
        int month = std::stoi(line.at(2));
        int year = std::stoi(line.at(3));
        Date birthDate = Date(day, month, year);

        std::string name = line.at(4);
        double height = std::stod(line.at(5));
        double weight = std::stod(line.at(6));

        Person newPerson = Person(
            cpf,
            birthDate,
            name,
            height,
            weight);

        if (std::get<0>(newPerson.isValid()))
            this->dataStore.addPerson(newPerson);
    }
}
