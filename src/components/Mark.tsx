/**
 * Знак XIP: три строки журнала разной длины без подложки. Крайние строки наследуют цвет
 * текста от родителя, средняя окрашена основным цветом темы.
 */
export function Mark({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <rect x="2" y="6" width="28" height="4" fill="currentColor" />
            <rect x="2" y="14" width="17" height="4" style={{ fill: 'var(--ant-color-primary, #4d7cff)' }} />
            <rect x="2" y="22" width="23" height="4" fill="currentColor" />
        </svg>
    );
}
