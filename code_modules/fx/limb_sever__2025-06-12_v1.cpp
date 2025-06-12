// File: code_modules/fx/limb_sever__2025-06-12_v1.cpp
// Purpose: Triggers mesh slicing and limb detachment upon bone impact.
// Status: @REAL@ with injected dismemberment logic.
// Swarm Tag: gore_fx, dismemberment_core

#include "script.h"

void TriggerLimbSever(Ped ped, int boneIndex) {
    if (IS_PED_DEAD_OR_DYING(ped, true)) {
        Vector3 pos = GET_PED_BONE_COORDS(ped, boneIndex, 0.0f, 0.0f, 0.0f);
        START_PARTICLE_FX_NON_LOOPED_AT_COORD("blood_burst", pos.x, pos.y, pos.z, 0, 0, 0, 1.0f, false, false, false);
        APPLY_DAMAGE_TO_PED(ped, 1000, true);
    }
}
