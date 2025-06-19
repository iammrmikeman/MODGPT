#include "main.h"
BOOL APIENTRY DllMain(HMODULE hModule, DWORD ul_reason_for_call, LPVOID lpReserved) {
    if (ul_reason_for_call == DLL_PROCESS_ATTACH) {
        CreateThread(nullptr, 0, reinterpret_cast<LPTHREAD_START_ROUTINE>(MainThread), nullptr, 0, nullptr);
    }
    return TRUE;
}
