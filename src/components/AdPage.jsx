import { useState } from 'react';
import Ad from './Ad';

function AdPage() {
    const [visible, setVisible] = useState(true);
    const handleToggleClick = () => {
        setVisible(!visible);
    };
    return (
        <div>
            <Ad visible={visible} />
            <button onClick={handleToggleClick}>
                {visible ? '광고 안보기' : '광고 보기'}
            </button>
        </div>
    );
}

export default AdPage;
