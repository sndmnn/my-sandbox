#include <stdio.h>

void example_getchar() {
    // We use type int, though the type char is commonly used for characters
    // because char cannot accommodate the EOF symbol.
    int c = getchar();

    while (c != EOF) {
        putchar(c);
        c = getchar();
    }
}

void compact_getchar() {
    int c;
    
    // In C assigments are expresions that evaluate to the value of the left
    // operand after the assignment.
    // It's also important to note that the parenthesis around the assignment
    // expression are necessary because of operator precedence.
    while ((c = getchar()) != EOF)
        putchar(c);
}

void eof_test() {
    // Value of `c` will be 0 or 1 depending on if the return value of 
    // `getchar()` is `EOF`.
    int c = getchar() != EOF;
    printf("%d\n", c);
}

void char_count() {
    long nc;

    for (nc = 0; getchar() != EOF; ++nc)
        ;

    printf("%ld\n", nc);
}

void line_count() {
    int c;
    long nl;

    while((c = getchar()) != EOF)
        if (c == '\n')
            ++nl;
    
    printf("%ld\n", nl);
}

void verify_slash_n() {
    // A character written between single quotes represents an integer value equal
    // to the numeric value of the character in the machine's character set.
    int c = '\n';

    printf("%d\n", c);
}

void blanks_tabs_new_lines() {
    int c;
    long b, t, nl;

    while ((c = getchar()) != EOF) {
        if (c == ' ')
            ++b;
        else if (c == '\t')
            ++t;
        else if (c == '\n')
            ++nl;
    }

    printf("Blanks: %ld\n", b);
    printf("Tabs: %ld\n", t);
    printf("New Lines: %ld\n", nl);
}

void replace_blanks() {
    int cc, pc;
     
    while ((cc = getchar()) != EOF) {
        if (cc == ' ' && pc == ' ')
            continue;

        pc = cc;
        putchar(cc);
    }
}

void replace_blanks_tabs_new_lines() {
    int c;

    while ((c = getchar()) != EOF) {
        if (c == '\t')
            printf("\\t"); 
        else if (c == '\b')
            printf("\\b");
        else if (c == '\\')
            printf("\\\\");
    } 
}

int main() {
    replace_blanks_tabs_new_lines();
}
