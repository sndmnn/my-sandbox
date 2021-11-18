/**
 * @author Henrique Cotta
 * @date 22 Jul. 2021
 */

#include <iostream>
#include <map>
#include "Date.h"

Date::Date() {}

Date::Date(int day, int month, int year)
{
    this->day = day;
    this->month = month;
    this->year = year;
}

int Date::getYear()
{
    return this->year;
}

int Date::getMonth()
{
    return this->month;
}

int Date::getDay()
{
    return this->day;
}

bool Date::isLeapYear()
{
    return (this->year % 4 == 0 && this->year % 100 != 0) || this->year % 400 == 0;
}

bool Date::isValid()
{
    if (this->day > 31 || this->day < 1 || this->month > 12 || this->month < 1 || this->year <= 0)
        return false;

    std::map<int, int> monthDays = {
        {1, 31},
        {2, this->isLeapYear() ? 29 : 28},
        {3, 31},
        {4, 30},
        {5, 31},
        {6, 30},
        {7, 31},
        {8, 31},
        {9, 30},
        {10, 31},
        {11, 30},
        {12, 31},
    };

    int monthMaxDays = monthDays.at(this->month);

    if (this->day > monthMaxDays)
        return false;

    return true;
}

std::ostream &operator<<(std::ostream &os, const Date &d)
{
    os << d.day << "/" << d.month << "/" << d.year;
    return os;
}
