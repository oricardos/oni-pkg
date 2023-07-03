import React from 'react';
import './button.css'

export type ButtonProps = {
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    backgroundColor?: string;
    label: string;
    outline?: boolean;
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */

export default function Button ({
    color = 'primary',
    backgroundColor,
    label,
    outline = false,
    ...props
}: ButtonProps) {
    const mode = outline ? 'onipkg__outline' : '';
    return (
        <button 
            type="button"
            className={['onipkg__button', `onipkg__button-${color}`, mode].join(' ')}
            style={{ backgroundColor }}
            {...props}    
        >
            {label}
        </button>
    )
}