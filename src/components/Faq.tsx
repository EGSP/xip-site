import { Collapse } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { AntdProvider } from '../antd/AntdProvider';
import { faq } from '../data/site';

/**
 * Список вопросов раздела «Вопросы». Ответы отрисовываются при сборке (`forceRender`) и скрыты
 * до раскрытия, поэтому их текст есть в HTML страницы.
 */
export default function Faq() {
    return (
        <AntdProvider>
            <Collapse
                ghost
                expandIconPlacement="end"
                expandIcon={({ isActive }) => (isActive ? <MinusOutlined /> : <PlusOutlined />)}
                items={faq.items.map((item, index) => ({
                    key: String(index),
                    label: item.question,
                    forceRender: true,
                    children: <p className="faq__answer">{item.answer}</p>,
                }))}
            />
        </AntdProvider>
    );
}
