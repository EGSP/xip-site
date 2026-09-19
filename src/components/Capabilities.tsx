import { Tabs } from 'antd';
import { AntdProvider } from '../antd/AntdProvider';
import { capabilities } from '../data/site';
import { Screen } from './Screen';

/**
 * Вкладки раздела «Возможности»: описание и снимок интерфейса.
 *
 * Все вкладки отрисовываются при сборке (`forceRender`), чтобы их текст был в HTML страницы
 * и до загрузки скрипта, и для поисковых систем; переключение работает после гидратации.
 * Содержимое вкладок — обычная разметка: Typography из antd увеличил бы скрипт гидратации.
 */
export default function Capabilities() {
    return (
        <AntdProvider>
            <Tabs
                items={capabilities.items.map((item) => ({
                    key: item.key,
                    label: item.label,
                    forceRender: true,
                    children: (
                        <div className="capability">
                            <div>
                                <h3 className="capability__title">{item.title}</h3>
                                <p className="capability__text">{item.text}</p>
                            </div>
                            <Screen {...item.screen} />
                        </div>
                    ),
                }))}
            />
        </AntdProvider>
    );
}
