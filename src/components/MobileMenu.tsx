import { Drawer } from 'antd';
import { sections, site } from '../data/site';

interface MobileMenuProps {
    open: boolean;
    onClose: () => void;
}

/** Боковая панель со ссылками на разделы для узкого экрана. */
export default function MobileMenu({ open, onClose }: MobileMenuProps) {
    return (
        <Drawer open={open} onClose={onClose} placement="right" size={320} title={site.name}>
            <nav className="mobile-nav" aria-label="Разделы страницы">
                {sections.map((section) => (
                    <a key={section.id} href={`#${section.id}`} onClick={onClose}>
                        {section.label}
                    </a>
                ))}
            </nav>
        </Drawer>
    );
}
