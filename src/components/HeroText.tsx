import { Tag, Typography } from 'antd';
import { AntdProvider } from '../antd/AntdProvider';
import { hero, site } from '../data/site';

export default function HeroText() {
    return (
        <AntdProvider>
            <div className="hero__product">
                <span className="hero__name">{site.name}</span>
                <Tag className="hero__tag" color="blue" variant="outlined">
                    {site.tag}
                </Tag>
            </div>
            <Typography.Title level={1} className="hero__title">
                {hero.title}
            </Typography.Title>
            <Typography.Paragraph className="hero__lead">{hero.lead}</Typography.Paragraph>
        </AntdProvider>
    );
}
