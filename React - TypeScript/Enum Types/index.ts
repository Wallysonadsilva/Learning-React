
// Enum Types
// Enum Types mini-challenge
// Replace the value of loyaltyUser to a GOLD_USER, SILVER_USER or BRONZE_USER, making sure to
// use what we learnt about Enums in the previous lesson. Make Sheia GOLD, Andrzej BRONZE 
// and Omar SILVER.
// 2. export the enum
// 3. Fix the function in the utils to show Sheias star as she is a GOLD_USER.

import { showReviewTotal, populateUser } from './utils'
import { Permissions, LoyaltyUser } from './enum'
const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')
let isOpen: boolean

// Reviews
// const reviews : { 
//     name: string; 
//     stars: number; 
//     loyaltyUser: LoyaltyUser; 
//     date: string;
//     }[] = [
//     {
//         name: 'Sheia',
//         stars: 5,
//         loyaltyUser: LoyaltyUser.GOLD_USER,
//         date: '01-04-2021'
//     },
//     {
//         name: 'Andrzej',
//         stars: 3,
//         loyaltyUser: LoyaltyUser.BRONZE_USER,
//         date: '28-03-2021'
//     },
//     {
//         name: 'Omar',
//         stars: 4,
//         loyaltyUser: LoyaltyUser.SILVER_USER,
//         date: '27-03-2021',
//         decription: 'Great hosts, Location was bit further than said'
//     },
// ]

// Reviews - converted to any type
const reviews : any[]= [
  {
      name: 'Sheia',
      stars: 5,
      loyaltyUser: LoyaltyUser.GOLD_USER,
      date: '01-04-2021'
  },
  {
      name: 'Andrzej',
      stars: 3,
      loyaltyUser: LoyaltyUser.BRONZE_USER,
      date: '28-03-2021'
  },
  {
      name: 'Omar',
      stars: 4,
      loyaltyUser: LoyaltyUser.SILVER_USER,
      date: '27-03-2021',
      description: 'Great hosts, location was a bit further than said',
  },
]

// User
// const you: {
//     firstName: string;
//     lastName: string;
//     isReturning: boolean;
//     age: number;
//     stayedAt: string[]
// } = {
//     firstName: 'Bobby',
//     lastName: 'Brown',
//     isReturning: true,
//     age: 35,
//     stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
// }



const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}



// Array of Properties
const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: [ number, string ];
    isAvailable: boolean;
}[] = [
    {
        image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true  
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1298239028490830, 'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    }
]

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer.appendChild(card)
}

// use your location, your current time, and the current temperature of your
// location
let currentLocation: [string,string, number] = ['London', '16:08', 13]
footer.innerHTML = currentLocation[0] + ' | ' + currentLocation[1] + ' | ' + currentLocation[2] + '°C'

