#include <stdio.h>
#include <limits.h>

#define UPPER_LIMIT 300.0
#define LOWER_LIMIT   0.0
#define INCREMENT    10.0

float f2c(float f) {
    return (5.0 / 9.0) * (f - 32.0);
}

void f2c_test() {
    for (float f = LOWER_LIMIT; f <= UPPER_LIMIT; f += INCREMENT)
        printf("%3.0f %6.1f\n", f, f2c(f));
}

// --------------------------------------------------------------------------------------------

long get_line(char s[], int len) {
    int c, i = 0;
    long count = 0;
 
    while ((c = getchar()) != EOF && c != '\n') {
        if (i < len - 2) {
            s[i] = c;
            ++i;
        }

        ++count;
    }
 
    if (c == '\n') {
        s[i] = c;
        ++i;
    }

    s[i] = '\0';

    return count;
}

void copy(char from[], char to[]) {
    for (int i = 0; (to[i] = from[i]) != '\0'; ++i)
        ;
}

#define MAX_LINE_LENGTH 1000

void print_longest() {
    char s[MAX_LINE_LENGTH], longest_line[MAX_LINE_LENGTH];
    long len = 0, max = 0;

    while ((len = get_line(s, MAX_LINE_LENGTH)) > 0) {
        if (len > max) {
            max = len;
            copy(s, longest_line);
        }
    }

    if (max > 0)
        printf("%s", longest_line);
}

#define MAX_LINES_OVER_80 10

void print_over_80() {
    char s[MAX_LINE_LENGTH], longest_lines[MAX_LINES_OVER_80][MAX_LINE_LENGTH];
    int lli = 0;
    long len = 0, max = 0;

    while ((len = get_line(s, MAX_LINE_LENGTH)) > 0) {
        if (len > max) {
            max = len;
            copy(s, longest_lines[lli]);
            ++lli;
        }
    }

    if (max > 0)
        for (int i = 0; i < MAX_LINES_OVER_80; ++i)
        printf("%s", longest_lines[i]);

}

// --------------------------------------------------------------------------------------------

void trim(char s[], int len) {
    int last_seen = 0;
    int first_seen = -1;

    // find first char after trailing and last char before trailing spaces
    for (int i = 0; i < len; ++i) {
        if (s[i] != ' ' && s[i] != '\t' && s[i] != '\0' && s[i] != '\n') {
            last_seen = i;

            if (first_seen == -1)
                first_seen = i;
        }
    }

    // skew the string
    int i = first_seen;
    int ti = 0;

    while (i <= last_seen) {
        s[ti] = s[i];

        ++i;
        ++ti;
    }

    // null the rest of the string
    for (int j = ti; j < len; ++j)
        s[j] = '\0';

}

void remove_trailing() {
    char s[MAX_LINE_LENGTH];

    for (int i = 0; i < MAX_LINE_LENGTH; ++i)
        s[i] = '\0';

    while (get_line(s, MAX_LINE_LENGTH) > 0) {
        trim(s, MAX_LINE_LENGTH);
        printf("%s(end)\n", s);
    }
}

// --------------------------------------------------------------------------------------------

void reverse(char s[]) {
    int size;

    for (size = 0; s[size] != '\0'; ++size)
        ;

    char r[size];

    for (int i = 0; i < size; ++i)
        r[i] = s[size - 1 - i];

    for (int i = 0; i < size; ++i)
        s[i] = r[i];

    s[size] = '\0';
}

void reverse_input() {
    char s[MAX_LINE_LENGTH];

    for (int i = 0; i < MAX_LINE_LENGTH; ++i)
        s[i] = '\0';

    while (get_line(s, MAX_LINE_LENGTH) > 0) {
        reverse(s);
        printf("%s\n", s);
    }
}

int main() {
    reverse_input();
    return 0;
}
