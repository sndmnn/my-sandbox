#include <stdio.h>
#include <limits.h>

#define IN  1
#define OUT 0

#define LONGEST_WORD_LENGTH 189819
#define LONGEST_WORD_DIGITS 6

void histogram_horizontal() {
    int word_lengths[LONGEST_WORD_LENGTH];
    int c, state = OUT, max_count = 0;

    for (int i = 0; i < LONGEST_WORD_LENGTH; ++i)
        word_lengths[i] = 0;

    int cwc = 0;

    while ((c = getchar()) != EOF) {
        if (cwc > max_count)
            max_count = cwc;

        if (c == ' ' || c == '\n' || c == '\t') {
            state = OUT;
            ++word_lengths[cwc];
            cwc = 0;
        }
        else {
            state = IN;
            ++cwc;
        }
    }

    for (int i = 0; i <= max_count; ++i) {
        printf("% *d ", LONGEST_WORD_DIGITS, i);

        for (int j = 0; j < word_lengths[i]; ++j) {
            putchar('o');
        }

        putchar('\n');
    }
}

void histogram_vertical() {
    int word_lengths[LONGEST_WORD_LENGTH];
    int c, state = OUT, max_count = 0;

    for (int i = 0; i < LONGEST_WORD_LENGTH; ++i)
        word_lengths[i] = 0;

    int cwc = 0;

    while ((c = getchar()) != EOF) {
        if (cwc > max_count)
            max_count = cwc;

        if (c == ' ' || c == '\n' || c == '\t') {
            ++word_lengths[cwc];
            cwc = 0;
            state = OUT;
        }
        else {
            state = IN;
            ++cwc;
        }
    }

    int max_word_number = 0;

    for (int i = 0; i <= max_count; ++i)
        if (word_lengths[i] > max_word_number)
            max_word_number = word_lengths[i];

    for (int i = max_word_number; i >= 0; --i) {
        for (int j = 0; j < max_count; ++j) {
            if (word_lengths[j] >= i)
                putchar('o');
            else
                putchar(' ');
        }

        putchar('\n');
    }
}

int main() {
    histogram_vertical();
}
