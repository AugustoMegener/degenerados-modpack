// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
    event.remove({output: "botania:fertilizer"})
    event.custom(
        {
            "type": "tfc:quern",
            "ingredient": {
                "tag": "minecraft:saplings"
            },
            "result": {
                "item": "botania:fertilizer",
                "count": 4
            }
        }
    )
})

onEvent('item.tags', event => {
})