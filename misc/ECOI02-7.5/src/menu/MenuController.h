/**
 * @author Henrique Cotta
 * @date 22 Jul. 2021
 */

#ifndef MENU_CONTROLLER_H
#define MENU_CONTROLLER_H

#include "../person/PersonRepository.h"

class MenuController
{
private:
    PersonRepository dataStore;

public:
    MenuController();

    /**
     * Handles user CPF input
     */
    Cpf inputCpf();

    /**
     * Handles user Date input
     */
    Date inputDate();

    /**
     * Handles user inputs for every property of `Person` 
     */
    Person inputPerson();

    /**
     * Handles user input and adds a new `Person` to the data store
     */
    void insertPerson();

    /**
     * Prints every registered `Person`
     */
    void index();

    /**
     * Handles user input and finds a person by its CPF
     */
    void findPersonByCpf();

    /**
     * Prints every registered `Person` that is overweight
     */
    void findPeopleOverweight();

    /**
     * Prints the highest registered `Person`
     */
    void findHighestPerson();

    /**
     * Handles user input and compares two people by their age
     */
    void findOlderPersonByCpf();

    /**
     * Reads data from a CSV file and adds everything that's valid to the data store
     */
    void readDataFromCsv(std::string filePath);
};

#endif
