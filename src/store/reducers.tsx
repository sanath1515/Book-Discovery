export type bookState = {
    searchText:string,
    category:string,
    singleViewId:string
}

export const initialBookState = {
    searchText:"",
    category:"",
    singleViewId:"1"
}

type Action = {type:string,payload:string}

export const booksReducer = (state:bookState = initialBookState,action:Action)=>
{
    switch(action.type)
    {
        case "SET_CATEGORY":{
            return {...state,category:action.payload};
        }
        case "SET_SEARCH_TEXT":{
            return {...state,searchText:action.payload};
        }
        case "SET_SINGLE_VIEW_ID":{
            return {...state,singleViewId:action.payload};
        }
        default:
            return state;
    }
}