/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#ifndef APP_H
#define APP_H

#include "../menu/Menu.h"

class App
{
private:
    Menu menu;

public:
    App();

    /**
     * Creates and sets up the application menu adding option descriptions and their handlers.
     */
    void setup();

    /**
     * Executes the application loop
     */
    void execute();
};

#endif
