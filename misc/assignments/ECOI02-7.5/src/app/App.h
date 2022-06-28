/**
 * @author Henrique Cotta
 * @date 22 Jul. 2021
 */

#ifndef APP_H
#define APP_H

#include "../menu/Menu.h"
#include "../menu/MenuController.h"

class App
{
private:
    Menu menu;
    MenuController controller;

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
