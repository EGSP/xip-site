import { lazy, Suspense, useState } from 'react';
import { Button, Tag } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { AntdProvider } from '../antd/AntdProvider';
import { sections, site } from '../data/site';
import { Mark } from './Mark';

// Панель загружается отдельным фрагментом при первом открытии меню.
const MobileMenu = lazy(() => import('./MobileMenu'));

/**
 * Шапка продукта. На широком экране — строка ссылок на разделы, на узком — кнопка,
 * открывающая боковую панель. Скрипт нужен только панели, поэтому страница подключает
 * шапку с `client:media` и на широком экране она остаётся статической разметкой.
 *
 * Панель монтируется при первом открытии: до этого её код не загружается, а её стили
 * не попадают в CSS страницы.
 */
export default function Header() {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    const show = () => {
        setMounted(true);
        setOpen(true);
    };

    return (
        <AntdProvider>
            <header className="site-header">
                <div className="container site-header__inner">
                    <a className="brand" href="#top" aria-label={`${site.name}: в начало страницы`}>
                        <Mark />
                        <span className="brand__name">{site.name}</span>
                        <Tag className="brand__tag">{site.tag}</Tag>
                    </a>
                    <nav className="site-nav" aria-label="Разделы страницы">
                        {sections.map((section) => (
                            <a key={section.id} href={`#${section.id}`}>
                                {section.label}
                            </a>
                        ))}
                    </nav>
                    <Button
                        className="site-header__menu"
                        type="text"
                        icon={<MenuOutlined />}
                        aria-label="Открыть меню"
                        onClick={show}
                    />
                </div>
            </header>
            {mounted && (
                <Suspense fallback={null}>
                    <MobileMenu open={open} onClose={() => setOpen(false)} />
                </Suspense>
            )}
        </AntdProvider>
    );
}
