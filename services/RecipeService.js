import {ApiService} from './ApiService';

const endPoint = 'recipe';

export const RecipeService = {
    get(id){
        return ApiService.get(`${endPoint}?id=${id}`);
    },
    listAll(){
        return ApiService.get(endPoint)
    },
    create(newRecipe){
        return ApiService.post(endPoint, newRecipe);
    },
    remove(id){
        return ApiService.delete(`${endPoint}?id=${id}`);
    }
}