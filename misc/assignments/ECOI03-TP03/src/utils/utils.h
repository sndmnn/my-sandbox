/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#ifndef UTILS_H
#define UTILS_H

namespace utils
{
    /**
     * Handles unexpected user input type
     */
    template <typename T>
    T handleNumericInput()
    {
        T value;

        while (!(std::cin >> value))
        {
            std::cout << "Por favor insira um valor numérico" << std::endl;
            std::cin.clear();
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
        }

        return value;
    };
}

#endif
