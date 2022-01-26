export const initialState ={
    basket:[],
    user:null,
};
export const getBasketTotal =(basket) =>
basket.reduce((amount,item,)=> item.price + amount,0);

const reducer = (state,action) =>{
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.user,
            }
        case 'Add_to_basket':
            //logic for adding item to basket
            return {
                ...state,
                basket:[...state.basket,action.item],
             };

        case 'Empty_basket' :
            return{
                ...state,
                basket:[]
            }    
            

        case 'Remove_from_basket':
                //logic for removing item from basket

                // we cloned the basket
                 let newBasket = [...state.basket];

                //we check to see if product exists.
                const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
                if (index >= 0) {
                    newBasket.splice(index, 1);
                    //item exit in basket,remove it..
                }else{
                    console.warn(
                     `Cant remove product (id:  ${action.id}) as its not in basket!`
                    );
                };
            return { ...state,basket:newBasket};

            case "SET_USER" :
                return{
                    ...state,
                    user: action.user
                }
        default:
            return state;    
    }
};

export default reducer;
                                  