#include <stdlib.h>
#include <stdio.h>

int main (int argc, char** argv) {
    int min_spaces = atoi(argv[1]);
    int c;

    int space_counter = 0;
    int tabs = 0;
    int spaces = 0;

    while ((c = getchar()) != EOF) {
        if (c == ' ') {
            ++space_counter;
        }
        else if (c == '\n') {
            putchar(c);
            printf("Tabs: %d\n", tabs);
            printf("Spaces: %d\n", spaces);
        }
        else if (space_counter > 0) {
            tabs = space_counter / min_spaces;
            spaces = space_counter % min_spaces;

            for (int i = 0; i < tabs; ++i)
                putchar('\t');

            for (int i = 0; i < spaces; ++i)
                putchar(' ');

            space_counter = 0;
            putchar(c);
        }
        else {
            putchar(c);
        }
    }

    return 0;
}
