import { withBase } from '../lib/url';

interface ScreenProps {
    /** Строка в заголовке рамки: раздел интерфейса, который показан на снимке. */
    path: string;
    /** Что будет на снимке. Служит и подписью заглушки, и текстом `alt`. */
    caption: string;
    /** Путь к снимку от корня сайта, например '/screens/sessions.png'. Пока пуст, выводится заглушка. */
    src?: string;
}

/** Рамка под скриншот интерфейса с соотношением сторон 16:10. */
export function Screen({ path, caption, src }: ScreenProps) {
    return (
        <figure className="screen">
            <div className="screen__bar">
                <span>{path}</span>
                <span className="screen__dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                </span>
            </div>
            <div className="screen__body">
                {src ? (
                    <img src={withBase(src)} alt={caption} loading="lazy" decoding="async" />
                ) : (
                    <div className="screen__placeholder">
                        <span className="screen__label">Место для скриншота</span>
                        <span className="screen__caption">{caption}</span>
                        <span className="screen__size">1600 × 1000</span>
                    </div>
                )}
            </div>
        </figure>
    );
}
