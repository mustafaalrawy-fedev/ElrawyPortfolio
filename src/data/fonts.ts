import {Inter, Open_Sans} from 'next/font/google';

const interFont = Inter({
    weight: ['400', '700', '800', '900'],
    subsets: ['latin'],
    display: 'fallback',
    variable: '--font-inter'
});

const openSansFont = Open_Sans({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-opens_sans'
})


export {interFont, openSansFont};


