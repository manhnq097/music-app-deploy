import { useEffect } from 'react';
import Profile from './Profile';

const PrintProfile = () => {

    useEffect(() => {
        const printContents = document.getElementById('print-area').innerHTML;
        const appEle = document.querySelector('.app');
        appEle.innerHTML = printContents;
        appEle.style.overflowY = 'visible';
        window.print();
    }, [])

    return (
        <div id="print-area">
            <Profile />
        </div>
    )
}

export default PrintProfile;