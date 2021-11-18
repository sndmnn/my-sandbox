#ifndef PERSON_REPOSITORY_H
#define PERSON_REPOSITORY_H

#include <vector>
#include <functional>
#include <algorithm>
#include "Person.h"

class PersonRepository
{
private:
    std::vector<Person> people;

public:
    /**
     * Adds a new entity to the data store
     */
    void addPerson(Person newPerson);

    /**
     * Returns every entity registered
     */
    std::vector<Person> index();

    /**
     * For every entity registered executes a function. If the return of the function is `true` adds that entity to the return `vector` 
     */
    std::vector<Person> find(std::function<bool(Person p)> predicate);
};

#endif
