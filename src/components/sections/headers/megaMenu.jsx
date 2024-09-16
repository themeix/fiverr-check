import React from 'react';
import Link from 'next/link';
import { IoIosHelp } from 'react-icons/io'; // Import the icon
import { cn } from '@/lib/utils'; // Assuming this is a utility function for class names

import { getIconComponent } from '@/lib/iconUtils'; // Import the utility function


const MegaMenu = ({ data, bgColor, color }) => {
    return (
        <div className={cn(`absolute left-0 top-full z-50 p-10 w-full bg-background drop-shadow-3xl rounded-2.5xl transition-all duration-300 ease-in translate-y-4 opacity-0 invisible group-hover:translate-y-0 group-hover:visible group-hover:opacity-100 ${bgColor}`)}>
            <div className="flex gap-6">
                {data.map(({ id, title, icon, links }) => {
                    const IconComponent = getIconComponent(icon); // Get the icon component
                    
                    return (
                        <div key={id} className="flex-1">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold">{title}</h3>
                                <IconComponent className="text-lg" /> {/* Display icon */}
                            </div>
                            <ul className="space-y-2">
                                {links.map(({ id, path, label }) => (
                                    <li key={id}>
                                        <Link href={path} className={cn(`block text-muted-foreground transition-all duration-500 hover:text-primary-foreground ${color}`)}>
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MegaMenu;