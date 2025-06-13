class Menu {
    id: number
    title: string
    rating: string
    description: string
    image: string
    infos: string[]
    learnMore: string
    favorite: string

    constructor (
        id: number, 
        title: string,
        rating: string,
        description: string,
        image: string,
        infos: string[],
        learnMore: string,
        favorite: string
    )
    {
        this.id = id
        this.title = title 
        this.rating = rating
        this.description = description
        this.image = image
        this.infos = infos
        this.learnMore = learnMore
        this.favorite = favorite

    }
}

export default Menu
