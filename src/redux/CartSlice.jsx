import{createSlice}from'@reduxjs/toolkit';
const slice=createSlice({name:'cart',initialState:{items:[]},reducers:{
addItem(s,a){let x=s.items.find(x=>x.id===a.payload.id);if(x)x.quantity++;else s.items.push({...a.payload,quantity:1})},
increaseQuantity(s,a){let x=s.items.find(x=>x.id===a.payload);if(x)x.quantity++},
decreaseQuantity(s,a){let x=s.items.find(x=>x.id===a.payload);if(x){if(x.quantity>1)x.quantity--;else s.items=s.items.filter(x=>x.id!==a.payload)}},
removeItem(s,a){s.items=s.items.filter(x=>x.id!==a.payload)}
}});export const{addItem,increaseQuantity,decreaseQuantity,removeItem}=slice.actions;export default slice.reducer;
