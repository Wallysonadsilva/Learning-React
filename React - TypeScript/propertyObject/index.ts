// Object Types Challenge
// Based on what we discussed we need to make up our Property Objects and array,
// can you create that array, making sure to assign the correct Types?
// Add the properties to the Dashboard
// This is a continuation of the Challenge, in which you are asked to add
// the 3 properties image and title to the dashboard based on the 
// properties array

const propertityContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')

import { showReviewTotal, populateUser } from './utils'
let isOpen: boolean

// Reviews
const reviews : { 
    name: string; 
    stars: number; 
    loyaltyUser: boolean; 
    date: string
    }[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

// User
const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

//Properties
const properties: {
  image: string;
  title: string;
  price: number;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: string;
  }
  contact: [number, string];
  isAvailable: boolean;
}[] = [
  {
    image: '/images/img1.jpg',
    title: 'Beach House',
    price: 120,
    location: {
      firstLine: '123 Fake Street',
      city: 'New York City',
      code: 10001,
      country: 'United States of America'
    },
    contact: [+1-555-555-5555,'Ji1g9@example.com'],
    isAvailable: true
  },
  {
    image: '/images/img2.jpeg',
    title: 'Cottage',
    price: 75,
    location: {
      firstLine: '321 Fake Street',
      city: 'New York City',
      code: 10001,
      country: 'United States of America'
    },
    contact: [+1-555-555-5555,'Ji1g9@example.com'],
    isAvailable: false
  },
  {
    image: '/images/img3.jpg',
    title: 'Treehouse',
    price: 60,
    location: {
      firstLine: '555 Fake Street',
      city: 'New York City',
      code: 10001,
      country: 'United States of America'
    },
    contact: [+1-555-555-5555,'Ji1g9@example.com'],
    isAvailable: true
  }
]


// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

//add the properties
for (let i =0; i < properties.length; i++) {
  const card =document.createElement('')
  card.classList.add('card')
  card.innerHTML = properties[i].title
  const image =document.createElement('img')
  image.setAttribute('src', properties[i].image)
  card.append(image)
  propertityContainer?.appendChild(card)
}

// use your location, your current time, and the current temperature of your
// location
let currentLocation: [string,string, number] = ['London', '16:08', 13]
footer.innerHTML = currentLocation[0] + ' | ' + currentLocation[1] + ' | ' + currentLocation[2] + '°C'

