import { AntdProvider } from '../antd/AntdProvider';
import { SectionHead } from './SectionHead';

/**
 * Заголовок раздела как самостоятельный компонент страницы. Нужен разделам с интерактивной
 * частью: заголовок отрисовывается при сборке и не попадает в скрипт гидратации.
 */
export default function SectionHeading(props: Parameters<typeof SectionHead>[0]) {
    return (
        <AntdProvider>
            <SectionHead {...props} />
        </AntdProvider>
    );
}
