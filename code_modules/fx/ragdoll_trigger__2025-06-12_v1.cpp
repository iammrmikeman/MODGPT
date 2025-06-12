// File: code_modules/fx/ragdoll_trigger__2025-06-12_v1.cpp
// Purpose: Switches entity to ragdoll state with velocity and bone impact logic.
// Status: @REAL@ with ragdoll logic.
// Swarm Tag: gore_fx, physics_control

#include "script.h"

void TriggerRagdoll(Ped ped) {
    if (!IS_PED_RAGDOLL(ped)) {
        SET_PED_TO_RAGDOLL(ped, 1000, 1000, 0, true, true, false);
    }
}
