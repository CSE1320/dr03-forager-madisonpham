// data/development.js
const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
};

export const fastFacts = {
    header: 'Fast Facts',
    message: 'Cap Diameter: 5-15cm<br>Gill Color: White<br>Stem Color: White<br>Habitat: Temperate regions',
};

const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution."
};

const pillColor = (isSelected) =>{
    if (isSelected === true) {
        return "#579076";
    } else if (isSelected === false) {
        return "#D9D9D9";
    } else {
        return "purple";
    }
}

export const pillValues = [
    { pillText: 'Favorites', pillType: 'Tags', bgColor: pillColor(true) },
    { pillText: 'Recent', pillType: 'Tags', bgColor: pillColor(false) },
    { pillText: 'Texas', pillType: 'Regions', bgColor: pillColor(true) },
    { pillText: 'North America', pillType: 'Regions', bgColor: pillColor(false) },
    { pillText: 'South America', pillType: 'Regions', bgColor: pillColor(false) },
    { pillText: 'Asia', pillType: 'Regions', bgColor: pillColor(false) },
    { pillText: 'Europe', pillType: 'Regions', bgColor: pillColor(false) },
    { pillText: 'Africa', pillType: 'Regions', bgColor: pillColor(false) },
    { pillText: 'Poisonous', pillType: 'Category', bgColor: pillColor(true) },
    { pillText: 'Medicinal', pillType: 'Category', bgColor: pillColor(false) },
    { pillText: 'Mythical', pillType: 'Category', bgColor: pillColor(false) },
    { pillText: 'Good for Broths', pillType: 'Category', bgColor: pillColor(false) },
];

export const mushroomValues = [
    {
        name: 'Death Cap',
        image: "/icons/death_cap.png",
        toxic: true,
        percent: '97% Match',
        percentColor: '#FF5050',
        region: 'North America' || 'Texas',
        favorites: true,
    },
    {
        name: 'Paddy Straw',
        image: "/icons/paddy_straw.png",
        toxic: false,
        percent: '90%',
        percentColor: 'rgba(115, 216, 159, 0.90)',
        region: 'North America' || 'Texas',
        favorites: true,
    },
    {
        name: 'Destroying Angel',
        image: "/icons/destroying_angel.png",
        toxic: true,
        percent: '80%',
        percentColor: '#F66',
        region: 'North America' || 'Texas',
        favorites: true,
    },
    {
        name: 'False Death Cap',
        image: "/icons/false_death_cap.png",
        toxic: true,
        percent: '70%',
        percentColor: '#FF7E7E',
        region: 'North America' || 'Texas',
        favorites: true,
    },
    {
        name: 'Puffball',
        image: "/icons/puffball.png",
        toxic: false,
        percent: '60%',
        percentColor: 'rgba(165, 165, 165, 0.90)',
        region: 'North America' || 'Texas',
        favorites: true,
    },
    {
        name: 'Your Photo',
        image: "/icons/your_photo.png"
    },
];

export const CharacteristicTable = [
    {
        input: 'Flat',
        characteristic: 'Cap Shape',
        value: 'Flat',
    },
    {
        input: 'Brown',
        characteristic: 'Cap Color',
        value: 'Yellow',
    },
    {
        input: 'Smooth',
        characteristic: 'Cap Texture',
        value: 'Smooth',
    },
    {
        input: 'Free',
        characteristic: 'Gills Type',
        value: 'Free',
    },
    {
        input: 'White',
        characteristic: 'Gills Color',
        value: 'White',
    },
    {
        input: 'Slender',
        characteristic: 'Stem Shape',
        value: 'Slender',
    },
    {
        input: 'White',
        characteristic: 'Stem Color',
        value: 'White',
    },
    {
        input: 'Absent',
        characteristic: 'Stem Ring',
        value: 'Absent',
    },
    {
        input: '?',
        characteristic: 'Habitat',
        value: 'Near oak/beech',
    },

];

// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {warningMessage, dummyData}; // Requires import {warningMessage, dummyData} from './data/development.js';
