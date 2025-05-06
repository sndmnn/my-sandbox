#include <stdio.h>

#define IN  1
#define OUT 0

void counter() {
    int c, nl, nw, nc, state;

    c = nl = nw = nc = 0;
    state = OUT;

    while ((c = getchar()) != EOF) {
        ++nc;

        if (c == '\n')
            ++nl;
        if (c == ' ' || c == '\n' || c == '\t')
            state = OUT;
        else if (state == OUT) {
            state = IN;
            ++nw;
        }
    }

    printf("Lines: %d\n", nl);
    printf("Words: %d\n", nw);
    printf("Characters: %d\n", nc);
}
            
void print_one_word_per_line() {
    int c = 0, state = OUT;

    while ((c = getchar()) != EOF) { 
        if (c == ' ' || c == '\n' || c == '\t') {
            state = OUT;
            putchar('\n');
        }
        else {
            state = IN;
            putchar(c);
        }
    }
}

int main() {
    counter();
}

