/**
 * Знак XIP: три строки журнала разной длины. Средняя строка окрашена основным цветом темы.
 * Тот же рисунок лежит в public/favicon.svg.
 */
export function Mark({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <rect width="32" height="32" rx="1" fill="#f4f4f5" />
            <rect x="7" y="9" width="18" height="3" fill="#09090b" />
            <rect x="7" y="14.5" width="11" height="3" style={{ fill: 'var(--ant-color-primary, #446cdc)' }} />
            <rect x="7" y="20" width="15" height="3" fill="#09090b" />
        </svg>
    );
}
