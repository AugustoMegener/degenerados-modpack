// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
    // Remove molds.
    event.remove(
        {output: /tfc:ceramic\/.*head_mold/}
    )
    event.remove(
        {output: /tfc:ceramic\/unfired.*head_mold/}
    )

    event.remove(
        {output: /tfc:ceramic\/.*blade_mold/}
    )
    event.remove(
        {output: /tfc:ceramic\/unfired.*blade_mold/}
    )
    
    // Change Copper anvil recipe.
    event.remove({output: "tfc:metal/anvil/copper"})
    event.custom(
        {
            "type": "tfc:welding",
            "first_input": {
                "item": "tfc:metal/double_ingot/copper"
            },
            "second_input": {
                "item": "tfc:metal/double_ingot/copper"
            },
            "tier": 0,
            "result": {
                "item": "tfc:metal/anvil/copper"
            }
        }
    )
})

onEvent('item.tags', event => {
})