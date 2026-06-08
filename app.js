
function getLifeStageInfo(species, ageYears) {

    if (species === "Dog") {

        if (ageYears < 1) {
            return {
                stage: "Puppy",
                meals: "3–4 meals/day",
                recommendation:
                    "Growth phase. Feed a high-quality puppy diet rich in protein, energy, calcium and phosphorus."
            };
        }

        if (ageYears <= 7) {
            return {
                stage: "Adult Dog",
                meals: "2 meals/day",
                recommendation:
                    "Maintain a balanced diet and regular exercise routine."
            };
        }

        return {
            stage: "Senior Dog",
            meals: "2 meals/day",
            recommendation:
                "Monitor body weight and joint health. Senior diets may be beneficial."
            };
    }

    if (species === "Cat") {

        if (ageYears < 1) {
            return {
                stage: "Kitten",
                meals: "3–4 meals/day",
                recommendation:
                    "Growth phase. Feed a nutrient-dense kitten diet with adequate protein."
            };
        }

        if (ageYears <= 10) {
            return {
                stage: "Adult Cat",
                meals: "2 meals/day",
                recommendation:
                    "Provide a balanced diet and adequate hydration."
            };
        }

        return {
            stage: "Senior Cat",
            meals: "2 meals/day",
            recommendation:
                "Monitor kidney health, hydration and body condition regularly."
            };
    }
}

const species = document.getElementById("species");
const dietType = document.getElementById("dietType");
const feedBrandBox =
document.getElementById("feedBrandBox");
const sex =
document.getElementById("sex");

const reproductive =
document.getElementById("reproductive");
function updateReproductiveOptions() {

    reproductive.innerHTML = "";

    if (sex.value === "Male") {

        reproductive.innerHTML = `
        <option>Intact</option>
        <option>Neutered</option>
        `;

    }

    else {

        reproductive.innerHTML = `
        <option>Intact</option>
        <option>Spayed</option>
        <option>Pregnant</option>
        <option>Lactating</option>
        `;

    }

}
const petImage =
document.getElementById("petImage");

function updatePetImage() {

    petImage.src = "image/hero.png";

}

function updateDietOptions() {


const vegOption =
    Array.from(dietType.options)
    .find(opt => opt.value === "Vegetarian");

if (species.value === "Cat") {

    if (vegOption) {
        vegOption.style.display = "none";
    }

    if (dietType.value === "Vegetarian") {
        dietType.value = "Chicken Based";
    }

} else {

    if (vegOption) {
        vegOption.style.display = "";
    }

}



}

species.addEventListener("change", updateDietOptions);

updateDietOptions();
dietType.addEventListener(
    "change",
    updateFeedBrandVisibility
);

updateFeedBrandVisibility();
species.addEventListener(
    "change",
    updatePetImage
);
function updateFeedBrandVisibility() {

    const feedBrand =
    document.getElementById("feedBrand");

    if (dietType.value !== "Commercial Feed") {

        feedBrandBox.style.display = "none";
        return;

    }

    feedBrandBox.style.display = "block";

    if (species.value === "Dog") {

        feedBrand.innerHTML = `
        <option value="Pedigree">Pedigree</option>
        <option value="Drools">Drools</option>
        <option value="Royal Canin">Royal Canin</option>
        <option value="Farmina">Farmina</option>
        `;

    }

    else {

        feedBrand.innerHTML = `
        <option value="Whiskas">Whiskas</option>
        <option value="Me-O">Me-O</option>
        <option value="Royal Canin Cat">Royal Canin Cat</option>
        <option value="Farmina Cat">Farmina Cat</option>
        `;

    }

}

const breed = document.getElementById("breed");

function loadBreeds() {


breed.innerHTML = "";

let list = species.value === "Dog"
    ? dogBreeds
    : catBreeds;

list.forEach(item => {

    let option = document.createElement("option");

    option.value = item;
    option.textContent = item;

    breed.appendChild(option);

})

}

species.addEventListener("change", loadBreeds);
species.addEventListener(
    "change",
    updateFeedBrandVisibility
);

loadBreeds();
updatePetImage();
sex.addEventListener(
    "change",
    updateReproductiveOptions
);

updateReproductiveOptions();


function generatePlan () 

{

const weight = parseFloat(document.getElementById("weight").value);
const age = parseFloat(document.getElementById("age").value);
if (isNaN(age) || age <= 0) {
    alert("Please enter a valid age");
    return;
}

if (!weight) {
    alert("Enter weight");
    return;
}
if (species.value ==="cat")
if (age < 0 || age > 20) {
    alert("Please enter a valid age (0–20 years)");
    return;
}

if (species.value ==="dog")
if (age < 0 || age > 25) {
    alert("Please enter a valid age (0–25 years)");
    return;
}


if (species.value === "Dog") {

    if (weight < 0.5 || weight > 110) {
        alert("Dog weight must be between 0.5 and 110 kg");
        return;
    }

}

if (species.value === "Cat") {

    if (weight < 0.2 || weight > 15) {
        alert("Cat weight must be between 0.2 and 15 kg");
        return;
    }

}

const sex = document.getElementById("sex").value;
const activity = document.getElementById("activity").value;
const health = document.getElementById("health").value;
const bcs =
document.getElementById("bcs").value;
const dietType =
document.getElementById("dietType").value;
const feedBrandElement =
document.getElementById("feedBrand");

const feedBrand =
feedBrandElement ? feedBrandElement.value : "Pedigree";

let kcalPerGram = 3.5;

if (feedBrand === "Pedigree")
    kcalPerGram = 3.5;

if (feedBrand === "Drools")
    kcalPerGram = 3.8;

if (feedBrand === "Royal Canin")
    kcalPerGram = 4.0;

if (feedBrand === "Farmina")
    kcalPerGram = 4.1;

if (feedBrand === "Whiskas")
    kcalPerGram = 3.7;

if (feedBrand === "Me-O")
    kcalPerGram = 3.8;

const reproductive = document.getElementById("reproductive").value;



const rer = calculateRER(weight);
let stage = "Adult";

if (species.value === "Dog") {
    if (age < 1) {
        stage = "Puppy";
    } else if (age > 7) {
        stage = "Senior";
    }
} else {
    if (age < 1) {
        stage = "Kitten";
    } else if (age > 10) {
        stage = "Senior";
    }
}

let mer = rer;
if (species.value === "Dog") {

    if (stage === "Puppy") {
        mer = rer * 3.0;
    }

    else if (stage === "Adult") {
        mer = rer * 1.8;
    }

    else if (stage === "Senior") {
        mer = rer * 1.4;
    }

}

if (species.value === "Cat") {

    if (stage === "Kitten") {
        mer = rer * 2.5;
    }

    else if (stage === "Adult") {
        mer = rer * 1.4;
    }

    else if (stage === "Senior") {
        mer = rer * 1.2;
    }

}

if (reproductive === "Neutered") {
    mer = rer * 0.9;
}

if (reproductive === "Pregnant") {
    mer = rer * 1.2;
}

if (reproductive === "Lactating") {
    mer = rer * 1.8;
}
if (activity === "Low") {
    mer = mer * 0.9;
}

if (activity === "Moderate") {
    mer = mer * 1.0;
}

if (activity === "High") {
    mer = mer * 1.2;
}

const breedModifier =
breedModifiers[breed.value] || 1.0;

mer = mer * breedModifier;
if (health === "Weight Loss required") {
mer = mer * 0.85;
}

if (health === "Weight Gain required") {
mer = mer * 1.15;
}

if (health === "CKD") {
mer = mer * 0.95;
}

if (health === "Liver Disease") {
mer = mer * 1.05;
}
if (bcs === "Underweight") {
    mer = mer * 1.15;
}

if (bcs === "Overweight") {
    mer = mer * 0.90;
}

if (bcs === "Obese") {
    mer = mer * 0.80;
}


let feedingFrequency = "";

if (species.value === "Dog") {


if (stage === "Puppy") {

    if (age < 0.5) {
        feedingFrequency = "4 meals/day";
    } else {
        feedingFrequency = "3 meals/day";
    }

} else {

    feedingFrequency = "2 meals/day";

}


}

if (species.value === "Cat") {


if (stage === "Kitten") {
    feedingFrequency = "4 meals/day";
} else {
    feedingFrequency = "2 meals/day";
}


}
let feedingSchedule = "";

if (species.value === "Dog") {

    if (age < 0.5) {
        feedingSchedule =
        "Morning 7 AM, Noon 12 PM, Evening 5 PM, Night 9 PM";
    }

    else if (age < 1) {
        feedingSchedule =
        "Morning 7 AM, Afternoon 2 PM, Night 8 PM";
    }

    else {
        feedingSchedule =
        "Morning 8 AM, Evening 7 PM";
    }

}

if (species.value === "Cat") {

    if (age < 1) {
        feedingSchedule =
        "Morning 7 AM, Noon 12 PM, Evening 5 PM, Night 9 PM";
    }

    else {
        feedingSchedule =
        "Morning 8 AM, Evening 7 PM";
    }

}


let protein;
let fat;
let carbs;

if (species.value === "Cat") {

    protein = Math.round((mer * 0.50) / 4);

    fat = Math.round((mer * 0.40) / 9);

    carbs = Math.round((mer * 0.10) / 4);

}

else {

    protein = Math.round((mer * 0.25) / 4);

    fat = Math.round((mer * 0.15) / 9);

    carbs = Math.round((mer * 0.60) / 4);

}
const water = Math.round(weight * 60);
let hydrationNote = "";

if (health === "CKD") {
    hydrationNote =
    "Ensure  access to fresh water. water intake depend on the stage of ckd.";
}

else if (reproductive === "Lactating") {
    hydrationNote =
    "Water requirement is increased during lactation.";
}

else if (activity === "High") {
    hydrationNote =
    "High activity level may increase daily water requirements.";
}

else {
    hydrationNote =
    "Provide clean fresh water at all times.";
}
let nrcNote = "";

if (species.value === "Cat") {

    nrcNote =
    "Cats require a high-protein, low-carbohydrate diet. Animal protein should form the major portion of the diet.";

} else {

    nrcNote =
    "Dogs require balanced protein, fat and carbohydrate intake according to life stage and activity level.";

}
const today =
new Date().toLocaleDateString(); 

let healthNote = "";
if (health === "Healthy") {
    healthNote = "Balanced diet, fresh water and regular exercise recommended.";
}

if (health === "CKD") {
healthNote = "Low phosphorus, moderate protein diet recommended.";
}

if (health === "Liver Disease") {
healthNote = "Highly digestible protein and frequent feeding recommended.Acute diffuse liver disease: High carbohydrate diet with high biological value protein recommended. Chronic diffuse liver disease: Avoid high fat and high protein diets; provide moderate highly digestible protein.";
}

if (health === "Weight Loss required") {
healthNote =
"Goal: Controlled weight reduction. Calorie restriction and regular exercise recommended.";
}

if (health === "Weight Gain required") {
healthNote =
"Goal: Healthy weight gain. Higher calorie density diet and regular weight monitoring recommended.";
}
let speciesNote = "";

if (species.value === "Cat") {


speciesNote =
"Cats are obligate carnivores. High-quality animal protein and taurine are essential.";


}
let breedWeightWarning = "";

if (age >= 1) {

    const range =
    breedWeightRanges[breed.value];

    if (range) {

        if (weight < range.min) {

            breedWeightWarning =
            `⚠ Typical adult weight range for ${breed.value} is ${range.min}-${range.max} kg. Current weight appears below the typical range.`;

        }

        else if (weight > range.max) {

            breedWeightWarning =
            `⚠ Typical adult weight range for ${breed.value} is ${range.min}-${range.max} kg. Current weight appears above the typical range.`;

        }

        else {

            breedWeightWarning =
            `✅ Weight falls within the typical adult breed range (${range.min}-${range.max} kg).`;

        }

    }

}
else {

    breedWeightWarning =
    "🐾 Weight assessment is not available for puppies and kittens due to growth-related variation.";

}
let breedNote = "";

if (breed.value === "Labrador Retriever") {
    breedNote = "Prone to obesity. Monitor calorie intake and maintain regular exercise.";
}

if (breed.value === "German Shepherd") {
    breedNote = "Monitor hip and joint health. Maintain ideal body condition.";
}

if (breed.value === "Golden Retriever") {
    breedNote = "Prone to obesity and joint disorders. Regular exercise recommended.";
}

if (breed.value === "Beagle") {
    breedNote = "Highly food motivated. Monitor body weight carefully.";
}

if (breed.value === "Persian") {
    breedNote = "Encourage water intake and regular grooming.";
}

if (breed.value === "Maine Coon") {
    breedNote = "Monitor growth and cardiac health.";
}
    
if (breed.value === "Indian Domestic cat") {
    breedNote =
    "Generally hardy and adaptable. Maintain balanced nutrition, vaccination and parasite control.";
}

let clinicalAlert = "";

if (health === "CKD") {
    clinicalAlert =
    "Low phosphorus diet recommended. Maintain hydration and monitor kidney function regularly.";
}

if (health === "Liver Disease") {
    clinicalAlert =
    "Provide highly digestible diet. Monitor liver parameters and avoid excessive fat intake.";
}

if (health === "Weight Loss Required") {
healthNote =
"Goal: Controlled weight reduction. Calorie restriction and regular exercise recommended.";
}

if (health === "Weight Gain Required") {
healthNote =
"Goal: Healthy weight gain. Higher calorie density diet and regular weight monitoring recommended.";
}

if (health === "Healthy") {
    clinicalAlert =
    "Continue balanced nutrition, regular exercise and preventive healthcare.";
}
let nutritionScore = 100;

if (bcs === "Underweight") {
    nutritionScore -= 5;
}

if (bcs === "Overweight") {
    nutritionScore -= 10;
}

if (bcs === "Obese") {
    nutritionScore -= 20;
}

if (health === "CKD") {
    nutritionScore -= 15;
}

if (health === "Liver Disease") {
    nutritionScore -= 15;
}

if (health === "Weight Loss required") {
    nutritionScore -= 10;
}

if (health === "Weight Gain required") {
    nutritionScore -= 5;
}
let bcsNote = "";

if (bcs === "Underweight") {
    bcsNote =
    "Increase calorie intake gradually and monitor weight gain.";
}

if (bcs === "Ideal") {
    bcsNote =
    "Maintain current nutrition and activity level.";
}

if (bcs === "Overweight") {
    bcsNote =
    "Reduce calorie intake and increase exercise.";
}

if (bcs === "Obese") {
    bcsNote =
    "Structured weight reduction program recommended.";
}



let dietPlan = "";

if (dietType === "Chicken Based") {

if (species.value === "Cat") {

dietPlan = `
Chicken: ${Math.round(weight * 20)} g/day<br>
Boiled Egg: ${Math.max(0.5, (weight / 8).toFixed(1))} egg/day<br>
Commercial Cat Food (Optional): ${Math.round(weight * 4)} g/day<br>

<hr>

<b>Optional Foods</b><br>
Pumpkin: ${Math.round(weight)} g/day<br>

⚠ Cats are obligate carnivores. Animal protein should form the major portion of the diet.
`;

} else {

dietPlan = `
Chicken: ${Math.round(weight * 10)} g/day<br>
Rice: ${Math.round(weight * 8)} g/day<br>
Curd: ${Math.round(weight * 3)} g/day<br>
Pumpkin: ${Math.round(weight * 2)} g/day<br>
Fish Oil (Optional): 5 ml/day
`;

}

}

if (dietType === "Fish Based") {

if (species.value === "Cat") {

dietPlan = `
Fish: ${Math.round(weight * 20)} g/day<br>
Boiled Egg: ${Math.max(0.5, (weight / 8).toFixed(1))} egg/day<br>
Commercial Cat Food (Optional): ${Math.round(weight * 4)} g/day<br>

<hr>

<b>Optional Foods</b><br>
Pumpkin: ${Math.round(weight)} g/day<br>

⚠ Animal protein should form the major portion of the diet.
`;

dietPlan = `
Fish: ${Math.round(weight * 10)} g/day<br>
Rice: ${Math.round(weight * 8)} g/day<br>
Curd: ${Math.round(weight * 3)} g/day<br>
Fish Oil (Optional): 5 ml/day
`;

}

}

if (dietType === "Egg Based") {

if (species.value === "Cat") {

dietPlan = `
Boiled Eggs: ${Math.max(1, Math.round(weight / 3))}/day<br>
Chicken: ${Math.round(weight * 8)} g/day<br>
Commercial Cat Food (Optional): ${Math.round(weight * 4)} g/day<br>

<hr>

<b>Optional Foods</b><br>
Pumpkin: ${Math.round(weight)} g/day<br>

⚠ Eggs should always be cooked before feeding.
`;

} else {

dietPlan = `
Eggs: ${Math.max(1, Math.round(weight / 5))}/day<br>
Rice: ${Math.round(weight * 8)} g/day<br>
Curd: ${Math.round(weight * 3)} g/day<br>
Pumpkin: ${Math.round(weight * 2)} g/day
`;

}

}

if (dietType === "Vegetarian") {


dietPlan = `
Paneer: ${Math.round(weight * 8)} g/day<br>
Curd: ${Math.round(weight * 5)} g/day<br>
Rice: ${Math.round(weight * 8)} g/day<br>
Pumpkin: ${Math.round(weight * 2)} g/day<br>
Psyllium Husk (Optional): 2-5 g/day
`;


}
if (dietType === "Commercial Feed") {

    const feed = Math.round(mer / kcalPerGram);
    const monthlyFeed =
((feed * 30) / 1000).toFixed(1);

    if (feedingFrequency === "4 meals/day") {

        const meal = Math.round(feed / 4);

        dietPlan = `
        Commercial Feed: ${feed} g/day<br>
        Meal 1: ${meal} g<br>
        Meal 2: ${meal} g<br>
        Meal 3: ${meal} g<br>
        Meal 4: ${meal} g<br>
        Water: ${water} ml/day
        `;

    }

    else if (feedingFrequency === "3 meals/day") {

        const meal = Math.round(feed / 3);

        dietPlan = `
        Commercial Feed: ${feed} g/day<br>
        Meal 1: ${meal} g<br>
        Meal 2: ${meal} g<br>
        Meal 3: ${meal} g<br>
        Water: ${water} ml/day
        `;

    }

    else {

        const morning = Math.round(feed / 2);
        const evening = feed - morning;

        dietPlan = `
        Commercial Feed: ${feed} g/day<br>
        Brand: ${feedBrand}<br>
Monthly Feed Requirement: ${monthlyFeed} kg/month<br>
        Morning Feeding: ${morning} g<br>
        Evening Feeding: ${evening} g<br>
        Water: ${water} ml/day
        `;

    }
   
}






document.getElementById("results").innerHTML = `
    <div class="result-card">
        <div style="
background:#d4edda;
color:#155724;
padding:10px;
border-radius:8px;
margin-bottom:15px;
font-weight:bold;
">
✅ Nutrition Plan Generated Successfully
</div>

<h2>Nutrition Report</h2>
        <p><b>⭐ Nutrition Score:</b> ${nutritionScore}/100</p>
        <p><b>Generated On:</b> ${today}</p>
        <p><b>Breed:</b> ${breed.value}</p>
        <p><b>Life Stage:</b> ${stage}</p>
        <p><b>Recommended Meals:</b> ${getLifeStageInfo(species.value, age).meals}</p>

<p><b>Stage Advice:</b> ${getLifeStageInfo(species.value, age).recommendation}</p>
        <p><b>Age:</b> ${age}</p>
        <p><b>Debug Feeding:</b> ${feedingFrequency}</p>
        <p><b>Sex:</b> ${sex}</p>
        <p><b>Reproductive Status:</b> ${reproductive}</p>
        <p><b>Activity:</b> ${activity}</p>
        <p><b>Health:</b> ${health}</p>
        <p><b>Body Condition:</b> ${bcs}</p>
        <p><b>Diet Type:</b> ${dietType}</p>
        

        <hr>
        <p><b>Feeding Frequency:</b> ${feedingFrequency}</p>
        <p><b>Feeding Schedule:</b> ${feedingSchedule}</p>

        <p><b>RER:</b> ${Math.round(rer)} kcal/day</p>
        <p><b>Energy Requirement:</b> ${Math.round(mer)} kcal/day</p>
        <p><b>Protein:</b> ${protein} g/day</p>
        <p><b>Fat:</b> ${fat} g/day</p>
        <p><b>Carbohydrates:</b> ${carbs} g/day</p>
        <hr>

<h3>📚 NRC Nutrition Guidelines</h3>

<p><b>Recommended Protein:</b> ${protein} g/day</p>

<p><b>Recommended Fat:</b> ${fat} g/day</p>

<p><b>NRC Note:</b> ${nrcNote}</p>
        <p><b>Water:</b> ${water} ml/day</p>
        <p><b>💧 Hydration Advice:</b> ${hydrationNote}</p>
        <p><b>Recommendation:</b> ${healthNote}</p>
        <hr>

<p><b>sample Diet plan</b></p>

<p>${dietPlan}</p>
<p><b>Species Note:</b> ${speciesNote}</p>
<p><b>Breed Note:</b> ${breedNote}</p>
<p><b>Breed Weight Assessment:</b> ${breedWeightWarning}</p>
<hr>

<h3>🩺 Clinical Alert</h3>

<p>${clinicalAlert}</p>
<hr>

<h3>📊 Body Condition Advice</h3>

<p>${bcsNote}</p>





    </div>
    
    
`;

document.getElementById("pdfBtn").style.display = "block";
}
async function downloadPDF() {


const { jsPDF } = window.jspdf;

const doc = new jsPDF();

const report =
document.getElementById("results").innerText;

doc.text(report, 10, 10);

doc.save("NutriVet_Report.pdf");


}
function scrollToCalculator() {

    document.querySelector(".card")
    .scrollIntoView({
        behavior: "smooth"
    });

}
function openNutrition() {

    document
    .getElementById("nutritionSection")
    .style.display = "block";

    document
    .getElementById("nutritionSection")
    .scrollIntoView({
        behavior: "smooth"

    });

}

function openVaccine() {

    document.querySelector(".container").style.display = "none";

    document.getElementById("vaccinePage").style.display = "block";

}

function goHome() {

    document.querySelector(".container").style.display = "block";

    document.getElementById("vaccinePage").style.display = "none";

}
function showSchedule() {

    const species =
    document.getElementById("vaccineSpecies").value;

    let html = "";

    if (species === "Dog") {

        html = `
        <div class="result-card">

        <h3>💉 Dog Vaccination Schedule</h3>

        <p>6–8 Weeks → DHPPi (1st Dose)</p>

        <p>10–12 Weeks → Booster</p>

        <p>14–16 Weeks → Final Booster</p>

        <p>12 Weeks or Older → Rabies</p>

        <hr>
        

<p style="font-size:14px;color:#666;">

📚 Note: Some vaccination protocols may
include Leptospirosis (DHPPiL) depending on
geographic location, lifestyle, and veterinary
recommendations.

</p>

        <h3>🪱 Deworming Schedule</h3>

        <p>0–12 Weeks → Every 2 Weeks</p>

        <p>3–6 Months → Monthly</p>

        <p>Above 6 Months → Every 3 Months</p>

        <hr>

        <p>
        📚 Based on WSAVA & ESCCAP Guidelines
        </p>

        </div>
        `;

    }

    else {

        html = `
        <div class="result-card">

        <h3>💉 Cat Vaccination Schedule</h3>

        <p>6–8 Weeks → FVRCP (1st Dose)</p>

        <p>10–12 Weeks → Booster</p>

        <p>14–16 Weeks → Final Booster</p>

        <p>12 Weeks or Older → Rabies</p>

        <hr>

        <h3>🪱 Deworming Schedule</h3>

        <p>0–12 Weeks → Every 2 Weeks</p>

        <p>3–6 Months → Monthly</p>

        <p>Above 6 Months → Every 3 Months</p>

        <hr>

        <p>
        📚 Based on WSAVA & ESCCAP Guidelines
        </p>

        </div>
        `;

    }

    document.getElementById(
        "scheduleResult"
    ).innerHTML = html;

}
function openDrugLibrary() {

    document.querySelector(".container").style.display = "none";

    document.getElementById("drugPage").style.display = "block";

}

function goHomeDrug() {

    document.querySelector(".container").style.display = "block";

    document.getElementById("drugPage").style.display = "none";

}
function showAntibiotics() {

    document.getElementById("drugResult").innerHTML = `

    <h3>🦠 Antibiotics</h3>

    <button onclick="showBetaLactams()">
        Beta Lactams
    </button>

   <button onclick="showAminoglycosides()">
    Aminoglycosides
</button>

    <button onclick="showTetracyclines()">
    Tetracyclines
</button>

    <button onclick="showFluoroquinolones()">
    Fluoroquinolones
</button>

  <button onclick="showMacrolides()">
    Macrolides
</button>

   <button onclick="showSulfonamides()">
    Sulfonamides
</button>
<button onclick="showLincosamides()">
    Lincosamides
</button>

<button onclick="showPhenicols()">
    Phenicols
</button>

<button onclick="showNitroimidazoles()">
    Nitroimidazoles
</button>
<button onclick="showPolymyxins()">
    Polymyxins
</button>






    `;

}
function showBetaLactams() {

    document.getElementById("drugResult").innerHTML = `

    <h3>🦠 Beta Lactams</h3>

    <button onclick="showPenicillins()">
        Penicillins
    </button>

   <button onclick="showCephalosporins()">
    Cephalosporins
</button>

      <button onclick="showCarbapenems()">
        Carbapenems
    </button>

    <button onclick="showMonobactams()">
        Monobactams
    </button>

    `;

}
function showPenicillins() {

    document.getElementById("drugResult").innerHTML = `

    <h3>💊 Penicillins</h3>

    <button onclick="showDrug('Penicillin G')">
        Penicillin G
    </button>

    <button onclick="showDrug('Amoxicillin')">
        Amoxicillin
    </button>

    <button onclick="showDrug('Ampicillin')">
        Ampicillin
    </button>

    <button onclick="showDrug('Amoxicillin + Clavulanate')">
        Amoxicillin + Clavulanate
    </button>

    `;

}


function showAmoxicillin() {

    document.getElementById("drugResult").innerHTML = `

    <div class="result-card">

    <h3>💊 Amoxicillin</h3>

    <p><b>Class:</b> Penicillin</p>

    <p><b>Dog Dose:</b> Data Coming Soon</p>

    <p><b>Cat Dose:</b> Data Coming Soon</p>

    <p><b>Route:</b> PO</p>

    <p><b>Frequency:</b> BID</p>

    <p><b>Uses:</b>
    Skin infections,
    Respiratory infections,
    Urinary tract infections
    </p>

    </div>

    `;

}
function showDrug(drugName) {

    const drug = drugs[drugName];

    document.getElementById("drugResult").innerHTML = `

    <div class="result-card">

        <h2>💊 ${drugName}</h2>

        <p><b>Class:</b> ${drug.class}</p>

        <p><b>Dog Dose:</b> ${drug.dogDose}</p>

        <p><b>Cat Dose:</b> ${drug.catDose}</p>

        <p><b>Route:</b> ${drug.route}</p>

        <p><b>Frequency:</b> ${drug.frequency}</p>

        <hr>

        <p><b>Uses:</b> Coming Soon</p>

        <p><b>Warnings:</b> Coming Soon</p>

    </div>

    `;

}


function showCephalosporins() {

    document.getElementById("drugResult").innerHTML = `

    <h3>💊 Cephalosporins</h3>

    <button onclick="showDrug('Cefalexin')">
        Cefalexin
    </button>

    <button onclick="showDrug('Cefadroxil')">
        Cefadroxil
    </button>

    <button onclick="showDrug('Cefotaxime')">
        Cefotaxime
    </button>

    <button onclick="showDrug('Ceftriaxone')">
        Ceftriaxone
    </button>

    <button onclick="showDrug('Cefpodoxime')">
        Cefpodoxime
    </button>

    <button onclick="showDrug('Cefovecin')">
        Cefovecin
    </button>

    `;

}
function showAminoglycosides() {

    document.getElementById("drugResult").innerHTML = `

    <h3>💊 Aminoglycosides</h3>

    <button onclick="showDrug('Gentamicin')">
        Gentamicin
    </button>

    <button onclick="showDrug('Amikacin')">
        Amikacin
    </button>

    <button onclick="showDrug('Neomycin')">
        Neomycin
    </button>

    <button onclick="showDrug('Streptomycin')">
        Streptomycin
    </button>

    `;

}
function showTetracyclines() {

    document.getElementById("drugResult").innerHTML = `

    <h3>💊 Tetracyclines</h3>

    <button onclick="showDrug('Doxycycline')">
        Doxycycline
    </button>

    <button onclick="showDrug('Oxytetracycline')">
        Oxytetracycline
    </button>

    <button onclick="showDrug('Tetracycline')">
        Tetracycline
    </button>

    <button onclick="showDrug('Minocycline')">
        Minocycline
    </button>

    `;

}
function showFluoroquinolones() {

    document.getElementById("drugResult").innerHTML = `

    <h3>💊 Fluoroquinolones</h3>

    <button onclick="showDrug('Enrofloxacin')">
        Enrofloxacin
    </button>

    <button onclick="showDrug('Marbofloxacin')">
        Marbofloxacin
    </button>

    <button onclick="showDrug('Orbifloxacin')">
        Orbifloxacin
    </button>

    <button onclick="showDrug('Pradofloxacin')">
        Pradofloxacin
    </button>

    <button onclick="showDrug('Ciprofloxacin')">
        Ciprofloxacin
    </button>

    `;

}
function showMacrolides() {

    document.getElementById("drugResult").innerHTML = `

    <h3>💊 Macrolides</h3>

    <button onclick="showDrug('Azithromycin')">
        Azithromycin
    </button>

    <button onclick="showDrug('Erythromycin')">
        Erythromycin
    </button>

    <button onclick="showDrug('Clarithromycin')">
        Clarithromycin
    </button>

    <button onclick="showDrug('Tylosin')">
        Tylosin
    </button>

    <button onclick="showDrug('Tulathromycin')">
        Tulathromycin
    </button>

    `;

}
function showSulfonamides() {

    document.getElementById("drugResult").innerHTML = `

    <h3>💊 Sulfonamides</h3>

    <button onclick="showDrug('Trimethoprim-Sulfamethoxazole')">
        Trimethoprim-Sulfamethoxazole
    </button>

    <button onclick="showDrug('Trimethoprim-Sulfadiazine')">
        Trimethoprim-Sulfadiazine
    </button>

    <button onclick="showDrug('Sulfadimethoxine')">
        Sulfadimethoxine
    </button>

    `;

}
function showLincosamides() {

    document.getElementById("drugResult").innerHTML = `

    <h3>💊 Lincosamides</h3>

    <button onclick="showDrug('Clindamycin')">
        Clindamycin
    </button>

    <button onclick="showDrug('Lincomycin')">
        Lincomycin
    </button>

    `;

}
function showPhenicols() {

    document.getElementById("drugResult").innerHTML = `

    <h3>💊 Phenicols</h3>

    <button onclick="showDrug('Chloramphenicol')">
        Chloramphenicol
    </button>

    <button onclick="showDrug('Florfenicol')">
        Florfenicol
    </button>

    `;

}
function showNitroimidazoles() {

    document.getElementById("drugResult").innerHTML = `

    <h3>💊 Nitroimidazoles</h3>

    <button onclick="showDrug('Metronidazole')">
        Metronidazole
    </button>

    <button onclick="showDrug('Ronidazole')">
        Ronidazole
    </button>

    `;

}
function showPolymyxins() {

    document.getElementById("drugResult").innerHTML = `

    <h3>💊 Polymyxins</h3>

    <button onclick="showDrug('Polymyxin B')">
        Polymyxin B
    </button>

    <button onclick="showDrug('Colistin')">
        Colistin
    </button>

    `;

}
function showCarbapenems() {

    document.getElementById("drugResult").innerHTML = `

    <h3>💊 Carbapenems</h3>

    <button onclick="showDrug('Imipenem')">
        Imipenem
    </button>

    <button onclick="showDrug('Meropenem')">
        Meropenem
    </button>

    <button onclick="showDrug('Ertapenem')">
        Ertapenem
    </button>

    `;

}
function showMonobactams() {

    document.getElementById("drugResult").innerHTML = `

    <h3>💊 Monobactams</h3>

    <button onclick="showDrug('Aztreonam')">
        Aztreonam
    </button>

    `;

}
function showAntifungals() {

    document.getElementById("drugResult").innerHTML = `

    <h3>🍄 Antifungals</h3>

    <button onclick="showAzoles()">
        Azoles
    </button>

    <button onclick="showPolyenes()">
        Polyenes
    </button>

    <button onclick="showAllylamines()">
        Allylamines
    </button>

    <button onclick="showEchinocandins()">
        Echinocandins
    </button>

    `;

}
function showAzoles() {

    document.getElementById("drugResult").innerHTML = `

    <h3>🍄 Azoles</h3>

    <button onclick="showDrug('Ketoconazole')">
        Ketoconazole
    </button>

    <button onclick="showDrug('Itraconazole')">
        Itraconazole
    </button>

    <button onclick="showDrug('Fluconazole')">
        Fluconazole
    </button>

    <button onclick="showDrug('Voriconazole')">
        Voriconazole
    </button>

    `;

}
function showPolyenes() {

    document.getElementById("drugResult").innerHTML = `

    <h3>🍄 Polyenes</h3>

    <button onclick="showDrug('Amphotericin B')">
        Amphotericin B
    </button>

    <button onclick="showDrug('Nystatin')">
        Nystatin
    </button>

    `;

}
function showAllylamines() {

    document.getElementById("drugResult").innerHTML = `

    <h3>🍄 Allylamines</h3>

    <button onclick="showDrug('Terbinafine')">
        Terbinafine
    </button>

    `;

}
function showEchinocandins() {

    document.getElementById("drugResult").innerHTML = `

    <h3>🍄 Echinocandins</h3>

    <button onclick="showDrug('Caspofungin')">
        Caspofungin
    </button>

    <button onclick="showDrug('Micafungin')">
        Micafungin
    </button>

    `;

}
function showAnthelmintics() {

    document.getElementById("drugResult").innerHTML = `

    <h3>🪱 Anthelmintics</h3>

    <button onclick="showBenzimidazoles()">
        Benzimidazoles
    </button>

    <button onclick="showMacrocyclicLactones()">
        Macrocyclic Lactones
    </button>

    <button onclick="showTetrahydropyrimidines()">
        Tetrahydropyrimidines
    </button>

    <button onclick="showIsoquinolines()">
        Isoquinolines
    </button>

    `;

}
function showBenzimidazoles() {

    document.getElementById("drugResult").innerHTML = `

    <h3>🪱 Benzimidazoles</h3>

    <button onclick="showDrug('Fenbendazole')">
        Fenbendazole
    </button>

    <button onclick="showDrug('Albendazole')">
        Albendazole
    </button>

    <button onclick="showDrug('Mebendazole')">
        Mebendazole
    </button>

    <button onclick="showDrug('Oxfendazole')">
        Oxfendazole
    </button>

    `;

}
function showMacrocyclicLactones() {

    document.getElementById("drugResult").innerHTML = `

    <h3>🪱 Macrocyclic Lactones</h3>

    <button onclick="showDrug('Ivermectin')">
        Ivermectin
    </button>

    <button onclick="showDrug('Doramectin')">
        Doramectin
    </button>

    <button onclick="showDrug('Moxidectin')">
        Moxidectin
    </button>

    <button onclick="showDrug('Selamectin')">
        Selamectin
    </button>

    <button onclick="showDrug('Milbemycin Oxime')">
        Milbemycin Oxime
    </button>

    `;

}
function showTetrahydropyrimidines() {

    document.getElementById("drugResult").innerHTML = `

    <h3>🪱 Tetrahydropyrimidines</h3>

    <button onclick="showDrug('Pyrantel Pamoate')">
        Pyrantel Pamoate
    </button>

    <button onclick="showDrug('Pyrantel Tartrate')">
        Pyrantel Tartrate
    </button>

    <button onclick="showDrug('Morantel')">
        Morantel
    </button>

    `;

}
function showIsoquinolines() {

    document.getElementById("drugResult").innerHTML = `

    <h3>🪱 Isoquinolines</h3>

    <button onclick="showDrug('Praziquantel')">
        Praziquantel
    </button>

    <button onclick="showDrug('Epsiprantel')">
        Epsiprantel
    </button>

    `;

}
function showOtherAnthelmintics() {

    document.getElementById("drugResult").innerHTML = `

    <h3>🪱 Other Anthelmintics</h3>

    <button onclick="showDrug('Emodepside')">
        Emodepside
    </button>

    <button onclick="showDrug('Nitroscanate')">
        Nitroscanate
    </button>

    `;

}
