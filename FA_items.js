//Item Modifications
ItemEvents.modification(event => {
  event.modify('minecraft:ender_pearl', item => {
    item.maxStackSize = 64
  })
  event.modify('minecraft:egg', item => {
    item.maxStackSize = 64
  })
})

//New Items
StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('fabrica_arcanum:amethyst_infused_brass').texture('kubejs:item/amethyst_infused_brass')
  event.create('fabrica_arcanum:sturdy_rod').texture('kubejs:item/sturdy_rod')
  event.create('fabrica_arcanum:spark_of_resonance').texture('kubejs:item/spark_of_resonance')
  event.create('fabrica_arcanum:spark_of_lucidity').texture('kubejs:item/spark_of_lucidity')
  event.create('fabrica_arcanum:sourceforged_ingot').texture('kubejs:item/sourceforged_ingot')
  event.create('fabrica_arcanum:dormant_sourceforged_ingot').texture('kubejs:item/sourceforged_ingot_dormant')
  event.create('fabrica_arcanum:incomplete_sourceforged_ingot').texture('kubejs:item/sourceforged_ingot_incomplete')
})