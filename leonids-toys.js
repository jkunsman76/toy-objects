



const toys = [
    {
        id: 1,
        name: "Playstation 5",
        color: "White",
        pieces: 3,
        chokingHazard: false,
        weight: 3900,
        requiresBatteries: false,
        price: 600
    },
    {
        id: 2,
        name: "HotWheels",
        color: "any",
        pieces: 1,
        chokingHazard: true,
        weight: 36.25,
        requiresBatteries: false,
        price: 5
    },
    {
        id: 3,
        name: "Barbie",
        color: "any",
        pieces: 1,
        chokingHazard: true,
        weight: 205.5,
        requiresBatteries: false,
        price: 25
    }

]
const addToyToList = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.unshift(toyObject)
}
const xbox = {
    name: "xBox1",
    color: "Black",
    pieces: 1,
    chokingHazard: false,
    weight: 4200,
    requiresBatteries: true,
    price: 300
}
addToyToList(xbox)

const toytofind = 2

for (const toy of toys) {
    if (toy.id === toytofind) {
        toy.price = toy.price + (toy.price * .05)
        // console.log(`The ${toy.name} cost $${toy.price} and it weights ${toy.weight} grams.`)
    }
}

console.log(toys)