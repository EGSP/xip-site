import type { ReactNode } from 'react';
import { Card } from 'antd';
import { BranchesOutlined, DashboardOutlined, FieldNumberOutlined, StopOutlined } from '@ant-design/icons';
import { AntdProvider } from '../antd/AntdProvider';
import { control } from '../data/site';
import { SectionHead } from './SectionHead';

const icons: Record<(typeof control.items)[number]['icon'], ReactNode> = {
    steps: <FieldNumberOutlined />,
    stop: <StopOutlined />,
    outcomes: <BranchesOutlined />,
    usage: <DashboardOutlined />,
};

/**
 * Раздел «Контроль»: четыре карточки со свойствами исполнения хода.
 *
 * Колонки задаёт CSS-сетка `.control__grid`, а не `Row`/`Col` из antd: стили сетки antd
 * описывают все ширины для всех точек перелома и втрое увеличили бы CSS страницы.
 */
export default function Control() {
    return (
        <AntdProvider>
            <SectionHead title={control.title} />
            <div className="control__grid">
                {control.items.map((item) => (
                    <Card key={item.icon} className="control-card" variant="borderless">
                        {icons[item.icon]}
                        <span className="control-card__title">{item.title}</span>
                        <p className="control-card__text">{item.text}</p>
                    </Card>
                ))}
            </div>
        </AntdProvider>
    );
}
