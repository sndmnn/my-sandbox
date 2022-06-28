/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#ifndef OPTION_H
#define OPTION_H

#include <string>
#include <functional>

struct Option
{
    std::string description;
    std::function<void()> handle;
};

#endif
