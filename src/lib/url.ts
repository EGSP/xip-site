/** Путь внутри сайта с учётом каталога публикации (`base` в конфигурации Astro). */
export function withBase(path: string) {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
