import { Typography } from 'antd';
import { AntdProvider } from '../antd/AntdProvider';
import { hero, site } from '../data/site';

export default function HeroText() {
    return (
        <AntdProvider>
            <span className="hero__name">{site.name}</span>
            <Typography.Title level={1} className="hero__title">
                {hero.title}
            </Typography.Title>
            <Typography.Paragraph className="hero__lead">{hero.lead}</Typography.Paragraph>
        </AntdProvider>
    );
}
