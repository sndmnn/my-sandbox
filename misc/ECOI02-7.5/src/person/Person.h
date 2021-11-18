#ifndef PERSON_H
#define PERSON_H

#include <string>
#include <tuple>
#include "../date/Date.h"
#include "../cpf/Cpf.h"

class Person
{
private:
    Cpf cpf;
    Date birthdate;
    std::string name;
    int age;
    double height;
    double weight;
    double imc;

public:
    Person();
    Person(Cpf cpf, Date birthdate, std::string name, double height, double weight);
    Cpf getCpf();
    std::string getName();
    bool isOlderThan(Person p);
    bool isHigherThan(Person p);
    bool isOverweight();
    double calculateImc();
    int calculateAge();
    std::tuple<bool, std::string> isValid();
    friend std::ostream &operator<<(std::ostream &os, const Person &p);

    static bool validateWeight(double weight);
    static bool validateHeight(double height);
};

#endif
