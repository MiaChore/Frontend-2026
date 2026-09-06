import type { Presentation } from '../types/presentation.js';
import { generateId } from '../types/slide.js';

//Работы с презентацией
function createPresentation(name: string): Presentation {
    return {
        id: generateId(),
        name: name,
        slides: [
            {
                id: generateId(),
                name: "Первай слайд",
                background: { type: 'none' },
                objects: [],
            }
        ],
    };
}

function updatePresentationName(presentation: Presentation, name: string): Presentation {
    return {
        ...presentation,
        name: name,
    };
}

function savePresentation(presentation: Presentation): string {
    return JSON.stringify(presentation)
}

function loadPresentation(json: string): Presentation {
    return JSON.parse(json) as Presentation
}

