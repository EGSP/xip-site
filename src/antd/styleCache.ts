import { createCache, extractStyle } from '@ant-design/cssinjs';

/**
 * Кеш стилей Ant Design для страницы, которая сейчас отрисовывается.
 *
 * Каждый React-компонент страницы — отдельный корень, и без общего кеша antd вставил бы
 * `<style>` рядом с каждым из них. Макет перед отрисовкой страницы заводит новый кеш,
 * компоненты пишут в него через `AntdProvider`, а собранные стили макет помещает в `<head>`.
 *
 * В браузере модуль загружается заново, и кеш подхватывает стили, уже вставленные при сборке.
 */
let current = createCache();

export function styleCache() {
    return current;
}

/** Отрисовывает содержимое страницы и возвращает его вместе со стилями antd, которые оно использует. */
export async function renderWithAntdStyles(render: () => Promise<string>) {
    current = createCache();
    const html = await render();
    return { html, styles: extractStyle(current) };
}
