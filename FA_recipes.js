//Event Calls
ServerEvents.recipes(event => {

event.remove({ id: 'minecraft:lodestone' })

event.shaped(
    Item.of('create:veridium', 8),
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'create:scoria',
        B: 'minecraft:cyan_dye'
    }
)

event.shaped(
    Item.of('minecraft:lodestone', 1),
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'minecraft:chiseled_stone_bricks',
        B: 'minecraft:iron_ingot'
    }
)

event.shaped(
    Item.of('create:asurine', 8),
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'create:scorchia',
        B: 'minecraft:blue_dye'
    }
)

event.shapeless(
  Item.of('create:rose_quartz', 1),
  [
    'minecraft:quartz',
    'fabrica_arcanum:spark_of_resonance'
  ]
)

event.custom({
  type: 'create:item_application',
  ingredients: [
    {
      item: 'ars_nouveau:stripped_red_archwood_wood'
    },
    {
      item: 'fabrica_arcanum:spark_of_resonance'
    }
  ],
  results: [
    {
      id: 'minecraft:redstone_block'
    }
  ]
})
event.custom({
  type: 'create:crushing',
  ingredients: [{
    item: 'minecraft:nether_bricks'
  }],
  results: [{
    id: 'minecraft:netherrack',
    count: 4
  }]
})

event.custom({
		type: 'create:compacting',
    heat_requirement: 'heated',
		ingredients: [
			{ item: 'minecraft:cobblestone' }
		],
		results: [{ 
      id: 'minecraft:cobbled_deepslate' 
    }],
	})

event.custom({
  type: 'create:item_application',
  ingredients: [
    {
      item: 'ars_nouveau:stripped_blue_archwood_wood'
    },
    {
      item: 'fabrica_arcanum:spark_of_lucidity'
    }
  ],
  results: [
    {
      id: 'minecraft:lapis_block'
    }
  ]
})

event.custom({
  type: 'create:cutting',
  ingredients: [
    {
      item: 'create:sturdy_sheet'
    }
  ],
  processing_time: 3000,
  results: [
    {
      count: 2,
      id: 'fabrica_arcanum:sturdy_rod'
    }
  ]
})

event.custom({
  type: 'create:mixing',
  heat_requirement: 'heated',
  ingredients: [
    {
      item: 'minecraft:charcoal'
    },
    {
      item: 'minecraft:charcoal'
    },
    {
      item: 'minecraft:charcoal'
    },
    {
      item: 'minecraft:charcoal'
    },
    {
      item: 'minecraft:charcoal'
    },
    {
      item: 'minecraft:charcoal'
    },
    {
      item: 'minecraft:charcoal'
    },
    {
      item: 'minecraft:charcoal'
    },
    {
      item: 'ars_nouveau:earth_essence'
    }
  ],
  results: [{
    count: 8,
    id: 'minecraft:coal'
  }]
})

event.custom({
        type: 'ars_nouveau:enchanting_apparatus',
        keepNbtOfReagent: false,
        pedestalItems: [
    {
      item: 'create:gearbox'
    },
    {
      item: 'create:cogwheel'
    },
    {
      tag: 'c:ingots/iron'
    },
    {
      item: 'create:large_cogwheel'
    },
    {
      item: 'create:large_cogwheel'
    },
    {
      item: 'create:large_cogwheel'
    },
    {
      item: 'create:large_cogwheel'
    },
    {
      item: 'create:large_cogwheel'
    },
  ],
    reagent: {
    item: 'create:golden_sheet'
  },
    result: {
    count: 1,
    id: 'create:precision_mechanism'
  },
    sourceCost: 2000
    })

event.custom({
        type: 'ars_nouveau:enchanting_apparatus',
        keepNbtOfReagent: false,
        pedestalItems: [
    {
      item: 'minecraft:coal'
    },
    {
      item: 'minecraft:iron_ingot'
    },
    {
      item: 'minecraft:gold_ingot'
    },
    {
      item: 'minecraft:emerald'
    },
    {
      item: 'minecraft:redstone'
    },
    {
      item: 'minecraft:amethyst_shard'
    },
    {
      item: 'minecraft:lapis_lazuli'
    },
    {
      item: 'minecraft:copper_ingot'
    },
  ],
    reagent: {
    item: 'fabrica_arcanum:sourceforged_ingot'
  },
    result: {
    count: 1,
    id: 'minecraft:diamond'
  },
    sourceCost: 0
    })

event.custom({
        type: 'ars_nouveau:enchanting_apparatus',
        keepNbtOfReagent: false,
        pedestalItems: [
    {
      item: 'minecraft:glowstone_dust'
    },
    {
      item: 'fabrica_arcanum:sourceforged_ingot'
    },
    {
      item: 'minecraft:magma_cream'
    },
    {
      item: 'fabrica_arcanum:sourceforged_ingot'
    },
    {
      item: 'minecraft:nether_wart'
    },
    {
      item: 'fabrica_arcanum:sourceforged_ingot'
    },
    {
      item: 'minecraft:diamond'
    },
    {
      item: 'fabrica_arcanum:sourceforged_ingot'
    },
    {
      item: 'create:polished_rose_quartz'
    },
    {
      item: 'fabrica_arcanum:sourceforged_ingot'
    },
    {
      item: 'ars_elemancy:lava_essence'
    },
    {
      item: 'fabrica_arcanum:sourceforged_ingot'
    },
  ],
    reagent: {
    item: 'minecraft:lodestone'
  },
    result: {
    count: 1,
    id: 'minecraft:ancient_debris'
  },
    sourceCost: 10000
    })

event.custom({
        type: 'ars_nouveau:enchanting_apparatus',
        keepNbtOfReagent: false,
        pedestalItems: [
    {
      item: 'ars_elemental:anima_essence'
    },
    {
      item: 'ars_nouveau:wilden_horn'
    },
    {
      item: 'ars_nouveau:wilden_spike'
    },
    {
      item: 'ars_nouveau:wilden_wing'
    },
    {
      item: 'ars_elemental:mark_of_mastery'
    },
  ],
    reagent: {
    item: 'ars_nouveau:ritual_wilden_summon'
  },
    result: {
    count: 1,
    id: 'ars_nouveau:wilden_tribute'
  },
    sourceCost: 20000
    })

event.custom({
  type: 'create:filling',
  ingredients: [
    {
      item: 'fabrica_arcanum:dormant_sourceforged_ingot'
    },
    {
      type: 'fluid_stack',
      amount: 1000,
      fluid: 'starbunclemania:source_fluid'
    }
  ],
  results: [
    {
      id: 'fabrica_arcanum:sourceforged_ingot'    }
  ]
})

//Imbuement Chamber Recipes Go Here
const recipes = [
        {
            input: { tag: 'c:ingots/brass' },
            output: { id: 'fabrica_arcanum:amethyst_infused_brass'},
            pedestalItems: [
                { item: 'minecraft:amethyst_shard'},
                { item: 'minecraft:amethyst_shard'},
                { item: 'minecraft:amethyst_shard'}
            ],
            source: 2000,
            id: 'af:ars_nouveau/imbuement/infused_brass'
        },
        {
            input: { item: 'minecraft:glass_bottle' },
            output: { id: 'minecraft:honey_bottle'},
            pedestalItems: [
                { item: 'minecraft:campfire'},
                { item: 'ars_elemental:anima_essence'},
                { item: 'minecraft:beehive'}
            ],
            source: 2000,
            id: 'af:ars_nouveau/imbuement/honey_bottle'
        },
        {
            input: { item: 'fabrica_arcanum:sturdy_rod' },
            output: { id: 'minecraft:blaze_rod'},
            pedestalItems: [
                { item: 'minecraft:blaze_powder'},
                { item: 'ars_elemental:anima_essence'},
                { item: 'ars_elemancy:cinder_essence'}
            ],
            source: 5000,
            id: 'af:ars_nouveau/imbuement/blaze_rod'
        },
        {
            input: { item: 'minecraft:red_dye' },
            output: { id: 'fabrica_arcanum:spark_of_resonance'},
            pedestalItems: [
                { item: 'create:wand_of_symmetry'},
                { item: 'minecraft:deepslate_redstone_ore'},
                { item: 'ars_elemental:mark_of_mastery'}
            ],
            source: 5000,
            id: 'af:ars_nouveau/imbuement/spark_of_resonance'
        },
        {
            input: { item: 'minecraft:blue_dye' },
            output: { id: 'fabrica_arcanum:spark_of_lucidity'},
            pedestalItems: [
                { item: 'create:wand_of_symmetry'},
                { item: 'minecraft:deepslate_lapis_ore'},
                { item: 'ars_elemental:mark_of_mastery'}
            ],
            source: 5000,
            id: 'af:ars_nouveau/imbuement/spark_of_lucidity'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:imbuement';
        event.custom(recipe).id(recipe.id);
    });

event.custom({
  type: 'create:sequenced_assembly',
  ingredient: {
    item: 'ars_nouveau:sourcestone'
  },
  loops: 3,
  results: [
    {
      chance: 100.0,
      id: 'fabrica_arcanum:dormant_sourceforged_ingot'
    },
  ],
  sequence: [
    {
      type: 'create:deploying',
      ingredients: [
        {
          item: 'fabrica_arcanum:incomplete_sourceforged_ingot'
        },
        {
          item: 'fabrica_arcanum:amethyst_infused_brass'
        }
      ],
      results: [
        {
          id: 'fabrica_arcanum:incomplete_sourceforged_ingot'
        }
      ]
    },
    {
      type: 'create:cutting',
      ingredients: [
        {
          item: 'fabrica_arcanum:incomplete_sourceforged_ingot'
        },
      ],
      results: [
        {
          id: 'fabrica_arcanum:incomplete_sourceforged_ingot'
        }
      ]
    },
    {
      type: 'create:pressing',
      ingredients: [
        {
          item: 'fabrica_arcanum:incomplete_sourceforged_ingot'
        },
      ],
      results: [
        {
          id: 'fabrica_arcanum:incomplete_sourceforged_ingot'
        }
      ]
    }
  ],
  transitional_item: {
    id: 'fabrica_arcanum:incomplete_sourceforged_ingot'
  }
})    

event.custom({
  type: 'create:mixing',
  heat_requirement: 'heated',
  ingredients: [
    {
      item: 'minecraft:charcoal'
    },
    {
      item: 'minecraft:charcoal'
    },
    {
      item: 'minecraft:charcoal'
    },
    {
      item: 'minecraft:charcoal'
    },
    {
      item: 'minecraft:charcoal'
    },
    {
      item: 'minecraft:charcoal'
    },
    {
      item: 'minecraft:charcoal'
    },
    {
      item: 'minecraft:charcoal'
    },
    {
      item: 'ars_nouveau:earth_essence'
    }
  ],
  results: [{
    count: 8,
    id: 'minecraft:coal'
  }]
})

  console.log('Hello! The recipe event has fired!')
})