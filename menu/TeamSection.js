// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'connect',
    title: 'Connect',
    caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'team',
            title: 'TeamSection',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'team',
                    title: 'Team',
                    type: 'item',
                    url: '/pages/Team',
                    target: true
                }
            ]
        }
    ]
};

export default pages;
