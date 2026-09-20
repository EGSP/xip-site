import { AntdProvider } from '../antd/AntdProvider';
import { modes } from '../data/site';
import { SectionHead } from './SectionHead';

/** Раздел «Применение»: три вида сессий в три колонки. */
export default function Modes() {
    return (
        <AntdProvider>
            <SectionHead title={modes.title} lead={modes.lead} />
            <div className="modes__grid">
                {modes.items.map((item, index) => (
                    <div key={item.kind} className="mode">
                        <span className="mode__kind">
                            {String(index + 1).padStart(2, '0')} / {item.kind}
                        </span>
                        <span className="mode__title">{item.title}</span>
                        <p className="mode__text">{item.text}</p>
                    </div>
                ))}
            </div>
        </AntdProvider>
    );
}
