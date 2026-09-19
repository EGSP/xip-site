import type { ReactNode } from 'react';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import { antdTheme } from '../theme/antd';
import { styleCache } from './styleCache';

/**
 * Обёртка каждого React-компонента страницы: тема, локаль и общий кеш стилей.
 *
 * Стили antd помещаются в каскадный слой `antd`, поэтому собственные стили сайта, объявленные
 * вне слоёв, переопределяют их без повышения специфичности селекторов.
 */
export function AntdProvider({ children }: { children: ReactNode }) {
    return (
        <StyleProvider cache={styleCache()} layer>
            <ConfigProvider theme={antdTheme} locale={ruRU}>
                {children}
            </ConfigProvider>
        </StyleProvider>
    );
}
