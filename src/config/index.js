import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';



export const MARKET_PLACED = {
    'all-nfts': 'All Nfts',
    'new': 'New',
    'art': 'Art',
    'sports': 'Sports',
    'utility': 'Utility',
    'music': 'Music',
    'domain-name': 'Domain Name',

}

export const MY_ACCOUNT = {
    'profile': 'Profile',
    'favorite': 'Favorite',
    'my-collections': 'My Collections',
    'settings': 'Settings',
}

export const SOCIAL_ACCOUNT = {
    facebook: {
        link: 'https://www.facebook.com/',
        label: <BsFacebook />,
        className: ' text-blue-800'
    },
    twitter: {
        link: 'https://www.twitter.com',
        label: <AiFillTwitterCircle />,
        className: ' text-blue-400'

    },
    linkedIn: {
        link: 'https://www.linkedin.com',
        label: <BsLinkedin />,
        className: ' text-blue-600'

    }
}