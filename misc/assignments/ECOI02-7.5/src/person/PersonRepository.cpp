#include "PersonRepository.h"

void PersonRepository::addPerson(Person newPerson)
{
    this->people.push_back(newPerson);
}

std::vector<Person> PersonRepository::index()
{
    return this->people;
}

std::vector<Person> PersonRepository::find(std::function<bool(Person p)> predicate)
{
    std::vector<Person> results;

    copy_if(
        this->people.begin(),
        this->people.end(),
        back_inserter(results),
        predicate);

    return results;
}
