import Item from "../Entities/Item.entity";
import List from "../Entities/List.entity";

export const createItemModel = async (name:string,listId:number,check:boolean) => {
    const item = Item.create({
        data:{
            name,
            check,
            fk_list:listId
        }
    });
}