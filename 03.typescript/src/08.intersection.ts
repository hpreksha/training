type Linear_grad = {
    linear:() => void
};


type Monotone_grad = {
    monotone:() => void
};


type Grad = Linear_grad & Monotone_grad;


let obj: Grad = {
    linear:()=> {},
    monotone:()=> {}
}


type Grad2 = Partial<Linear_grad & Monotone_grad>;
let obj2:Grad2 = {
    linear:()=>{}
}

type Grad3 = Required<Linear_grad & Monotone_grad>;