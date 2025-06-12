// File: code_modules/fx/decal_to_bone__2025-06-12_v1.cpp
// Purpose: Attaches gore decals to specific bones for blood trail realism.
// Status: @REAL@ with decal logic.
// Swarm Tag: gore_fx, decal_attach

#include "script.h"

void AttachDecalToBone(Ped ped, int boneIndex, const char* decalName) {
    Vector3 pos = GET_PED_BONE_COORDS(ped, boneIndex, 0.0f, 0.0f, 0.0f);
    USE_PARTICLE_FX_ASSET("blood");
    START_PARTICLE_FX_NON_LOOPED_AT_COORD(decalName, pos.x, pos.y, pos.z, 0.0, 0.0, 0.0, 1.0, false, false, false);
}
