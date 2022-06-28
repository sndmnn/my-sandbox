#include <iostream>
#include <string>
#include <chrono>
#include <math.h>
#include "Person.h"

Person::Person()
{
    this->name = "";
    this->age = 0;
    this->height = 0.0;
    this->weight = 0.0;
    this->imc = 0.0;
}

Person::Person(Cpf cpf, Date birthdate, std::string name, double height, double weight)
{
    this->cpf = cpf;
    this->birthdate = birthdate;
    this->age = this->calculateAge();
    this->name = name;
    this->height = height;
    this->weight = weight;
    this->imc = this->calculateImc();
}

Cpf Person::getCpf()
{
    return this->cpf;
}

std::string Person::getName()
{
    return this->name;
}

bool Person::isOlderThan(Person p)
{
    return this->age > p.age;
}

bool Person::isHigherThan(Person p)
{
    return p.height < this->height;
}

bool Person::isOverweight()
{
    return this->imc > 25.0;
}

std::tuple<bool, std::string> Person::isValid()
{
    if (!this->cpf.isValid())
        return std::make_tuple(false, "CPF inválido");

    if (!this->birthdate.isValid())
        return std::make_tuple(false, "Data de nascimento inválida");

    if (Person::validateWeight(this->weight))
        return std::make_tuple(false, "Peso inválido");

    if (Person::validateHeight(this->height))
        return std::make_tuple(false, "Altura inválida");

    return std::make_tuple(true, "Os dados de " + this->name + " são válidos");
}

double Person::calculateImc()
{
    return this->weight / (std::pow(this->height, 2));
}

int Person::calculateAge()
{
    auto now = std::chrono::system_clock::now();
    auto timeT = std::chrono::system_clock::to_time_t(now);
    tm localTime = *localtime(&timeT);

    int day = localTime.tm_mday;
    int month = localTime.tm_mon + 1;
    int year = localTime.tm_year + 1900;

    int birthDay = this->birthdate.getDay();
    int birthMonth = this->birthdate.getMonth();
    int birthYear = this->birthdate.getYear();

    if (birthMonth < month || (birthMonth == month && birthDay <= day))
        return 2021 - birthYear;

    return 2021 - birthYear - 1;
}

std::ostream &operator<<(std::ostream &os, const Person &p)
{
    os << "CPF:        " << p.cpf << std::endl
       << "Nome:       " << p.name << std::endl
       << "Nascimento: " << p.birthdate << std::endl
       << "Idade:      " << p.age << std::endl
       << "Altura:     " << p.height << std::endl
       << "Peso:       " << p.weight << std::endl
       << "IMC:        " << p.imc;

    return os;
}

bool Person::validateWeight(double weight)
{
    return weight <= 0.0 || weight > 500.0;
}

bool Person::validateHeight(double height)
{
    return height <= 0.0 || height > 4.0;
}
