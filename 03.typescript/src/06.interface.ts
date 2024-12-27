// File Contents : Interfaces in typescript : Interfaces are used to define the structure of an object. An interface can be used to define an object type.


interface Rectangle {
    height:number,
    width:number
}
interface ColouredRectangle extends Rectangle {
    color: string
}

const rect_obj : ColouredRectangle = {
    height: 20,
    width: 10,
    color:"blue"
}