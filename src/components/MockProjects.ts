import { Project } from './Project';

export const MOCK_PROJECTS = [
    new Project({
        id: 1,
        name: 'Jakarta',
        description: 'Jakarta is the capital and largest city of Indonesia, located on the northwest of the island of Java.',
        imageUrl: 'assets/placeimg_500_300_arch4.jpg',
        contractTypeId: 3,
        contractSignedOn: '2013-08-04T22:39:41.473Z',
        budget: 1000000,
        isActive: false
    }),

    new Project({
        id: 2,
        name: 'Surabaya',
        description: 'Surabaya is the second largest city in Indonesia after Jakarta and the capital of East Java.',
        imageUrl: '/assets/placeimg_500_300_arch1.jpg',
        contractTypeId: 4,
        contractSignedOn: '2012-08-06T21:21:31.419Z',
        budget: 2000000,
        isActive: true
    }),

    new Project({
        id: 3,
        name: 'Bali',
        description: 'Bali is an island and province of Indonesia. The province includes the island of Bali and a few smaller neighbouring islands.',
        imageUrl: '/assets/placeimg_500_300_arch12.jpg',
        contractTypeId: 6,
        contractSignedOn: '2016-06-26T18:24:01.706Z',
        budget: 3000000,
        isActive: true
    }),

    new Project({
        id: 4,
        name: 'Bandung',
        description: 'Bandung is the capital of West Java province in Indonesia.',
        imageUrl: '/assets/placeimg_500_300_arch5.jpg',
        contractTypeId: 4,
        contractSignedOn: '2013-05-26T01:10:42.344Z',
        budget: 4000000,
        isActive: true
    }),

    new Project({
        id: 5,
        name: 'Yogyakarta',
        description: 'Yogyakarta is a city on the island of Java, Indonesia. It is the capital of Yogyakarta Special Region.',
        imageUrl: '/assets/placeimg_500_300_arch12.jpg',
        contractTypeId: 2,
        contractSignedOn: '2009-12-18T21:46:47.944Z',
        budget: 5000000,
        isActive: true
    }),

    new Project({
        id: 6,
        name: 'Lombok',
        description: 'Lombok is an island in West Nusa Tenggara province, Indonesia. It forms part of the chain of the Lesser Sunda Islands.',
        imageUrl: '/assets/placeimg_500_300_arch1.jpg',
        contractTypeId: 3,
        contractSignedOn: '2016-09-23T21:27:25.035Z',
        budget: 6000000,
        isActive: false
    })
]