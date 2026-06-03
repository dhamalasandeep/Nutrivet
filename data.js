const dogBreeds = [
"Labrador Retriever",
"German Shepherd",
"Golden Retriever",
"Doberman",
"Beagle",
"Pug",
"Rottweiler",
"Siberian Husky",
"Shih Tzu",
"Boxer",
"Great Dane",
"Indie"
];

const catBreeds = [
"Persian",
"Siamese",
"Bengal",
"Maine Coon",
"British Shorthair",
"Indian Domestic cat"
];
const breedModifiers = {
"Labrador Retriever": 0.95,
"German Shepherd": 1.05,
"Golden Retriever": 1.00,
"Doberman": 1.05,
"Beagle": 1.00,
"Pug": 0.85,
"Rottweiler": 1.05,
"Siberian Husky": 1.15,
"Shih Tzu": 0.85,
"Boxer": 1.00,
"Great Dane": 1.10,
"Indie": 1.00,


"Persian": 0.90,
"Siamese": 1.00,
"Bengal": 1.10,
"Maine Coon": 1.15,
"British Shorthair": 0.95,
"Indian Domestic cat": 1.00


}
const breedWeightRanges = {

"Labrador Retriever": { min: 25, max: 36 },
"German Shepherd": { min: 22, max: 40 },
"Golden Retriever": { min: 25, max: 34 },
"Doberman": { min: 27, max: 45 },
"Beagle": { min: 9, max: 14 },
"Pug": { min: 6, max: 10 },
"Rottweiler": { min: 35, max: 60 },
"Siberian Husky": { min: 16, max: 27 },
"Shih Tzu": { min: 4, max: 8 },
"Boxer": { min: 25, max: 36 },
"Great Dane": { min: 45, max: 90 },
"Indie": { min: 12, max: 30 },

"Persian": { min: 3, max: 5.5 },
"Siamese": { min: 3, max: 6 },
"Bengal": { min: 3.5, max: 7 },
"Maine Coon": { min: 4.5, max: 11 },
"British Shorthair": { min: 4, max: 8 },
"Indian Domestic cat": { min: 3, max: 6 }

}
