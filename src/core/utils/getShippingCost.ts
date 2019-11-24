import ShippingOption from "../../constants/ShippingOption";

const getShippingCost = (weight:number, shippingRate:number, shippingOption:string | undefined)=>{
    return ( weight * shippingRate *  (shippingOption === ShippingOption.ground ? 1 : 1.15));
}

export default getShippingCost;