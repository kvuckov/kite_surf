const navigation = [
    { id: 1, name: 'Home' , link: '/home' },
    { id: 2, name: 'About' , link: '/about' },
    { id: 3, name: 'Location' , link: '/location' },
    {
        id: 4,
        name: 'Services' ,
        link: '/services',
        subLinks: [
            { id: 1, subName: 'Beginners course' },
            { id: 2, subName: 'Triel course' },
            { id: 3, subName: 'Improvement' }
        ]
    },
    { id: 5, name: 'Pricing' , link: '/pricing' }
];

export default navigation;