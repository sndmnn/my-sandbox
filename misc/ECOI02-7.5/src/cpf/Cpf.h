/**
 * @author Henrique Cotta
 * @date 22 Jul. 2021
 */

#ifndef CPF_H
#define CPF_H

#include "Verifiers.h"

class Cpf
{
private:
    int cpf[11];

    virtual int multiplyDigits(int *digits);
    virtual int calculateSingleVerifier(int *cpfRep);
    virtual Verifiers calculateVerifiers(int *cpf);

public:
    Cpf();
    Cpf(int *cpf);
    virtual bool isValid();
    friend bool operator==(const Cpf &c1, const Cpf &c2);
    friend std::ostream &operator<<(std::ostream &os, const Cpf &c);

    static Cpf stringToCpf(std::string cpfString);
};

#endif
