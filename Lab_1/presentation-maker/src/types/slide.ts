import type { SlideObject } from "./object";
//Создать Union типы данных Background и SlideObject

//Генерация рандомного id
function generateId():string {
    const id = Date.now().toString().substring(4, 12)+Math.random().toString().substring(2, 8);
    return id;
}

type Background = 
    { type: 'none'} 
    | { type: 'color'; color: string } 
    | {type: 'image'; imageUrl: string } 
    | {type: 'gradient'; colors: string[]; angle?: number};

type Slide = {
    id: string;
    name: string;
    background: Background;
    objects: SlideObject[];
};

export { Slide, Background, generateId };