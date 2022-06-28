/**
 * @author Henrique Cotta
 * @date 22 Jul. 2021
 */

#ifndef CSV_PARSER_H
#define CSV_PARSER_H

#include <string>
#include <vector>

class CsvParser
{
private:
    std::string filePath;
    std::string delimeter;

public:
    CsvParser(std::string filePath, std::string delimiter);
    std::vector<std::vector<std::string>> readData();
};

#endif
