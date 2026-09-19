import { Typography } from 'antd';

interface SectionHeadProps {
    eyebrow: string;
    title: string;
    lead?: string;
}

/** Заголовок раздела: моноширинная метка, заголовок второго уровня и необязательный подзаголовок. */
export function SectionHead({ eyebrow, title, lead }: SectionHeadProps) {
    return (
        <div className="section-head">
            <span className="eyebrow">{eyebrow}</span>
            <Typography.Title level={2} className="section-title">
                {title}
            </Typography.Title>
            {lead && <Typography.Paragraph className="section-lead">{lead}</Typography.Paragraph>}
        </div>
    );
}
