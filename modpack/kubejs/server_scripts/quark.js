// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Quark reloaded!')

onEvent('recipes', event => {
	// Change recipes here

    // https://terrafirmacraft.github.io/Documentation/1.18.x/data/recipes/#knapping
    
    // Bundle
    event.remove({"output": "minecraft:bundle"})
    event.custom(
        {
            "type": "tfc:leather_knapping",
            "outside_slot_required": true,
            "pattern": [
                "  X  ",
                " XXX ",
                "XXXXX",
                "XXXXX",
                " XXX "
              ],
            "result": {
                "item": "minecraft:bundle"
            }
        }
    )

    // Feeding Trough
    event.remove({"output": "quark:feeding_trough"})
    event.shaped(
        "quark:feeding_trough",
        [
            "F F",
            "L L",
            "LLL"
        ],
        {
            F: "#forge:fence_gates/wooden",
            L: "#tfc:lumber"
        }
    )

    // Remove chute
    event.remove({"output": "quark:chute"})

    // Remove iron rod
    event.remove({"output": "quark:iron_rod"})
})

onEvent('item.tags', event => {
})