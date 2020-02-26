import { GiFieldGun } from "react-icons/gi";

let initialState = {
    projects: [
        {projectId: 1, name: "1", data: "20-10-10", images: [
            "https://cdn.pixabay.com/photo/2017/06/29/16/58/spices-2454799_1280.jpg"   
            ]},
        {projectId: 2, name: "2", data: "20-06-08", images: [
            "https://cdn.pixabay.com/photo/2017/07/28/13/29/spices-2548653__480.jpg"  
           ]},
        {projectId: 3, name: "3", data: "20-10-07", images: [
            "https://cdn.pixabay.com/photo/2016/02/19/10/50/tea-1209428__480.jpg"   
           ]},
        {projectId: 4, name: "4", data: "20-10-07", images: [
            "https://cdn.pixabay.com/photo/2014/05/22/21/47/honey-dipper-351485__480.jpg"   
           ]},
        {projectId: 5, name: "5", data: "20-10-07", images: [
            "https://cdn.pixabay.com/photo/2016/11/23/15/14/shelf-1853439__480.jpg"    
           ]},
        {projectId: 6, name: "6", data: "20-10-07", images: [
            "https://cdn.pixabay.com/photo/2016/11/16/21/23/infused-water-1830104__480.jpg"    
           ]},
        {projectId: 7, name: "7", data: "20-10-07", images: [
            "https://cdn.pixabay.com/photo/2015/09/27/15/28/lemons-960804__480.jpg" 
           ]},
        {projectId: 8, data: "20-10-07", images: [
            "https://cdn.pixabay.com/photo/2016/11/16/21/35/infused-water-1830120__480.jpg"   
           ]},
    ]
}

export const projectsReducer = ( state = initialState, action ) => {
    switch(action.type) {
        default: return state;
    }
}

