// utils/iconUtils.js

import { IoIosAddCircleOutline, IoIosAddCircle, IoIosAdd, IoIosAirplane, IoIosAlarm, IoIosAlbums, IoIosAlert } from 'react-icons/io';

// Create a map of icon names to components
const iconMap = {
    IoIosAddCircleOutline,
    IoIosAddCircle,
    IoIosAdd,
    IoIosAirplane,
    IoIosAlarm,
    IoIosAlbums,
    IoIosAlert
};

export const getIconComponent = (iconName) => {
    return iconMap[iconName] || IoIosAlert; // Default to a fallback icon
};
