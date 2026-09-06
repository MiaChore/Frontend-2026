import type { Slide } from "./slide";
//Создать типы данных Presentation и Slide

type Presentation = {
    id: string;
    name: string;
    slides: Slide[];
}

export { Presentation };