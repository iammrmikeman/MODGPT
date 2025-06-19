#include "main.h"
void MainThread() {
    while (true) {
        // Example logic: minimal screen flash using known native
        DRAW_RECT(0.5f, 0.5f, 1.0f, 1.0f, 255, 0, 0, 100);
        Sleep(5000);
    }
}
