class MenuProfile {
    id: number
    title: string
    description: string
    image: string
    cart: string 

    constructor (
        id: number, 
        title: string,
        description: string,
        image: string,
        cart: string 
    )
    {
        this.id = id
        this.title = title 
        this.description = description
        this.image = image
        this.cart = cart

    }
}

export default MenuProfile
