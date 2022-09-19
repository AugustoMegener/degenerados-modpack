// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	[
        'pickaxe_head', 
        'propick_head', 
        'axe_head',
        'shovel_head',
        'hoe_head',
        'chisel_head',
        'hammer_head',
        'saw_blade',
        'javelin_head',
        'sword_blade',
        'mace_head',
        'knife_blade',
        'scythe_blade'
    ].forEach((i) => {
        event.remove({"output": "tfc:ceramic/" + i + "_mold"})
    })
})

onEvent('item.tags', event => {
})