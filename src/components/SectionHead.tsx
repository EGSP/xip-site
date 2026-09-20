import { Typography } from 'antd';

interface SectionHeadProps {
    title: string;
    lead?: string;
}

/** Заголовок раздела: заголовок второго уровня и необязательный подзаголовок. */
export function SectionHead({ title, lead }: SectionHeadProps) {
    return (
        <div className="section-head">
            <Typography.Title level={2} className="section-title">
                {title}
            </Typography.Title>
            {lead && <Typography.Paragraph className="section-lead">{lead}</Typography.Paragraph>}
        </div>
    );
}
