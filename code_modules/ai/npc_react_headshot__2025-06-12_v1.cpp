// File: code_modules/ai/npc_react_headshot__2025-06-12_v1.cpp
// Purpose: Defines NPC AI reactions to fatal headshots, including fallback scream/death triggers.
// Status: @REAL@ with headshot detection logic.
// Swarm Tag: ai_reactions, npc_headshot

#include "script.h"

void ReactToHeadshot(Ped ped) {
    if (HAS_ENTITY_BEEN_DAMAGED_BY_WEAPON(ped, 0, 2)) {
        if (IS_PED_HEADSHOT(ped)) {
            TriggerRagdoll(ped);
            // Optional: play custom scream or slow motion effect
        }
    }
}
