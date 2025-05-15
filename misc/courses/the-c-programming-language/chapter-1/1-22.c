#include <stdio.h>
#include <stdlib.h>

// Breaks on first blank character after the character limit
void break_on_first_blank(int max_chars) {
    int c, char_counter = 0;

    while ((c = getchar()) != EOF) {
        putchar(c);
        ++char_counter;

        if (char_counter >= max_chars && (c == ' ' || c == '\t')) {
            putchar('\n');
            char_counter = 0;
        }
    }
}

// Breaks on first blank before the character limit
void break_before_max() {}

int main (int argc, char** argv) {
    int max_chars = atoi(argv[1]); 

    return 0;
}
