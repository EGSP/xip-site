import { theme, type ThemeConfig } from 'antd';

const fontFamily =
    '"IBM Plex Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
const fontFamilyCode = '"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';

const accent = '#4d7cff';
const border = '#26262b';

/**
 * Тема Ant Design — единственный источник цветов, шрифтов и радиусов сайта.
 *
 * Токены попадают в CSS-переменные `--ant-*`, объявленные на классе `cssVar.key`. Этот класс
 * стоит на `<body>`, поэтому собственные стили сайта ссылаются на те же переменные, а не
 * повторяют значения.
 */
export const antdTheme: ThemeConfig = {
    algorithm: theme.darkAlgorithm,
    // На странице одна тема и одна версия antd: хеш в именах классов не нужен.
    hashed: false,
    cssVar: { key: 'xip-theme' },
    token: {
        borderRadius: 1,

        colorPrimary: accent,
        colorInfo: accent,
        colorLink: '#8aa8ff',
        colorBgBase: '#09090b',
        colorTextBase: '#f4f4f5',
        colorBorder: '#34343a',
        colorBorderSecondary: border,
        colorSplit: border,

        fontFamily,
        fontFamilyCode,
        fontSize: 16,
        fontSizeHeading1: 64,
        fontSizeHeading2: 44,
        fontSizeHeading3: 24,
        fontSizeHeading4: 20,
        fontWeightStrong: 700,

        motionDurationMid: '0.16s',
        motionDurationSlow: '0.24s',
    },
    components: {
        Typography: {
            titleMarginTop: 0,
            titleMarginBottom: 0,
        },
        Tabs: {
            inkBarColor: accent,
            itemColor: '#a1a1aa',
            itemHoverColor: '#f4f4f5',
            itemSelectedColor: '#f4f4f5',
            itemActiveColor: '#f4f4f5',
            titleFontSize: 16,
            horizontalItemGutter: 40,
            horizontalMargin: '0',
        },
        Card: {
            colorBgContainer: '#0f0f12',
            paddingLG: 32,
        },
        Collapse: {
            headerBg: 'transparent',
            contentBg: 'transparent',
            headerPadding: '24px 0',
            contentPadding: '0 48px 24px 0',
        },
        Tag: {
            defaultBg: 'transparent',
        },
        Drawer: {
            colorBgElevated: '#09090b',
        },
    },
};
