/**
 * @author Henrique Cotta
 * @date 22 Jul. 2021
 */

#include <iostream>
#include <map>
#include "Verifiers.h"
#include "Cpf.h"

Cpf::Cpf()
{
    for (int i{0}; i < 9; ++i)
        this->cpf[i] = 0;

    this->cpf[9] = this->cpf[10] = 1;
}

Cpf::Cpf(int *cpf)
{
    for (int i{0}; i < 11; ++i)
        this->cpf[i] = cpf[i];
}

int Cpf::multiplyDigits(int *digits)
{
    int soma = 0;

    for (int index = 0, cont = 10; index < 9; --cont, ++index)
        soma += digits[index] * cont;

    return soma;
}

int Cpf::calculateSingleVerifier(int *cpfRep)
{
    int multD = multiplyDigits(cpfRep) % 11;
    int d = multD == 0 || multD == 1 ? 0 : 11 - multD;

    return d;
}

Verifiers Cpf::calculateVerifiers(int *cpf)
{
    int j = calculateSingleVerifier(cpf);

    for (int i{0}; i < 9; ++i)
        cpf[i] = cpf[i + 1];

    cpf[8] = j;

    int k = calculateSingleVerifier(cpf);

    Verifiers verif = Verifiers{j, k};

    return verif;
}

bool Cpf::isValid()
{
    int cpfWithoutVerifiers[9];

    for (int i = 0; i < 11; i++)
        if (this->cpf[i] > 9 || this->cpf[i] < 0)
            return false;

    for (int i = 0; i < 9; ++i)
        cpfWithoutVerifiers[i] = this->cpf[i];

    Verifiers verif = calculateVerifiers(cpfWithoutVerifiers);

    return verif.j == this->cpf[9] && verif.k == this->cpf[10];
}

bool operator==(const Cpf &c1, const Cpf &c2)
{
    for (int i{0}; i < 11; ++i)
        if (c1.cpf[i] != c2.cpf[i])
            return false;

    return true;
}

std::ostream &operator<<(std::ostream &os, const Cpf &c)
{
    std::map<int, std::string> ch{
        {2, "."},
        {5, "."},
        {8, "-"}};

    for (int i{0}; i < 11; ++i)
    {
        os << c.cpf[i] << ch[i];
    }

    return os;
}

Cpf Cpf::stringToCpf(std::string cpfString)
{
    int cpfArr[11];

    for (int i = 0; i < 11; ++i)
        cpfArr[i] = cpfString[i] - 48;

    return Cpf(cpfArr);
}
