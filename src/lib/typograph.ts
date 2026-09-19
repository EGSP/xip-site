const NBSP = ' ';

// Предлоги, союзы и частицы, которые не должны оставаться в конце строки.
const shortWords = /(^|[\s«(])([А-Яа-яЁёA-Za-z]{1,2}|для|без|при|над|под|про|или|как|что) /g;

/**
 * Русская типографика для текстов страницы: неразрывный пробел после коротких слов
 * и перед тире, чтобы строка не начиналась с тире и не заканчивалась предлогом.
 */
export function typograph(text: string) {
    let result = text.replace(/ — /g, `${NBSP}— `);
    // Короткие слова могут идти подряд («и в»), поэтому замена повторяется до неподвижной точки.
    let previous;
    do {
        previous = result;
        result = result.replace(shortWords, `$1$2${NBSP}`);
    } while (result !== previous);
    return result;
}
