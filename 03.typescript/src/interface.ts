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