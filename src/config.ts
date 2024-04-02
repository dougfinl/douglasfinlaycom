interface NavItem {
    path: string;
    title: string;
}

type NavItems = Record<string, NavItem>;

interface SocialItem {
    label: string;
    url: string;
    icon: string;
}

type Socials = Record<string, SocialItem>;

export const NAV: NavItems = {
    about: {
        path: '/about',
        title: 'About',
    },
    theatre: {
        path: '/theatre',
        title: 'Theatre',
    },
};

export const SITE = {
    title: 'Douglas Finlay',
    subtitle: 'Software Engineering · Technical Theatre',
    description: 'Software engineering and technical theatre',
    url: 'https://douglasfinlay.com',
};

export const SOCIALS: Socials = {
    github: {
        label: 'GitHub',
        url: 'https://github.com/douglasfinlay',
        icon: 'github',
    },
    email: {
        label: 'Mail',
        url: 'mailto:douglas@douglasfinlay.com',
        icon: 'envelope-fill',
    },
    linkedin: {
        label: 'LinkedIn',
        url: 'https://uk.linkedin.com/in/douglasfinlay',
        icon: 'linkedin',
    },
};
