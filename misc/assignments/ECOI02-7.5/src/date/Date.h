/**
 * @author Henrique Cotta
 * @date 22 Jul. 2021
 */

#ifndef DATE_H
#define DATE_H

class Date
{
private:
    int day;
    int month;
    int year;

public:
    Date();
    Date(int day, int month, int year);
    int getYear();
    int getMonth();
    int getDay();
    bool isLeapYear();
    bool isValid();
    int calculateAge();
    friend std::ostream &operator<<(std::ostream &os, const Date &d);
};

#endif
