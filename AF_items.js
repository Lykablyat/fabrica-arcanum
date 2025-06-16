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
  event.create('amethyst_infused_brass').texture('kubejs:item/amethyst_infused_brass')
})