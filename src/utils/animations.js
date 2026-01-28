// Animation variants for different use cases

// Fade in animations
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// Slide up animations
export const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// Slide from left
export const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// Slide from right
export const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// Scale animations
export const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

// Stagger container for animating children
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

// Card hover effect
export const cardHover = {
    rest: {
        scale: 1,
        transition: { duration: 0.3, ease: "easeInOut" }
    },
    hover: {
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3, ease: "easeInOut" }
    }
};

// Button hover effect
export const buttonHover = {
    rest: {
        scale: 1,
        transition: { duration: 0.2 }
    },
    hover: {
        scale: 1.05,
        transition: { duration: 0.2 }
    },
    tap: {
        scale: 0.95,
        transition: { duration: 0.1 }
    }
};

// Page transition
export const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3, ease: "easeIn" }
    }
};

// Rotate and scale on hover
export const rotateScale = {
    rest: {
        scale: 1,
        rotate: 0,
        transition: { duration: 0.3 }
    },
    hover: {
        scale: 1.1,
        rotate: 5,
        transition: { duration: 0.3 }
    }
};

// Float animation (for icons, badges, etc.)
export const float = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

// Pulse animation
export const pulse = {
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};
