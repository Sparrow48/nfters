import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaEthereum } from 'react-icons/fa';




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

export const BIDING_DATA = {
    //Here index will be item id like mongoId 
    0: {
        bidImage: 'https://raw.githubusercontent.com/Sparrow48/nfters/development/src/assets/NFT3.png',
        profile: 'https://raw.githubusercontent.com/Sparrow48/nfters/development/src/assets/profile2.png',
        name: 'The Futr Abstr',
        bidAmount: '0.25 ',
        currency: 'ETH',
        currencyIcon: <FaEthereum />,
        stock: 8
    },
    1: {
        bidImage: 'https://raw.githubusercontent.com/Sparrow48/nfters/development/src/assets/NFT4.png',
        profile: 'https://raw.githubusercontent.com/Sparrow48/nfters/development/src/assets/profile2.png',
        name: 'The Futr Abstr',
        bidAmount: '0.35 ',
        currency: 'ETH',
        currencyIcon: <FaEthereum />,
        stock: 8
    },
    2: {
        bidImage: 'https://raw.githubusercontent.com/Sparrow48/nfters/development/src/assets/NFT5.png',
        profile: 'https://raw.githubusercontent.com/Sparrow48/nfters/development/src/assets/profile2.png',
        name: 'The Futr Abstr',
        bidAmount: '0.50 ',
        currency: 'ETH',
        currencyIcon: <FaEthereum />,
        stock: 8
    }
}

export const COLLECTIONS = {
    1: {
        profile: 'https://raw.githubusercontent.com/Sparrow48/nfters/development/src/assets/NFTS2.png',
        name: 'CriptoFunks',
        bidAmount: '19769.25 ',
        currencyIcon: <FaEthereum />,
        percentage: '+26.52%'

    },
    2: {
        profile: 'https://raw.githubusercontent.com/Sparrow48/nfters/development/src/assets/NFT7.png',
        name: 'Criptix',
        bidAmount: '2769.89 ',
        currencyIcon: <FaEthereum />,
        percentage: '+10.52%'

    },
    3: {
        profile: 'https://raw.githubusercontent.com/Sparrow48/nfters/development/src/assets/NFTS2.png',
        name: 'Frenswere',
        bidAmount: '9232.36 ',
        currencyIcon: <FaEthereum />,
        percentage: '+2.52%'

    },
    4: {
        profile: 'https://raw.githubusercontent.com/Sparrow48/nfters/development/src/assets/NFT7.png',
        name: 'PunkArt',
        bidAmount: '3652.23 ',
        currencyIcon: <FaEthereum />,
        percentage: '+1.52%'

    },
    5: {
        profile: 'https://raw.githubusercontent.com/Sparrow48/nfters/development/src/assets/NFTS2.png',
        name: 'Art Cripto',
        bidAmount: '10789.65 ',
        currencyIcon: <FaEthereum />,
        percentage: '+2.52%'

    },
} 