/**
 * @author Henrique Cotta
 * @date 22 Jul. 2021
 */

#include <iostream>
#include <fstream>
#include "CsvParser.h"

CsvParser::CsvParser(std::string filePath, std::string delimiter)
{
    this->filePath = filePath;
    this->delimeter = delimeter;
}

std::vector<std::vector<std::string>> CsvParser::readData()
{
    std::ifstream fs = std::ifstream(this->filePath);
    std::vector<std::vector<std::string>> fileInfo;

    while (!fs.eof())
    {
        std::string cpf;
        std::string day, month, year;
        std::string name;
        std::string height;
        std::string weight;

        std::getline(fs, cpf, ',');
        std::getline(fs, day, ',');
        std::getline(fs, month, ',');
        std::getline(fs, year, ',');
        std::getline(fs, name, ',');
        std::getline(fs, height, ',');
        std::getline(fs, weight, '\n');

        std::vector<std::string> lineInfo;

        lineInfo.push_back(cpf);
        lineInfo.push_back(day);
        lineInfo.push_back(month);
        lineInfo.push_back(year);
        lineInfo.push_back(name);
        lineInfo.push_back(height);
        lineInfo.push_back(weight);

        fileInfo.push_back(lineInfo);
    }

    fs.close();

    return fileInfo;
}
