import List from "../Entities/List.entity";

export const createListModel = async (name:string) => {
    const list = await List.create({data:{name}});
    return {list};
}