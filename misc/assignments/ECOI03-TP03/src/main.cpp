/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#include <iostream>

#include "./app/App.h"

int main()
{
    std::setlocale(LC_ALL, "pt_BR.UTF-8");

    App app{};

    app.setup();
    app.execute();

    return EXIT_SUCCESS;
}
