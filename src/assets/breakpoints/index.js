const size = {
    mobile: 320,
    tablet: 481,
    laptop: 769,
    desktop: 1025,
    tv: 1201,
};

export const device = {
    mobile: `(min-width: ${size.mobile}px)`,
    tablet: `(min-width: ${size.tablet}px)`,
    laptop: `(min-width: ${size.laptop}px)`,
    desktop: `(min-width: ${size.desktop}px)`,
    tv: `(min-width: ${size.tv}px)`
};