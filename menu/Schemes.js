// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const Schemes = {
    id: 'schemes',
    title: 'Schemes',
    caption: 'Government Investment Schemes',
    type: 'group',
    children: [
        {
            id: 'schemes',
            title: 'Schemes',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'schemes',
                    title: 'Schemes',
                    type: 'item',
                    url: '/pages/Schemes',
                    target: true
                }
            ]
        }
    ]
};

export default Schemes;
