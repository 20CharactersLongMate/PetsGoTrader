document.addEventListener('DOMContentLoaded', () => {
  const itemGrid = document.getElementById('itemGrid');
  const selectedItemsContainer = document.getElementById('selectedItems');
  const itemSearch = document.getElementById('itemSearch');
  let selectedItems = [];

  // Sample item data (replace with your actual game items)
const items = [
    {
        "id": 1,
        "name": "A-36",
        "image": "A-36.png",
        "description": "A a-36.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 2,
        "name": "Abyssal Dolphin",
        "image": "Abyssal_Dolphin.webp",
        "description": "A abyssal dolphin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 3,
        "name": "Acorn",
        "image": "Acorn.webp",
        "description": "A acorn.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 4,
        "name": "Agony",
        "image": "Agony.webp",
        "description": "A agony.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 5,
        "name": "Albino Bat",
        "image": "Albino_Bat.webp",
        "description": "A albino bat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 6,
        "name": "Alien Parasite",
        "image": "Alien_Parasite.webp",
        "description": "A alien parasite.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 7,
        "name": "Ancient Dragon",
        "image": "Ancient_Dragon.webp",
        "description": "A ancient dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 8,
        "name": "Angelus",
        "image": "Angelus.webp",
        "description": "A angelus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 9,
        "name": "Angel Cat",
        "image": "Angel_Cat.webp",
        "description": "A angel cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 10,
        "name": "Angel Dog",
        "image": "Angel_Dog.webp",
        "description": "A angel dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 11,
        "name": "Angry Yeti",
        "image": "Angry_Yeti.webp",
        "description": "A angry yeti.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 12,
        "name": "Arcane Cat",
        "image": "Arcane_Cat.webp",
        "description": "A arcane cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 13,
        "name": "Arctic Fox",
        "image": "Arctic_Fox.webp",
        "description": "A arctic fox.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 14,
        "name": "Armadillo",
        "image": "Armadillo.webp",
        "description": "A armadillo.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 15,
        "name": "Autumn Retriever",
        "image": "Autumn_Retriever.png",
        "description": "A autumn retriever.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 16,
        "name": "Autumn Teddy Bear",
        "image": "Autumn_Teddy_Bear.png",
        "description": "A autumn teddy bear.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 17,
        "name": "Avenging Griffin",
        "image": "Avenging_Griffin.webp",
        "description": "A avenging griffin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 18,
        "name": "Axolotl",
        "image": "Axolotl.webp",
        "description": "A axolotl.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 19,
        "name": "Balloon Cat",
        "image": "Balloon_Cat.webp",
        "description": "A balloon cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 20,
        "name": "Banana",
        "image": "Banana.webp",
        "description": "A banana.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 21,
        "name": "Basketball Retriever",
        "image": "Basketball_Retriever.webp",
        "description": "A basketball retriever.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 22,
        "name": "Bat",
        "image": "Bat.webp",
        "description": "A bat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 23,
        "name": "Beagle",
        "image": "Beagle.png",
        "description": "A beagle.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 24,
        "name": "Bear",
        "image": "Bear.webp",
        "description": "A bear.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 25,
        "name": "Bearserker",
        "image": "Bearserker.webp",
        "description": "A bearserker.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 26,
        "name": "Beaver",
        "image": "Beaver.png",
        "description": "A beaver.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 27,
        "name": "Bee",
        "image": "Bee.webp",
        "description": "A bee.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 28,
        "name": "Bison",
        "image": "Bison.webp",
        "description": "A bison.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 29,
        "name": "Black Hole Kitsune",
        "image": "Black_Hole_Kitsune.webp",
        "description": "A black hole kitsune.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 30,
        "name": "Black Widow",
        "image": "Black_Widow.webp",
        "description": "A black widow.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 31,
        "name": "Blobenstein",
        "image": "Blobenstein.webp",
        "description": "A blobenstein.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 32,
        "name": "Blobfish",
        "image": "Blobfish.webp",
        "description": "A blobfish.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 33,
        "name": "Bloo Cat",
        "image": "Bloo_Cat.webp",
        "description": "A bloo cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 34,
        "name": "Blossom Koi Fish",
        "image": "Blossom_Koi_Fish.png",
        "description": "A blossom koi fish.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 35,
        "name": "Blue Fish",
        "image": "Blue_Fish.webp",
        "description": "A blue fish.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 36,
        "name": "Blue Fluffy",
        "image": "Blue_Fluffy.webp",
        "description": "A blue fluffy.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 37,
        "name": "Bobcat",
        "image": "Bobcat.webp",
        "description": "A bobcat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 38,
        "name": "Broomstick Cat",
        "image": "Broomstick_Cat.webp",
        "description": "A broomstick cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 39,
        "name": "Bull",
        "image": "Bull.webp",
        "description": "A bull.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 40,
        "name": "Bunny",
        "image": "Bunny.webp",
        "description": "A bunny.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 41,
        "name": "Calico Cat",
        "image": "Calico_Cat.webp",
        "description": "A calico cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 42,
        "name": "Camel",
        "image": "Camel.webp",
        "description": "A camel.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 43,
        "name": "Cannibal Meerkat",
        "image": "Cannibal_Meerkat.webp",
        "description": "A cannibal meerkat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 44,
        "name": "Cat",
        "image": "Cat.webp",
        "description": "A cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 45,
        "name": "Celestial Dragon",
        "image": "Celestial_Dragon.webp",
        "description": "A celestial dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 46,
        "name": "Cheerful Yeti",
        "image": "Cheerful_Yeti.png",
        "description": "A cheerful yeti.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 47,
        "name": "Cheetah",
        "image": "Cheetah.webp",
        "description": "A cheetah.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 48,
        "name": "Chest Mimic",
        "image": "Chest_Mimic.png",
        "description": "A chest mimic.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 49,
        "name": "Chick",
        "image": "Chick.webp",
        "description": "A chick.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 50,
        "name": "Chicken",
        "image": "Chicken.webp",
        "description": "A chicken.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 51,
        "name": "Cloud Dog",
        "image": "Cloud_Dog.webp",
        "description": "A cloud dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 52,
        "name": "Cloud Monkey",
        "image": "Cloud_Monkey.webp",
        "description": "A cloud monkey.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 53,
        "name": "Cloud Penguin",
        "image": "Cloud_Penguin.webp",
        "description": "A cloud penguin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 54,
        "name": "Clown Cat",
        "image": "Clown_Cat.webp",
        "description": "A clown cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 55,
        "name": "Colorful Dragon",
        "image": "Colorful_Dragon.webp",
        "description": "A colorful dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 56,
        "name": "Comet Agony",
        "image": "Comet_Agony.webp",
        "description": "A comet agony.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 57,
        "name": "Cookie Mouse",
        "image": "Cookie_Mouse.png",
        "description": "A cookie mouse.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 58,
        "name": "Corgi",
        "image": "Corgi.webp",
        "description": "A corgi.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 59,
        "name": "Corn Cat",
        "image": "Corn_Cat.png",
        "description": "A corn cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 60,
        "name": "Cow",
        "image": "Cow.webp",
        "description": "A cow.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 61,
        "name": "Crocodile",
        "image": "Crocodile.webp",
        "description": "A crocodile.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 62,
        "name": "Crystal Deer",
        "image": "Crystal_Deer.png",
        "description": "A crystal deer.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 63,
        "name": "Cupcake",
        "image": "Cupcake.webp",
        "description": "A cupcake.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 64,
        "name": "Cupcake Hamster",
        "image": "Cupcake_Hamster.png",
        "description": "A cupcake hamster.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 65,
        "name": "Cupid Corgi",
        "image": "Cupid_Corgi.png",
        "description": "A cupid corgi.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 66,
        "name": "Cyberpunk Cat",
        "image": "Cyberpunk_Cat.webp",
        "description": "A cyberpunk cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 67,
        "name": "Cyberpunk Dog",
        "image": "Cyberpunk_Dog.webp",
        "description": "A cyberpunk dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 68,
        "name": "Cyberpunk Ghost",
        "image": "Cyberpunk_Ghost.webp",
        "description": "A cyberpunk ghost.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 69,
        "name": "Cyber Agony",
        "image": "Cyber_Agony.png",
        "description": "A cyber agony.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 70,
        "name": "Cyber Bear",
        "image": "Cyber_Bear.png",
        "description": "A cyber bear.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 71,
        "name": "Cyber Bunny",
        "image": "Cyber_Bunny.webp",
        "description": "A cyber bunny.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 72,
        "name": "Cyber Ducky",
        "image": "Cyber_Ducky.png",
        "description": "A cyber ducky.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 73,
        "name": "Cyborg Bunny",
        "image": "Cyborg_Bunny.webp",
        "description": "A cyborg bunny.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 74,
        "name": "Cyborg Dominus",
        "image": "Cyborg_Dominus.webp",
        "description": "A cyborg dominus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 75,
        "name": "Cyborg Dragon",
        "image": "Cyborg_Dragon.webp",
        "description": "A cyborg dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 76,
        "name": "Cyborg Panda",
        "image": "Cyborg_Panda.webp",
        "description": "A cyborg panda.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 77,
        "name": "Dalmatian",
        "image": "Dalmatian.webp",
        "description": "A dalmatian.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 78,
        "name": "Dark Fox",
        "image": "Dark_Fox.png",
        "description": "A dark fox.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 79,
        "name": "Demolition Cat",
        "image": "Demolition_Cat.webp",
        "description": "A demolition cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 80,
        "name": "Demolition Husky",
        "image": "Demolition_Husky.png",
        "description": "A demolition husky.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 81,
        "name": "Demon",
        "image": "Demon.webp",
        "description": "A demon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 82,
        "name": "Demon Cat",
        "image": "Demon_Cat.png",
        "description": "A demon cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 83,
        "name": "Demon Cyclops",
        "image": "Demon_Cyclops.png",
        "description": "A demon cyclops.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 84,
        "name": "Demon Dog",
        "image": "Demon_Dog.png",
        "description": "A demon dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 85,
        "name": "Demon Serpents",
        "image": "Demon_Serpents.png",
        "description": "A demon serpents.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 86,
        "name": "Detective Cat",
        "image": "Detective_Cat.webp",
        "description": "A detective cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 87,
        "name": "Devil Agony",
        "image": "Devil_Agony.png",
        "description": "A devil agony.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 88,
        "name": "Devil Dominus",
        "image": "Devil_Dominus.webp",
        "description": "A devil dominus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 89,
        "name": "Diamond Dog",
        "image": "Diamond_Dog.png",
        "description": "A diamond dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 90,
        "name": "Diamond Dragon",
        "image": "Diamond_Dragon.webp",
        "description": "A diamond dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 91,
        "name": "Dino",
        "image": "Dino.webp",
        "description": "A dino.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 92,
        "name": "Dino Cat",
        "image": "Dino_Cat.webp",
        "description": "A dino cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 93,
        "name": "Disco Ball Dragon",
        "image": "Disco_Ball_Dragon.webp",
        "description": "A disco ball dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 94,
        "name": "Dog",
        "image": "Dog.webp",
        "description": "A dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 95,
        "name": "Dolphin",
        "image": "Dolphin.webp",
        "description": "A dolphin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 96,
        "name": "Doodle Fish",
        "image": "Doodle_Fish.png",
        "description": "A doodle fish.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 97,
        "name": "Dragon",
        "image": "Dragon.webp",
        "description": "A dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 98,
        "name": "Ducky",
        "image": "Ducky.webp",
        "description": "A ducky.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 99,
        "name": "Electric Bear",
        "image": "Electric_Bear.png",
        "description": "A electric bear.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 100,
        "name": "Electric Bunny",
        "image": "Electric_Bunny.webp",
        "description": "A electric bunny.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 101,
        "name": "Electric Cat",
        "image": "Electric_Cat.png",
        "description": "A electric cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 102,
        "name": "Electric Corgi",
        "image": "Electric_Corgi.png",
        "description": "A electric corgi.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 103,
        "name": "Electric Dragon",
        "image": "Electric_Dragon.webp",
        "description": "A electric dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 104,
        "name": "Electric Fox",
        "image": "Electric_Fox.webp",
        "description": "A electric fox.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 105,
        "name": "Electric Griffin",
        "image": "Electric_Griffin.png",
        "description": "A electric griffin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 106,
        "name": "Electric Penguin",
        "image": "Electric_Penguin.png",
        "description": "A electric penguin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 107,
        "name": "Electric Unicorn",
        "image": "Electric_Unicorn.png",
        "description": "A electric unicorn.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 108,
        "name": "Electric Werewolf",
        "image": "Electric_Werewolf.png",
        "description": "A electric werewolf.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 109,
        "name": "Elephant",
        "image": "Elephant.webp",
        "description": "A elephant.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 110,
        "name": "Elf Cat",
        "image": "Elf_Cat.png",
        "description": "A elf cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 111,
        "name": "Elf Dog",
        "image": "Elf_Dog.png",
        "description": "A elf dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 112,
        "name": "Emerald Carbuncle",
        "image": "Emerald_Carbuncle.webp",
        "description": "A emerald carbuncle.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 113,
        "name": "Emerald Monkey",
        "image": "Emerald_Monkey.png",
        "description": "A emerald monkey.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 114,
        "name": "Empyrean Dragon",
        "image": "Empyrean_Dragon.webp",
        "description": "A empyrean dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 115,
        "name": "Empyrean Fox",
        "image": "Empyrean_Fox.webp",
        "description": "A empyrean fox.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 116,
        "name": "Empyrean Stallion",
        "image": "Empyrean_Stallion.webp",
        "description": "A empyrean stallion.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 117,
        "name": "Enchanted Cat",
        "image": "Enchanted_Cat.webp",
        "description": "A enchanted cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 118,
        "name": "Enchanted Deer",
        "image": "Enchanted_Deer.webp",
        "description": "A enchanted deer.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 119,
        "name": "Enchanted Dragon",
        "image": "Enchanted_Dragon.webp",
        "description": "A enchanted dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 120,
        "name": "Enchanted Elephant",
        "image": "Enchanted_Elephant.webp",
        "description": "A enchanted elephant.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 121,
        "name": "Ender Bunny",
        "image": "Ender_Bunny.webp",
        "description": "A ender bunny.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 122,
        "name": "Evil Computer",
        "image": "Evil_Computer.webp",
        "description": "A evil computer.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 123,
        "name": "Evil Gorilla",
        "image": "Evil_Gorilla.webp",
        "description": "A evil gorilla.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 124,
        "name": "Fairy",
        "image": "Fairy.webp",
        "description": "A fairy.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 125,
        "name": "Fawn",
        "image": "Fawn.webp",
        "description": "A fawn.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 126,
        "name": "Festive Agony",
        "image": "Festive_Agony.png",
        "description": "A festive agony.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 127,
        "name": "Festive Cardinal",
        "image": "Festive_Cardinal.png",
        "description": "A festive cardinal.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 128,
        "name": "Festive Cat",
        "image": "Festive_Cat.png",
        "description": "A festive cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 129,
        "name": "Festive Dog",
        "image": "Festive_Dog.png",
        "description": "A festive dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 130,
        "name": "Firefly",
        "image": "Firefly.webp",
        "description": "A firefly.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 131,
        "name": "Fire Horse",
        "image": "Fire_Horse.webp",
        "description": "A fire horse.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 132,
        "name": "Fish In A Bucket",
        "image": "Fish_in_a_Bucket.webp",
        "description": "A fish in a bucket.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 133,
        "name": "Flamingo",
        "image": "Flamingo.webp",
        "description": "A flamingo.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 134,
        "name": "Flex Bear",
        "image": "Flex_Bear.png",
        "description": "A flex bear.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 135,
        "name": "Flex Fluffy Cat",
        "image": "Flex_Fluffy_Cat.png",
        "description": "A flex fluffy cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 136,
        "name": "Flex Tiger",
        "image": "Flex_Tiger.png",
        "description": "A flex tiger.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 137,
        "name": "Floppa",
        "image": "Floppa.webp",
        "description": "A floppa.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 138,
        "name": "Fluffy Cat",
        "image": "Fluffy_Cat.webp",
        "description": "A fluffy cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 139,
        "name": "Forest Wyvern",
        "image": "Forest_Wyvern.webp",
        "description": "A forest wyvern.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 140,
        "name": "Forged Hedgehog",
        "image": "Forged_Hedgehog.png",
        "description": "A forged hedgehog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 141,
        "name": "Fossil Dragon",
        "image": "Fossil_Dragon.webp",
        "description": "A fossil dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 142,
        "name": "Fox",
        "image": "Fox.webp",
        "description": "A fox.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 143,
        "name": "Fragmented Dominus",
        "image": "Fragmented_Dominus.png",
        "description": "A fragmented dominus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 144,
        "name": "Froggy",
        "image": "Froggy.webp",
        "description": "A froggy.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 145,
        "name": "Frostbyte Bear",
        "image": "Frostbyte_Bear.webp",
        "description": "A frostbyte bear.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 146,
        "name": "Frostbyte Husky",
        "image": "Frostbyte_Husky.webp",
        "description": "A frostbyte husky.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 147,
        "name": "Frost Axolotl",
        "image": "Frost_Axolotl.webp",
        "description": "A frost axolotl.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 148,
        "name": "Frost Bear",
        "image": "Frost_Bear.webp",
        "description": "A frost bear.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 149,
        "name": "Frost Fox",
        "image": "Frost_Fox.png",
        "description": "A frost fox.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 150,
        "name": "Frost Rabbit",
        "image": "Frost_Rabbit.png",
        "description": "A frost rabbit.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 151,
        "name": "Galaxy Axolotl",
        "image": "Galaxy_Axolotl.webp",
        "description": "A galaxy axolotl.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 152,
        "name": "Galaxy Fox",
        "image": "Galaxy_Fox.webp",
        "description": "A galaxy fox.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 153,
        "name": "Gamer Shiba",
        "image": "Gamer_Shiba.webp",
        "description": "A gamer shiba.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 154,
        "name": "Gecko",
        "image": "Gecko.webp",
        "description": "A gecko.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 155,
        "name": "Gemstone Gargoyle Dragon",
        "image": "Gemstone_Gargoyle_Dragon.png",
        "description": "A gemstone gargoyle dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 156,
        "name": "Ghost Cat",
        "image": "Ghost_Cat.webp",
        "description": "A ghost cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 157,
        "name": "Ghoul Horse",
        "image": "Ghoul_Horse.webp",
        "description": "A ghoul horse.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 158,
        "name": "Gingerbread Cat",
        "image": "Gingerbread_Cat.png",
        "description": "A gingerbread cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 159,
        "name": "Gingerbread Corgi",
        "image": "Gingerbread_Corgi.png",
        "description": "A gingerbread corgi.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 160,
        "name": "Giraffe",
        "image": "Giraffe.webp",
        "description": "A giraffe.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 161,
        "name": "Glitched Cat",
        "image": "Glitched_Cat.png",
        "description": "A glitched cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 162,
        "name": "Glitched Immortuus",
        "image": "Glitched_Immortuus.png",
        "description": "A glitched immortuus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 163,
        "name": "Glowy The Ghost",
        "image": "Glowy_the_Ghost.webp",
        "description": "A glowy the ghost.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 164,
        "name": "Goblin",
        "image": "Goblin.webp",
        "description": "A goblin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 165,
        "name": "Goldfish",
        "image": "Goldfish.webp",
        "description": "A goldfish.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 166,
        "name": "Gorilla",
        "image": "Gorilla.webp",
        "description": "A gorilla.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 167,
        "name": "Green Cobra",
        "image": "Green_Cobra.webp",
        "description": "A green cobra.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 168,
        "name": "Green Fish",
        "image": "Green_Fish.webp",
        "description": "A green fish.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 169,
        "name": "Griffin",
        "image": "Griffin.webp",
        "description": "A griffin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 170,
        "name": "Grim Reaper",
        "image": "Grim_Reaper.webp",
        "description": "A grim reaper.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 171,
        "name": "Guilded Raven",
        "image": "Guilded_Raven.webp",
        "description": "A guilded raven.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 172,
        "name": "Hacker Cat",
        "image": "Hacker_Cat.webp",
        "description": "A hacker cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 173,
        "name": "Hamster",
        "image": "Hamster.webp",
        "description": "A hamster.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 174,
        "name": "Happy Rock",
        "image": "Happy_Rock.webp",
        "description": "A happy rock.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 175,
        "name": "Hedgehog",
        "image": "Hedgehog.webp",
        "description": "A hedgehog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 176,
        "name": "Hellhound",
        "image": "Hellhound.webp",
        "description": "A hellhound.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 177,
        "name": "Hellish Axolotl",
        "image": "Hellish_Axolotl.webp",
        "description": "A hellish axolotl.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 178,
        "name": "Hell Bat",
        "image": "Hell_Bat.png",
        "description": "A hell bat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 179,
        "name": "Hell Chick",
        "image": "Hell_Chick.webp",
        "description": "A hell chick.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 180,
        "name": "Hell Fox",
        "image": "Hell_Fox.png",
        "description": "A hell fox.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 181,
        "name": "Hell Monkey",
        "image": "Hell_Monkey.png",
        "description": "A hell monkey.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 182,
        "name": "Hell Rock",
        "image": "Hell_Rock.webp",
        "description": "A hell rock.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 183,
        "name": "Hell Scorpion",
        "image": "Hell_Scorpion.png",
        "description": "A hell scorpion.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 184,
        "name": "Hell Spider",
        "image": "Hell_Spider.webp",
        "description": "A hell spider.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 185,
        "name": "Hi-Tech Parrot",
        "image": "Hi-Tech_Parrot.png",
        "description": "A hi-tech parrot.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 186,
        "name": "Hi-Tech Tiger",
        "image": "Hi-Tech_Tiger.png",
        "description": "A hi-tech tiger.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 187,
        "name": "Hippo",
        "image": "Hippo.webp",
        "description": "A hippo.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 188,
        "name": "Hippokin",
        "image": "Hippokin.webp",
        "description": "A hippokin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 189,
        "name": "Hippomelon",
        "image": "Hippomelon.webp",
        "description": "A hippomelon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 190,
        "name": "Holiday Balloon Cat",
        "image": "Holiday_Balloon_Cat.png",
        "description": "A holiday balloon cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 191,
        "name": "Holiday Pegasus",
        "image": "Holiday_Pegasus.png",
        "description": "A holiday pegasus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 192,
        "name": "Holographic Cat",
        "image": "Holographic_Cat.webp",
        "description": "A holographic cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 193,
        "name": "Holographic Monkey",
        "image": "Holographic_Monkey.webp",
        "description": "A holographic monkey.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 194,
        "name": "Horse",
        "image": "Horse.webp",
        "description": "A horse.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 195,
        "name": "Hot Cocoa Cat",
        "image": "Hot_Cocoa_Cat.png",
        "description": "A hot cocoa cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 196,
        "name": "Hot Dog",
        "image": "Hot_Dog.webp",
        "description": "A hot dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 197,
        "name": "Hound Of Hades",
        "image": "Hound_of_Hades.webp",
        "description": "A hound of hades.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 198,
        "name": "Huge Abyssal Jellyfish",
        "image": "Huge_Abyssal_Jellyfish.webp",
        "description": "A huge abyssal jellyfish.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 199,
        "name": "Huge Amethyst Dragon",
        "image": "Huge_Amethyst_Dragon.webp",
        "description": "A huge amethyst dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 200,
        "name": "Huge Angry Yeti",
        "image": "Huge_Angry_Yeti.webp",
        "description": "A huge angry yeti.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 201,
        "name": "Huge Black Hole Angelus",
        "image": "Huge_Black_Hole_Angelus.webp",
        "description": "A huge black hole angelus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 202,
        "name": "Huge Calico Cat",
        "image": "Huge_Calico_Cat.webp",
        "description": "A huge calico cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 203,
        "name": "Huge Cat",
        "image": "Huge_Cat.webp",
        "description": "A huge cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 204,
        "name": "Huge Corrupt Octopus",
        "image": "Huge_Corrupt_Octopus.png",
        "description": "A huge corrupt octopus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 205,
        "name": "Huge Cosmic Axolotl",
        "image": "Huge_Cosmic_Axolotl.webp",
        "description": "A huge cosmic axolotl.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 206,
        "name": "Huge Dalmatian",
        "image": "Huge_Dalmatian.webp",
        "description": "A huge dalmatian.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 207,
        "name": "Huge Dog",
        "image": "Huge_Dog.webp",
        "description": "A huge dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 208,
        "name": "Huge Dragon",
        "image": "Huge_Dragon.webp",
        "description": "A huge dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 209,
        "name": "Huge Evil Snowman",
        "image": "Huge_Evil_Snowman.webp",
        "description": "A huge evil snowman.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 210,
        "name": "Huge Festive Cat",
        "image": "Huge_Festive_Cat.webp",
        "description": "A huge festive cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 211,
        "name": "Huge Fossil Dragon",
        "image": "Huge_Fossil_Dragon.webp",
        "description": "A huge fossil dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 212,
        "name": "Huge Ghostface Cat",
        "image": "Huge_Ghostface_Cat.webp",
        "description": "A huge ghostface cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 213,
        "name": "Huge Gingerbread Dragon",
        "image": "Huge_Gingerbread_Dragon.webp",
        "description": "A huge gingerbread dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 214,
        "name": "Huge Glitched Phoenix",
        "image": "Huge_Glitched_Phoenix.webp",
        "description": "A huge glitched phoenix.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 215,
        "name": "Huge Grinch Cat",
        "image": "Huge_Grinch_Cat.webp",
        "description": "A huge grinch cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 216,
        "name": "Huge Hell Rock",
        "image": "Huge_Hell_Rock.webp",
        "description": "A huge hell rock.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 217,
        "name": "Huge Inferno Cat",
        "image": "Huge_Inferno_Cat.webp",
        "description": "A huge inferno cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 218,
        "name": "Huge Jelly Axolotl",
        "image": "Huge_Jelly_Axolotl.png",
        "description": "A huge jelly axolotl.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 219,
        "name": "Huge Jelly Axolotl",
        "image": "Huge_Jelly_Axolotl.webp",
        "description": "A huge jelly axolotl.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 220,
        "name": "Huge Jelly Panda",
        "image": "Huge_Jelly_Panda.webp",
        "description": "A huge jelly panda.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 221,
        "name": "Huge Jolly Moose",
        "image": "Huge_Jolly_Moose.webp",
        "description": "A huge jolly moose.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 222,
        "name": "Huge Jolly Penguin",
        "image": "Huge_Jolly_Penguin.webp",
        "description": "A huge jolly penguin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 223,
        "name": "Huge Kitsune Fox",
        "image": "Huge_Kitsune_Fox.webp",
        "description": "A huge kitsune fox.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 224,
        "name": "Huge M-6 Prototype",
        "image": "Huge_M-6_PROTOTYPE.webp",
        "description": "A huge m-6 prototype.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 225,
        "name": "Huge Monkey",
        "image": "Huge_Monkey.png",
        "description": "A huge monkey.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 226,
        "name": "Huge Mosaic Griffin",
        "image": "Huge_Mosaic_Griffin.webp",
        "description": "A huge mosaic griffin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 227,
        "name": "Huge Nightmare Corgi",
        "image": "Huge_Nightmare_Corgi.webp",
        "description": "A huge nightmare corgi.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 228,
        "name": "Huge Party Tiger",
        "image": "Huge_Party_Tiger.png",
        "description": "A huge party tiger.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 229,
        "name": "Huge Party Tiger",
        "image": "Huge_Party_Tiger.webp",
        "description": "A huge party tiger.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 230,
        "name": "Huge Pilgrim Turkey",
        "image": "Huge_Pilgrim_Turkey.webp",
        "description": "A huge pilgrim turkey.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 231,
        "name": "Huge Present Chest Mimic",
        "image": "Huge_Present_Chest_Mimic.webp",
        "description": "A huge present chest mimic.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 232,
        "name": "Huge Red Dragon",
        "image": "Huge_Red_Dragon.webp",
        "description": "A huge red dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 233,
        "name": "Huge Reindeer",
        "image": "Huge_Reindeer.webp",
        "description": "A huge reindeer.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 234,
        "name": "Huge Shiba",
        "image": "Huge_Shiba.webp",
        "description": "A huge shiba.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 235,
        "name": "Huge Silver Dragon",
        "image": "Huge_Silver_Dragon.webp",
        "description": "A huge silver dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 236,
        "name": "Huge Sleigh Cat",
        "image": "Huge_Sleigh_Cat.webp",
        "description": "A huge sleigh cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 237,
        "name": "Husky",
        "image": "Husky.png",
        "description": "A husky.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 238,
        "name": "Hydra",
        "image": "Hydra.webp",
        "description": "A hydra.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 239,
        "name": "Hydra Axolotl",
        "image": "Hydra_Axolotl.webp",
        "description": "A hydra axolotl.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 240,
        "name": "Icemortuus",
        "image": "Icemortuus.png",
        "description": "A icemortuus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 241,
        "name": "Ice Corgi",
        "image": "Ice_Corgi.png",
        "description": "A ice corgi.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 242,
        "name": "Ice Penguin",
        "image": "Ice_Penguin.png",
        "description": "A ice penguin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 243,
        "name": "Ice Snowman",
        "image": "Ice_Snowman.png",
        "description": "A ice snowman.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 244,
        "name": "Jaguar",
        "image": "Jaguar.webp",
        "description": "A jaguar.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 245,
        "name": "Jelephant",
        "image": "Jelephant.webp",
        "description": "A jelephant.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 246,
        "name": "Jelly Axolotl",
        "image": "Jelly_Axolotl.webp",
        "description": "A jelly axolotl.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 247,
        "name": "Jelly Bunny",
        "image": "Jelly_Bunny.webp",
        "description": "A jelly bunny.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 248,
        "name": "Jelly Cat",
        "image": "Jelly_Cat.webp",
        "description": "A jelly cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 249,
        "name": "Jelly Chicken",
        "image": "Jelly_Chicken.webp",
        "description": "A jelly chicken.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 250,
        "name": "Jelly Coin",
        "image": "Jelly_Coin.webp",
        "description": "A jelly coin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 251,
        "name": "Jelly Corgi",
        "image": "Jelly_Corgi.webp",
        "description": "A jelly corgi.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 252,
        "name": "Jelly Dog",
        "image": "Jelly_Dog.webp",
        "description": "A jelly dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 253,
        "name": "Jelly Dragon",
        "image": "Jelly_Dragon.webp",
        "description": "A jelly dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 254,
        "name": "Jelly Monkey",
        "image": "Jelly_Monkey.webp",
        "description": "A jelly monkey.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 255,
        "name": "Jelly Penguin",
        "image": "Jelly_Penguin.webp",
        "description": "A jelly penguin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 256,
        "name": "Jelly Piggy",
        "image": "Jelly_Piggy.webp",
        "description": "A jelly piggy.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 257,
        "name": "Jelly Shark",
        "image": "Jelly_Shark.webp",
        "description": "A jelly shark.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 258,
        "name": "Jelly Shiba",
        "image": "Jelly_Shiba.webp",
        "description": "A jelly shiba.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 259,
        "name": "Jolly Husky",
        "image": "Jolly_Husky.png",
        "description": "A jolly husky.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 260,
        "name": "Jolly Narwhal",
        "image": "Jolly_Narwhal.png",
        "description": "A jolly narwhal.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 261,
        "name": "Jolly Owl",
        "image": "Jolly_Owl.png",
        "description": "A jolly owl.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 262,
        "name": "Jolly Penguin",
        "image": "Jolly_Penguin.png",
        "description": "A jolly penguin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 263,
        "name": "Kangaroo",
        "image": "Kangaroo.webp",
        "description": "A kangaroo.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 264,
        "name": "King Cobra",
        "image": "King_Cobra.webp",
        "description": "A king cobra.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 265,
        "name": "Kitsune Fox",
        "image": "Kitsune_Fox.webp",
        "description": "A kitsune fox.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 266,
        "name": "Knight Cat",
        "image": "Knight_Cat.webp",
        "description": "A knight cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 267,
        "name": "Koi Fish",
        "image": "Koi_Fish.webp",
        "description": "A koi fish.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 268,
        "name": "Kraken",
        "image": "Kraken.webp",
        "description": "A kraken.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 269,
        "name": "Lamb",
        "image": "Lamb.webp",
        "description": "A lamb.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 270,
        "name": "Lava Slime",
        "image": "Lava_Slime.webp",
        "description": "A lava slime.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 271,
        "name": "Lemur",
        "image": "Lemur.webp",
        "description": "A lemur.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 272,
        "name": "Lightning Bat",
        "image": "Lightning_Bat.png",
        "description": "A lightning bat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 273,
        "name": "Lion",
        "image": "Lion.webp",
        "description": "A lion.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 274,
        "name": "Little Melty",
        "image": "Little_Melty.webp",
        "description": "A little melty.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 275,
        "name": "Llama",
        "image": "Llama.webp",
        "description": "A llama.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 276,
        "name": "Lovemelon",
        "image": "Lovemelon.webp",
        "description": "A lovemelon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 277,
        "name": "Love Corgi",
        "image": "Love_Corgi.png",
        "description": "A love corgi.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 278,
        "name": "Love Cow",
        "image": "Love_Cow.png",
        "description": "A love cow.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 279,
        "name": "Love Lion",
        "image": "Love_Lion.png",
        "description": "A love lion.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 280,
        "name": "Luau Cat",
        "image": "Luau_Cat.webp",
        "description": "A luau cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 281,
        "name": "Luau Seal",
        "image": "Luau_Seal.webp",
        "description": "A luau seal.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 282,
        "name": "Lumi Axolotl",
        "image": "Lumi_Axolotl.webp",
        "description": "A lumi axolotl.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 283,
        "name": "M-2 Prototype",
        "image": "M-2_PROTOTYPE.webp",
        "description": "A m-2 prototype.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 284,
        "name": "Machete Dog",
        "image": "Machete_Dog.webp",
        "description": "A machete dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 285,
        "name": "Meebo In A Spaceship",
        "image": "Meebo_in_a_Spaceship.webp",
        "description": "A meebo in a spaceship.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 286,
        "name": "Meerkat",
        "image": "Meerkat.png",
        "description": "A meerkat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 287,
        "name": "Mermaid Cat",
        "image": "Mermaid_Cat.webp",
        "description": "A mermaid cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 288,
        "name": "Mimic Tech Chest",
        "image": "Mimic_Tech_Chest.png",
        "description": "A mimic tech chest.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 289,
        "name": "Mining Axolotl",
        "image": "Mining_Axolotl.png",
        "description": "A mining axolotl.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 290,
        "name": "Mining Cat",
        "image": "Mining_Cat.webp",
        "description": "A mining cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 291,
        "name": "Mining Dog",
        "image": "Mining_Dog.png",
        "description": "A mining dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 292,
        "name": "Mining Mole",
        "image": "Mining_Mole.png",
        "description": "A mining mole.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 293,
        "name": "Monkey",
        "image": "Monkey.webp",
        "description": "A monkey.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 294,
        "name": "Mortuus",
        "image": "Mortuus.webp",
        "description": "A mortuus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 295,
        "name": "Mosaic Corgi",
        "image": "Mosaic_Corgi.png",
        "description": "A mosaic corgi.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 296,
        "name": "Mosaic Dove",
        "image": "Mosaic_Dove.png",
        "description": "A mosaic dove.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 297,
        "name": "Mosaic Griffin",
        "image": "Mosaic_Griffin.png",
        "description": "A mosaic griffin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 298,
        "name": "Mouse",
        "image": "Mouse.png",
        "description": "A mouse.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 299,
        "name": "Mystical Fox",
        "image": "Mystical_Fox.webp",
        "description": "A mystical fox.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 300,
        "name": "Mystic Corgi",
        "image": "Mystic_Corgi.png",
        "description": "A mystic corgi.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 301,
        "name": "Narwhal",
        "image": "Narwhal.webp",
        "description": "A narwhal.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 302,
        "name": "Nightmare Bear",
        "image": "Nightmare_Bear.webp",
        "description": "A nightmare bear.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 303,
        "name": "Nightmare Cat",
        "image": "Nightmare_Cat.webp",
        "description": "A nightmare cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 304,
        "name": "Nightmare Kraken",
        "image": "Nightmare_Kraken.webp",
        "description": "A nightmare kraken.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 305,
        "name": "Nightmare Spirit",
        "image": "Nightmare_Spirit.webp",
        "description": "A nightmare spirit.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 306,
        "name": "Night Terror Cat",
        "image": "Night_Terror_Cat.webp",
        "description": "A night terror cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 307,
        "name": "Night Terror Dog",
        "image": "Night_Terror_Dog.webp",
        "description": "A night terror dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 308,
        "name": "Ninja Cat",
        "image": "Ninja_Cat.webp",
        "description": "A ninja cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 309,
        "name": "North Pole Wolf",
        "image": "North_Pole_Wolf.png",
        "description": "A north pole wolf.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 310,
        "name": "Nuclear Agony",
        "image": "Nuclear_Agony.webp",
        "description": "A nuclear agony.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 311,
        "name": "Nuclear Mining Dog",
        "image": "Nuclear_Mining_Dog.png",
        "description": "A nuclear mining dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 312,
        "name": "Nutcracker Cat",
        "image": "Nutcracker_Cat.png",
        "description": "A nutcracker cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 313,
        "name": "Orange Squirrel",
        "image": "Orange_Squirrel.png",
        "description": "A orange squirrel.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 314,
        "name": "Owl",
        "image": "Owl.png",
        "description": "A owl.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 315,
        "name": "Pajamas Cat",
        "image": "Pajamas_Cat.webp",
        "description": "A pajamas cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 316,
        "name": "Pajamas Dog",
        "image": "Pajamas_Dog.webp",
        "description": "A pajamas dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 317,
        "name": "Panther",
        "image": "Panther.webp",
        "description": "A panther.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 318,
        "name": "Parrot",
        "image": "Parrot.webp",
        "description": "A parrot.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 319,
        "name": "Party Axolotl",
        "image": "Party_Axolotl.png",
        "description": "A party axolotl.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 320,
        "name": "Party Cat",
        "image": "Party_Cat.png",
        "description": "A party cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 321,
        "name": "Party Corgi",
        "image": "Party_Corgi.png",
        "description": "A party corgi.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 322,
        "name": "Party Crown Ducky",
        "image": "Party_Crown_Ducky.png",
        "description": "A party crown ducky.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 323,
        "name": "Party Dog",
        "image": "Party_Dog.png",
        "description": "A party dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 324,
        "name": "Party Dragon",
        "image": "Party_Dragon.png",
        "description": "A party dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 325,
        "name": "Party Monkey",
        "image": "Party_Monkey.png",
        "description": "A party monkey.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 326,
        "name": "Party Panda",
        "image": "Party_Panda.png",
        "description": "A party panda.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 327,
        "name": "Party Penguin",
        "image": "Party_Penguin.png",
        "description": "A party penguin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 328,
        "name": "Party Piggy",
        "image": "Party_Piggy.png",
        "description": "A party piggy.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 329,
        "name": "Party Shark",
        "image": "Party_Shark.png",
        "description": "A party shark.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 330,
        "name": "Party Squirrel",
        "image": "Party_Squirrel.png",
        "description": "A party squirrel.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 331,
        "name": "Peacock",
        "image": "Peacock.webp",
        "description": "A peacock.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 332,
        "name": "Pegasus",
        "image": "Pegasus.webp",
        "description": "A pegasus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 333,
        "name": "Penguin",
        "image": "Penguin.webp",
        "description": "A penguin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 334,
        "name": "Pentangelus",
        "image": "Pentangelus.webp",
        "description": "A pentangelus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 335,
        "name": "Peppermint Angelus",
        "image": "Peppermint_Angelus.png",
        "description": "A peppermint angelus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 336,
        "name": "Phantom Wolf",
        "image": "Phantom_Wolf.webp",
        "description": "A phantom wolf.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 337,
        "name": "Phoenix",
        "image": "Phoenix.webp",
        "description": "A phoenix.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 338,
        "name": "Piggy",
        "image": "Piggy.webp",
        "description": "A piggy.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 339,
        "name": "Pilgrim Turkey",
        "image": "Pilgrim_Turkey.png",
        "description": "A pilgrim turkey.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 340,
        "name": "Pinata Cat",
        "image": "Pinata_Cat.webp",
        "description": "A pinata cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 341,
        "name": "Pineapple Cat",
        "image": "Pineapple_Cat.webp",
        "description": "A pineapple cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 342,
        "name": "Pink Poodle",
        "image": "Pink_Poodle.png",
        "description": "A pink poodle.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 343,
        "name": "Pirate Cat",
        "image": "Pirate_Cat.webp",
        "description": "A pirate cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 344,
        "name": "Pirate Panda",
        "image": "Pirate_Panda.webp",
        "description": "A pirate panda.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 345,
        "name": "Pirate Parrot",
        "image": "Pirate_Parrot.webp",
        "description": "A pirate parrot.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 346,
        "name": "Pixie Fox",
        "image": "Pixie_Fox.webp",
        "description": "A pixie fox.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 347,
        "name": "Plague Cow",
        "image": "Plague_Cow.webp",
        "description": "A plague cow.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 348,
        "name": "Plague Dragon",
        "image": "Plague_Dragon.webp",
        "description": "A plague dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 349,
        "name": "Platypus",
        "image": "Platypus.webp",
        "description": "A platypus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 350,
        "name": "Poseidon Corgi",
        "image": "Poseidon_Corgi.webp",
        "description": "A poseidon corgi.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 351,
        "name": "Poseidon Dog",
        "image": "Poseidon_Dog.webp",
        "description": "A poseidon dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 352,
        "name": "Present Cat",
        "image": "Present_Cat.png",
        "description": "A present cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 353,
        "name": "Present Dog",
        "image": "Present_Dog.png",
        "description": "A present dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 354,
        "name": "Prison Cat",
        "image": "Prison_Cat.webp",
        "description": "A prison cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 355,
        "name": "Pufferfish",
        "image": "Pufferfish.webp",
        "description": "A pufferfish.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 356,
        "name": "Puffin",
        "image": "Puffin.webp",
        "description": "A puffin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 357,
        "name": "Puma",
        "image": "Puma.webp",
        "description": "A puma.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 358,
        "name": "Pumpkin Cat",
        "image": "Pumpkin_Cat.webp",
        "description": "A pumpkin cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 359,
        "name": "Pumpkin Scarecrow",
        "image": "Pumpkin_Scarecrow.webp",
        "description": "A pumpkin scarecrow.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 360,
        "name": "Pumpkin Spice Cat",
        "image": "Pumpkin_Spice_Cat.png",
        "description": "A pumpkin spice cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 361,
        "name": "Purple Cobra",
        "image": "Purple_Cobra.webp",
        "description": "A purple cobra.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 362,
        "name": "Quantum Agony",
        "image": "Quantum_Agony.webp",
        "description": "A quantum agony.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 363,
        "name": "Quantum Dominus",
        "image": "Quantum_Dominus.png",
        "description": "A quantum dominus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 364,
        "name": "Quantum Tiger",
        "image": "Quantum_Tiger.png",
        "description": "A quantum tiger.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 365,
        "name": "Queen Slime",
        "image": "Queen_Slime.webp",
        "description": "A queen slime.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 366,
        "name": "Quokka",
        "image": "Quokka.webp",
        "description": "A quokka.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 367,
        "name": "Raccoon",
        "image": "Raccoon.webp",
        "description": "A raccoon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 368,
        "name": "Redstone Cat",
        "image": "Redstone_Cat.png",
        "description": "A redstone cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 369,
        "name": "Red Fox",
        "image": "Red_Fox.png",
        "description": "A red fox.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 370,
        "name": "Red Panda",
        "image": "Red_Panda.webp",
        "description": "A red panda.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 371,
        "name": "Red Wolf",
        "image": "Red_Wolf.png",
        "description": "A red wolf.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 372,
        "name": "Reindeer Axolotl",
        "image": "Reindeer_Axolotl.png",
        "description": "A reindeer axolotl.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 373,
        "name": "Reindeer Cat",
        "image": "Reindeer_Cat.png",
        "description": "A reindeer cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 374,
        "name": "Reindeer Corgi",
        "image": "Reindeer_Corgi.png",
        "description": "A reindeer corgi.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 375,
        "name": "Relic Agony",
        "image": "Relic_Agony.webp",
        "description": "A relic agony.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 376,
        "name": "Relic Dragon",
        "image": "Relic_Dragon.webp",
        "description": "A relic dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 377,
        "name": "Rhino",
        "image": "Rhino.webp",
        "description": "A rhino.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 378,
        "name": "Rich Cat",
        "image": "Rich_Cat.webp",
        "description": "A rich cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 379,
        "name": "Robot Bee",
        "image": "Robot_Bee.webp",
        "description": "A robot bee.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 380,
        "name": "Rock Cat",
        "image": "Rock_Cat.png",
        "description": "A rock cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 381,
        "name": "Rock Dog",
        "image": "Rock_Dog.png",
        "description": "A rock dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 382,
        "name": "Rock Dragon",
        "image": "Rock_Dragon.png",
        "description": "A rock dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 383,
        "name": "Rose Butterfly",
        "image": "Rose_Butterfly.png",
        "description": "A rose butterfly.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 384,
        "name": "Rose Cat",
        "image": "Rose_Cat.png",
        "description": "A rose cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 385,
        "name": "Rudolph",
        "image": "Rudolph.png",
        "description": "A rudolph.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 386,
        "name": "Runic Agony",
        "image": "Runic_Agony.webp",
        "description": "A runic agony.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 387,
        "name": "Sabretooth Tiger",
        "image": "Sabretooth_Tiger.webp",
        "description": "A sabretooth tiger.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 388,
        "name": "Samurai Dragon",
        "image": "Samurai_Dragon.webp",
        "description": "A samurai dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 389,
        "name": "Sandcastle Cat",
        "image": "Sandcastle_Cat.webp",
        "description": "A sandcastle cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 390,
        "name": "Sandcastle Dog",
        "image": "Sandcastle_Dog.webp",
        "description": "A sandcastle dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 391,
        "name": "Santa Monkey",
        "image": "Santa_Monkey.png",
        "description": "A santa monkey.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 392,
        "name": "Santa Paws",
        "image": "Santa_Paws.png",
        "description": "A santa paws.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 393,
        "name": "Sapphire Carbuncle",
        "image": "Sapphire_Carbuncle.webp",
        "description": "A sapphire carbuncle.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 394,
        "name": "Sapphire Phoenix",
        "image": "Sapphire_Phoenix.png",
        "description": "A sapphire phoenix.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 395,
        "name": "Scarecrow Cat",
        "image": "Scarecrow_Cat.webp",
        "description": "A scarecrow cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 396,
        "name": "Scarecrow Dog",
        "image": "Scarecrow_Dog.png",
        "description": "A scarecrow dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 397,
        "name": "Scorpion",
        "image": "Scorpion.webp",
        "description": "A scorpion.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 398,
        "name": "Seal",
        "image": "Seal.webp",
        "description": "A seal.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 399,
        "name": "Shadow Griffin",
        "image": "Shadow_Griffin.webp",
        "description": "A shadow griffin.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 400,
        "name": "Shark",
        "image": "Shark.webp",
        "description": "A shark.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 401,
        "name": "Shiba",
        "image": "Shiba.webp",
        "description": "A shiba.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 402,
        "name": "Shimmering Fish",
        "image": "Shimmering_Fish.png",
        "description": "A shimmering fish.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 403,
        "name": "Silver Bison",
        "image": "Silver_Bison.png",
        "description": "A silver bison.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 404,
        "name": "Silver Dragon",
        "image": "Silver_Dragon.png",
        "description": "A silver dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 405,
        "name": "Silver Stag",
        "image": "Silver_Stag.png",
        "description": "A silver stag.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 406,
        "name": "Skeleton",
        "image": "Skeleton.webp",
        "description": "A skeleton.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 407,
        "name": "Skeleton Cat",
        "image": "Skeleton_Cat.webp",
        "description": "A skeleton cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 408,
        "name": "Skunk",
        "image": "Skunk.png",
        "description": "A skunk.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 409,
        "name": "Slasher Sloth",
        "image": "Slasher_Sloth.webp",
        "description": "A slasher sloth.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 410,
        "name": "Sleigh Cat",
        "image": "Sleigh_Cat.png",
        "description": "A sleigh cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 411,
        "name": "Slime",
        "image": "Slime.webp",
        "description": "A slime.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 412,
        "name": "Snowflake Dominus",
        "image": "Snowflake_Dominus.png",
        "description": "A snowflake dominus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 413,
        "name": "Snowflake Pegasus",
        "image": "Snowflake_Pegasus.png",
        "description": "A snowflake pegasus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 414,
        "name": "Snowman",
        "image": "Snowman.webp",
        "description": "A snowman.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 415,
        "name": "Snow Dragon",
        "image": "Snow_Dragon.webp",
        "description": "A snow dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 416,
        "name": "Sombrero Cat",
        "image": "Sombrero_Cat.webp",
        "description": "A sombrero cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 417,
        "name": "Sombrero Chihuahua",
        "image": "Sombrero_Chihuahua.webp",
        "description": "A sombrero chihuahua.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 418,
        "name": "Sphinx",
        "image": "Sphinx.webp",
        "description": "A sphinx.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 419,
        "name": "Spitting Dino",
        "image": "Spitting_Dino.webp",
        "description": "A spitting dino.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 420,
        "name": "Squirrel",
        "image": "Squirrel.webp",
        "description": "A squirrel.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 421,
        "name": "Starry Owl",
        "image": "Starry_Owl.webp",
        "description": "A starry owl.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 422,
        "name": "Storm Axolotl",
        "image": "Storm_Axolotl.png",
        "description": "A storm axolotl.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 423,
        "name": "Storm Dominus",
        "image": "Storm_Dominus.png",
        "description": "A storm dominus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 424,
        "name": "Storm Dragon",
        "image": "Storm_Dragon.webp",
        "description": "A storm dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 425,
        "name": "Storm Wolf",
        "image": "Storm_Wolf.png",
        "description": "A storm wolf.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 426,
        "name": "Strawberry Corgi",
        "image": "Strawberry_Corgi.webp",
        "description": "A strawberry corgi.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 427,
        "name": "Subzero Cat",
        "image": "Subzero_Cat.png",
        "description": "A subzero cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 428,
        "name": "Sun Angelus",
        "image": "Sun_Angelus.webp",
        "description": "A sun angelus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 429,
        "name": "Super Corgi",
        "image": "Super_Corgi.webp",
        "description": "A super corgi.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 430,
        "name": "Tabby Cat",
        "image": "Tabby_Cat.webp",
        "description": "A tabby cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 431,
        "name": "Tarantula",
        "image": "Tarantula.webp",
        "description": "A tarantula.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 432,
        "name": "Tech Bull",
        "image": "Tech_Bull.png",
        "description": "A tech bull.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 433,
        "name": "Tech Horse",
        "image": "Tech_Horse.png",
        "description": "A tech horse.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 434,
        "name": "Tech Ninja Panda",
        "image": "Tech_Ninja_Panda.webp",
        "description": "A tech ninja panda.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 435,
        "name": "Tech Puma",
        "image": "Tech_Puma.png",
        "description": "A tech puma.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 436,
        "name": "Tech Yee-Haw Cat",
        "image": "Tech_Yee-haw_Cat.webp",
        "description": "A tech yee-haw cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 437,
        "name": "Tech Yee-Haw Dog",
        "image": "Tech_Yee-haw_Dog.webp",
        "description": "A tech yee-haw dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 438,
        "name": "Teddy Bear",
        "image": "Teddy_Bear.webp",
        "description": "A teddy bear.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 439,
        "name": "Three Headed Dragon",
        "image": "Three_Headed_Dragon.webp",
        "description": "A three headed dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 440,
        "name": "Tiger",
        "image": "Tiger.webp",
        "description": "A tiger.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 441,
        "name": "Tiki Dominus",
        "image": "Tiki_Dominus.webp",
        "description": "A tiki dominus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 442,
        "name": "Titanic Blazing Bat",
        "image": "Titanic_Blazing_Bat.webp",
        "description": "A titanic blazing bat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 443,
        "name": "Titanic Cat",
        "image": "Titanic_Cat.webp",
        "description": "A titanic cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 444,
        "name": "Titanic Diamond Dragon",
        "image": "Titanic_Diamond_Dragon.webp",
        "description": "A titanic diamond dragon.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 445,
        "name": "Titanic Reindeer Cat",
        "image": "Titanic_Reindeer_Cat.webp",
        "description": "A titanic reindeer cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 446,
        "name": "Titanic Storm Agony",
        "image": "Titanic_Storm_Agony.webp",
        "description": "A titanic storm agony.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 447,
        "name": "Toy Chest Mimic",
        "image": "Toy_Chest_Mimic.png",
        "description": "A toy chest mimic.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 448,
        "name": "Turkey",
        "image": "Turkey.webp",
        "description": "A turkey.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 449,
        "name": "Turtle",
        "image": "Turtle.webp",
        "description": "A turtle.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 450,
        "name": "Turtle In A Bucket",
        "image": "Turtle_in_a_Bucket.webp",
        "description": "A turtle in a bucket.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 451,
        "name": "Umbrella Cat",
        "image": "Umbrella_Cat.webp",
        "description": "A umbrella cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 452,
        "name": "Umbrella Dog",
        "image": "Umbrella_Dog.webp",
        "description": "A umbrella dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 453,
        "name": "Unicorn",
        "image": "Unicorn.webp",
        "description": "A unicorn.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 454,
        "name": "Unicorn Kitten",
        "image": "Unicorn_Kitten.webp",
        "description": "A unicorn kitten.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 455,
        "name": "Valentine'S Bear",
        "image": "Valentine's_Bear.png",
        "description": "A valentine's bear.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 456,
        "name": "Valentine'S Bee",
        "image": "Valentine's_Bee.png",
        "description": "A valentine's bee.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 457,
        "name": "Valentine'S Owl",
        "image": "Valentine's_Owl.png",
        "description": "A valentine's owl.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 458,
        "name": "Vampire Bat",
        "image": "Vampire_Bat.webp",
        "description": "A vampire bat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 459,
        "name": "Walrus",
        "image": "Walrus.webp",
        "description": "A walrus.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 460,
        "name": "Werewolf",
        "image": "Werewolf.webp",
        "description": "A werewolf.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 461,
        "name": "Whale Shark",
        "image": "Whale_Shark.webp",
        "description": "A whale shark.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 462,
        "name": "Willow Wisp",
        "image": "Willow_Wisp.webp",
        "description": "A willow wisp.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 463,
        "name": "Witch Cat",
        "image": "Witch_Cat.webp",
        "description": "A witch cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 464,
        "name": "Wizard Westie",
        "image": "Wizard_Westie.webp",
        "description": "A wizard westie.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 465,
        "name": "Woodpecker",
        "image": "Woodpecker.png",
        "description": "A woodpecker.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 466,
        "name": "Wyvern Of Hades",
        "image": "Wyvern_of_Hades.webp",
        "description": "A wyvern of hades.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 467,
        "name": "Yee-Haw Cat",
        "image": "Yee-haw_Cat.webp",
        "description": "A yee-haw cat.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 468,
        "name": "Yee-Haw Dog",
        "image": "Yee-haw_Dog.webp",
        "description": "A yee-haw dog.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 469,
        "name": "Zebra",
        "image": "Zebra.webp",
        "description": "A zebra.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 470,
        "name": "Zeus Bull",
        "image": "Zeus_Bull.png",
        "description": "A zeus bull.",
        "rap": 0,
        "sellingPrice": 0
    },
    {
        "id": 471,
        "name": "Zombie Deer",
        "image": "Zombie_Deer.webp",
        "description": "A zombie deer.",
        "rap": 0,
        "sellingPrice": 0
    }
];

  // Function to render items in the grid
  function renderItems(itemsToRender) {
    itemGrid.innerHTML = ''; // Clear existing items
    itemsToRender.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('item');
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <p>${item.name}</p>
      `;
      itemElement.addEventListener('click', () => toggleItemSelection(item));
      itemGrid.appendChild(itemElement);
    });
  }

  // Function to toggle item selection
  function toggleItemSelection(item) {
    const index = selectedItems.findIndex(selectedItem => selectedItem.id === item.id);
    if (index === -1) {
      // Add item if it's not already selected
      selectedItems.push({...item, customRap: 0, customSellingPrice: 0}); // Store custom values
    } else {
      // Remove item if it's already selected
      selectedItems.splice(index, 1);
    }
    renderSelectedItems();
    updateItemGridSelection();
  }

  function parseCompactNumber(input) {
    const cleanInput = input.trim().toUpperCase();
    const multipliers = {
      K: 1e3,
      M: 1e6,
      B: 1e9,
      T: 1e12,
      P: 1e15,
      E: 1e18
    };

    const regex = /^(\d+(?:\.\d+)?)\s*([KM PTE])?$/;
    const match = cleanInput.match(regex);

    if (!match) {
      return NaN; // Not a valid input
    }

    let number = parseFloat(match[1]);
    const suffix = match[2];

    if (suffix && multipliers[suffix]) {
      number *= multipliers[suffix];
    }

    return number;
  }

  // Function to handle changes in RAP input
  function handleRapChange(item, newRapInput) {
    const newRap = parseCompactNumber(newRapInput);
    if (isNaN(newRap)) {
      alert("Invalid RAP input. Please enter a valid number (e.g., 1000, 10k, 10M).");
      return;
    }
    item.customRap = newRap;
    renderSelectedItems(); // Re-render to update displayed values
  }

    // Function to handle changes in Selling Price input
  function handleSellingPriceChange(item, newPriceInput) {
    const newPrice = parseCompactNumber(newPriceInput);
    if (isNaN(newPrice)) {
      alert("Invalid Price input. Please enter a valid number (e.g., 1000, 10k, 10M).");
      return;
    }
    item.customSellingPrice = newPrice;
    renderSelectedItems(); // Re-render to update displayed values
  }

  function formatNumber(num) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "B" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(2).replace(rx, "$1") + item.symbol : "0";
  }

  // Function to render selected items
  function renderSelectedItems() {
    selectedItemsContainer.innerHTML = ''; // Clear existing selected items
    selectedItems.forEach(item => {
      const selectedItemElement = document.createElement('div');
      selectedItemElement.classList.add('selected-item');

      const discount = ((item.customRap - item.customSellingPrice) / item.customRap) * 100;
      const discountFormatted = isNaN(discount) ? 0 : discount.toFixed(0);

      const formattedRap = formatNumber(item.customRap);
      const formattedPrice = formatNumber(item.customSellingPrice);

      selectedItemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div style="display: flex; flex-direction: column; align-items: flex-start;">
          <span>${item.name}</span>
          <span>RAP: <input type="text" value="${item.customRap}" data-item-id="${item.id}" class="rap-input"> (${formattedRap})</span>
          <span>Price: <input type="text" value="${item.customSellingPrice}" data-item-id="${item.id}" class="price-input"> (${formattedPrice})</span>
          <span style="color: red;">Discount: ${discountFormatted}%</span>
        </div>
      `;
      selectedItemsContainer.appendChild(selectedItemElement);
    });

    // Attach event listeners to the input fields after they are rendered
    document.querySelectorAll('.rap-input').forEach(input => {
      input.addEventListener('change', (e) => {
        const itemId = parseInt(e.target.dataset.itemId);
        const newItem = selectedItems.find(item => item.id === itemId);
        handleRapChange(newItem, e.target.value);
      });
    });

    document.querySelectorAll('.price-input').forEach(input => {
      input.addEventListener('change', (e) => {
        const itemId = parseInt(e.target.dataset.itemId);
        const newItem = selectedItems.find(item => item.id === itemId);
        handleSellingPriceChange(newItem, e.target.value);
      });
    });
  }

  // Function to update the visual selection state in the item grid
  function updateItemGridSelection() {
    const itemElements = document.querySelectorAll('.item');
    itemElements.forEach(itemElement => {
      const itemName = itemElement.querySelector('p').textContent;
      const item = items.find(i => i.name === itemName);
      if (selectedItems.find(selectedItem => selectedItem.id === item.id)) {
        itemElement.classList.add('selected');
      } else {
        itemElement.classList.remove('selected');
      }
    });
  }

  // Search functionality
  itemSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm));
    renderItems(filteredItems);
    updateItemGridSelection();
  });

  // Initial render
  renderItems(items);
});