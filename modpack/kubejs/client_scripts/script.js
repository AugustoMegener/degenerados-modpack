// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	event.hide(/tfc:ceramic\/.*head_mold/)
	event.hide(/tfc:ceramic\/unfired.*head_mold/)
	
	event.hide(/tfc:ceramic\/.*blade_mold/)
	event.hide(/tfc:ceramic\/unfired.*blade_mold/)
})