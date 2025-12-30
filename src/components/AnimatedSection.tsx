import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type AnimationType = 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'fadeSlideUp';

interface AnimatedSectionProps {
    children: ReactNode;
    animation?: AnimationType;
    delay?: number;
    duration?: number;
    threshold?: number;
    className?: string;
    triggerOnce?: boolean;
}

const animationClasses: Record<AnimationType, { initial: string; animate: string }> = {
    fade: {
        initial: 'opacity-0',
        animate: 'opacity-100',
    },
    slideUp: {
        initial: 'opacity-0 translate-y-12',
        animate: 'opacity-100 translate-y-0',
    },
    slideDown: {
        initial: 'opacity-0 -translate-y-12',
        animate: 'opacity-100 translate-y-0',
    },
    slideLeft: {
        initial: 'opacity-0 translate-x-12',
        animate: 'opacity-100 translate-x-0',
    },
    slideRight: {
        initial: 'opacity-0 -translate-x-12',
        animate: 'opacity-100 translate-x-0',
    },
    scale: {
        initial: 'opacity-0 scale-95',
        animate: 'opacity-100 scale-100',
    },
    fadeSlideUp: {
        initial: 'opacity-0 translate-y-8',
        animate: 'opacity-100 translate-y-0',
    },
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    animation = 'fadeSlideUp',
    delay = 0,
    duration = 700,
    threshold = 0.1,
    className = '',
    triggerOnce = true,
}) => {
    const { elementRef, isVisible } = useScrollAnimation({
        threshold,
        triggerOnce,
    });

    const { initial, animate } = animationClasses[animation];

    return (
        <div
            ref={elementRef}
            className={`
        transition-all will-change-transform
        ${isVisible ? animate : initial}
        ${className}
      `}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
        >
            {children}
        </div>
    );
};
