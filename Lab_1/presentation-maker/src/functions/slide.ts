import { Presentation } from '../types/presentation.js';
import { type Slide , type Background, generateId } from '../types/slide.js';

//Работа со слайдами
function addSlide(presentation: Presentation, slideName?: string): Presentation {
    const newSlide: Slide = {
        id: generateId(),
        name: slideName || `Слайд ${presentation.slides.length + 1}`,
        background: { type: 'none' },
        objects: [],
    }
    return {
        ...presentation,
        slides: [...presentation.slides, newSlide]
    }
}

function removeSlides(presentation: Presentation, slideIds: string[]): Presentation {
    return {
        ...presentation,
        slides: presentation.slides.filter((slide) => !slideIds.includes(slide.id))
    }
}

function moveSlide(presentation: Presentation, slideId: string, newIndex: number): Presentation {
    if (newIndex < 0 || newIndex >= (presentation.slides.length + 1)) {
        throw new Error("Неправильный индекс для перемещения слайда");
    }
    const nessesarySlide = presentation.slides.find((slide) => slide.id === slideId);
    if (!nessesarySlide) {
        throw new Error("Слайд с таким id не найден");
    }
    const slides = [...presentation.slides];
    const currentIndex = slides.indexOf(nessesarySlide);
    slides.splice(currentIndex, 1);
    slides.splice(newIndex, 0, nessesarySlide);
    return {
        ...presentation,
        slides: slides
    }
}    

//Работа с фоном слайда
function setSlideBackgroundColor(slide: Slide, color: string): Slide {
    const newBackground: Background = { type: 'color', color: color };
    return {
        ...slide,
        background: newBackground
    }
}

function setSlideBackgroundImage(slide: Slide, imageUrl: string): Slide {
    const newBackground: Background = { type: 'image', imageUrl: imageUrl };
    return {
        ...slide,
        background: newBackground
    }
}

function setSlideBackgroundGradient(slide: Slide, colors: string[], angle?: number): Slide {
    const newBackground: Background = { type: 'gradient', colors: colors, angle: angle };
    return {
        ...slide,
        background: newBackground
    }
}

function clearSlideBackground(slide: Slide): Slide {
    const newBackground: Background = { type: 'none' };
    return {
        ...slide,
        background: newBackground
    }
}