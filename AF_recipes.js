//Event Calls
ServerEvents.recipes(event => {
//Imbuement Chamber Recipes Go Here
const recipes = [
        {
            input: { tag: 'c:ingots/brass' },
            output: { id: 'kubejs:amethyst_infused_brass'},
            pedestalItems: [
                { item: 'minecraft:amethyst_shard'},
                { item: 'minecraft:amethyst_shard'},
                { item: 'minecraft:amethyst_shard'}
            ],
            source: 2000,
            id: 'af:ars_nouveau/imbuement/infused_brass'
        },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:imbuement';
        event.custom(recipe).id(recipe.id);
    });

  console.log('Hello! The recipe event has fired!')
})