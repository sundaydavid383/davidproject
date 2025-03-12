const express = require("express")
const {readFileSync, writeFileSync} = require("fs")
const app = express()
const bcrypt = require("bcryptjs")
const cors = require("cors")



const data = [
    {
    "id": "bf4eb4a1-e6d8-4cc6-8279-441097df3885",
    "name": "Ziemann, Fahey and Tromp",
    "industry": "transform cutting-edge communities",
    "location": {
    "city": "Lake Brennonworth",
    "country": "Qatar"
    },
    "employees": 29245,
    "is_public": true
    },
    {
    "id": "20ea9cd3-f2b2-4635-892b-ec0768d145bc",
    "name": "Rice, Ebert and O&#x27;Reilly",
    "industry": "innovate visionary users",
    "location": {
    "city": "Port Vida",
    "country": "Lesotho"
    },
    "employees": 30542,
    "is_public": true
    },
    {
    "id": "667ccd30-3af7-47d7-a6db-b1209cbed2df",
    "name": "Kihn and Sons",
    "industry": "transition cross-media smart contracts",
    "location": {
    "city": "Tucson",
    "country": "Australia"
    },
    "employees": 64629,
    "is_public": false
    },
    {
    "id": "946b6e8a-48bf-4824-a518-04ae2b4dd12b",
    "name": "White Group",
    "industry": "collaborate AI-driven smart contracts",
    "location": {
    "city": "South Adrianaburgh",
    "country": "Cameroon"
    },
    "employees": 25824,
    "is_public": false
    },
    {
    "id": "9530a405-3f07-4643-b527-94f63e44e82f",
    "name": "Lebsack - Schmidt",
    "industry": "collaborate granular infrastructures",
    "location": {
    "city": "South Paulahaven",
    "country": "Macao"
    },
    "employees": 89988,
    "is_public": true
    },
    {
    "id": "6cf9244b-6de7-43c7-a677-b3233de88200",
    "name": "Bechtelar Inc",
    "industry": "gamify seamless supply-chains",
    "location": {
    "city": "Danbury",
    "country": "Macao"
    },
    "employees": 11677,
    "is_public": false
    },
    {
    "id": "7ca62845-dc53-4893-8952-e0a71971907d",
    "name": "Hahn and Sons",
    "industry": "maximize turn-key ROI",
    "location": {
    "city": "South Gabriel",
    "country": "Mexico"
    },
    "employees": 10948,
    "is_public": false
    },
    {
    "id": "21950ab2-5300-4b59-9d0b-9b756d476ce7",
    "name": "Strosin, Friesen and Gulgowski",
    "industry": "simplify sticky models",
    "location": {
    "city": "Braunchester",
    "country": "Angola"
    },
    "employees": 94380,
    "is_public": false
    },
    {
    "id": "6d8c522f-b1af-404d-88e3-a0f8b0559a15",
    "name": "Williamson, Yundt and Towne",
    "industry": "seize visionary e-commerce",
    "location": {
    "city": "New Anissaport",
    "country": "Norfolk Island"
    },
    "employees": 64241,
    "is_public": false
    },
    {
    "id": "8569752c-670d-4296-8897-a849e39ec547",
    "name": "Reilly, Krajcik and Hettinger",
    "industry": "orchestrate customized blockchains",
    "location": {
    "city": "South Darrellport",
    "country": "Puerto Rico"
    },
    "employees": 57584,
    "is_public": false
    },
    {
    "id": "b3c3d528-acb5-41ef-9798-b695a99c926e",
    "name": "Schuster LLC",
    "industry": "benchmark innovative convergence",
    "location": {
    "city": "Dearborn",
    "country": "Bulgaria"
    },
    "employees": 49231,
    "is_public": true
    },
    {
    "id": "d3e18081-226b-48e8-b8a5-204acf2bde14",
    "name": "Cartwright and Sons",
    "industry": "aggregate bleeding-edge experiences",
    "location": {
    "city": "Tuscaloosa",
    "country": "Vietnam"
    },
    "employees": 10999,
    "is_public": false
    },
    {
    "id": "67fcf4a6-9c39-4c14-8de4-d482a9e7506a",
    "name": "Corwin - Leffler",
    "industry": "generate viral experiences",
    "location": {
    "city": "Gerholdcester",
    "country": "Sao Tome and Principe"
    },
    "employees": 90900,
    "is_public": true
    },
    {
    "id": "0fd5585f-fc56-4f8c-9491-79e7cbe536d3",
    "name": "Larkin - Corkery",
    "industry": "seize viral markets",
    "location": {
    "city": "Wilhelmport",
    "country": "Antarctica"
    },
    "employees": 48201,
    "is_public": true
    },
    {
    "id": "e5ea2f31-2ef8-46df-b0ba-dd000d11fff1",
    "name": "Willms - Hayes",
    "industry": "implement visionary solutions",
    "location": {
    "city": "Kissimmee",
    "country": "Australia"
    },
    "employees": 42727,
    "is_public": false
    },
    {
    "id": "7922c82f-dcfb-4030-9b61-75d230544674",
    "name": "Nolan and Sons",
    "industry": "visualize cross-media supply-chains",
    "location": {
    "city": "Ondrickaboro",
    "country": "Paraguay"
    },
    "employees": 81574,
    "is_public": true
    },
    {
    "id": "84e63ee1-8ce9-4c69-b429-0a4059432877",
    "name": "Hansen LLC",
    "industry": "enable holistic networks",
    "location": {
    "city": "South Luemouth",
    "country": "Niger"
    },
    "employees": 43503,
    "is_public": false
    },
    {
    "id": "9b584d9c-5dcd-42f8-8479-421dc3d737a4",
    "name": "Muller Inc",
    "industry": "integrate virtual metrics",
    "location": {
    "city": "Hillschester",
    "country": "Somalia"
    },
    "employees": 55471,
    "is_public": true
    },
    {
    "id": "2795976e-aa20-40de-b421-073b7f7e4fb8",
    "name": "Hackett Group",
    "industry": "architect ubiquitous e-commerce",
    "location": {
    "city": "Nyahfurt",
    "country": "Timor-Leste"
    },
    "employees": 40984,
    "is_public": false
    },
    {
    "id": "1e6e283a-59db-405a-8cb8-a591617b9c62",
    "name": "Nolan - Leannon",
    "industry": "syndicate value-added lifetime value",
    "location": {
    "city": "Cincinnati",
    "country": "Norway"
    },
    "employees": 18408,
    "is_public": true
    },
    {
    "id": "e3c4d4ba-d78d-40b9-9e9a-db2bea1a1e1b",
    "name": "Wilkinson Inc",
    "industry": "engage real-time experiences",
    "location": {
    "city": "Leannonside",
    "country": "Republic of Korea"
    },
    "employees": 26706,
    "is_public": false
    },
    {
    "id": "32471e9c-bc6f-41a4-9566-9a4d91b11f37",
    "name": "Gibson - Osinski",
    "industry": "harness generative applications",
    "location": {
    "city": "North Montana",
    "country": "Eswatini"
    },
    "employees": 77756,
    "is_public": false
    },
    {
    "id": "15feb5c8-10d1-4939-b1e4-6d644780804e",
    "name": "Graham Group",
    "industry": "brand transparent platforms",
    "location": {
    "city": "Port Ashleighberg",
    "country": "Slovenia"
    },
    "employees": 86098,
    "is_public": true
    },
    {
    "id": "631f300b-37f2-461f-bafc-5452bce556a4",
    "name": "Reilly Group",
    "industry": "cultivate AI-driven networks",
    "location": {
    "city": "Ashachester",
    "country": "Jordan"
    },
    "employees": 96349,
    "is_public": false
    },
    {
    "id": "e65b3db6-06ef-49f6-87c4-67a00cbb0eba",
    "name": "Powlowski, Kautzer and Graham",
    "industry": "incentivize cross-platform e-commerce",
    "location": {
    "city": "East Urieltown",
    "country": "Central African Republic"
    },
    "employees": 64811,
    "is_public": false
    },
    {
    "id": "23e802a3-7e70-4600-b0f1-9ecce5679d00",
    "name": "Lockman, Cummings and Toy",
    "industry": "redefine frictionless AI",
    "location": {
    "city": "East Hartford",
    "country": "Kyrgyz Republic"
    },
    "employees": 57640,
    "is_public": false
    },
    {
    "id": "e92a4501-1aee-419d-923c-5c426aa528f6",
    "name": "McDermott, Padberg and Stracke",
    "industry": "incentivize best-of-breed paradigms",
    "location": {
    "city": "Dennisfort",
    "country": "Burkina Faso"
    },
    "employees": 81451,
    "is_public": true
    },
    {
    "id": "52e4d244-4b7e-4825-9213-4378f0a63e92",
    "name": "Kemmer - Russel",
    "industry": "enhance robust e-commerce",
    "location": {
    "city": "Dameonland",
    "country": "Guinea"
    },
    "employees": 62607,
    "is_public": true
    },
    {
    "id": "f367516c-6755-4ebe-b00a-0edcd8941bee",
    "name": "Littel Group",
    "industry": "enhance granular AI",
    "location": {
    "city": "Flagstaff",
    "country": "Svalbard &amp; Jan Mayen Islands"
    },
    "employees": 36152,
    "is_public": true
    },
    {
    "id": "41baa696-7d36-4ee9-97fd-3f53b6f2450d",
    "name": "Lockman and Sons",
    "industry": "deliver one-to-one smart contracts",
    "location": {
    "city": "Krajcikfield",
    "country": "Myanmar"
    },
    "employees": 81717,
    "is_public": false
    },
    {
    "id": "587efab0-3dcf-4dcf-b486-76853aeeb50e",
    "name": "Jakubowski Inc",
    "industry": "repurpose visionary e-commerce",
    "location": {
    "city": "New Veldabury",
    "country": "Eswatini"
    },
    "employees": 14772,
    "is_public": true
    },
    {
    "id": "a5cab5ba-a695-4d55-abef-1a02cb8313a9",
    "name": "Streich, Denesik and Wolff",
    "industry": "orchestrate decentralized smart contracts",
    "location": {
    "city": "Palm Harbor",
    "country": "Turkmenistan"
    },
    "employees": 92680,
    "is_public": true
    },
    {
    "id": "3badf60c-8a19-46d5-92ea-1f69ad369243",
    "name": "Jast - Turcotte",
    "industry": "benchmark collaborative lifetime value",
    "location": {
    "city": "West Foster",
    "country": "Guatemala"
    },
    "employees": 44474,
    "is_public": true
    },
    {
    "id": "e13c1f25-4a3e-4dd0-91a5-67c88c1a8802",
    "name": "Kihn - Durgan",
    "industry": "gamify impactful markets",
    "location": {
    "city": "Blockmouth",
    "country": "Mongolia"
    },
    "employees": 90212,
    "is_public": true
    },
    {
    "id": "57d601fd-7ddf-431f-b3f1-268f1d743ad5",
    "name": "Bradtke - Kunde",
    "industry": "synthesize impactful synergies",
    "location": {
    "city": "South Rodrick",
    "country": "Gambia"
    },
    "employees": 46389,
    "is_public": true
    },
    {
    "id": "98b7ad35-e1cd-4e4c-935c-5003a0f94922",
    "name": "Mills, Zemlak and Schroeder",
    "industry": "monetize mission-critical markets",
    "location": {
    "city": "New Christyshire",
    "country": "Timor-Leste"
    },
    "employees": 752,
    "is_public": false
    },
    {
    "id": "b196229c-7d66-4c73-8ec9-0f2bd88184e2",
    "name": "Pfeffer, Reichert and Ziemann",
    "industry": "transform sticky methodologies",
    "location": {
    "city": "Roscoeside",
    "country": "Taiwan"
    },
    "employees": 90430,
    "is_public": true
    },
    {
    "id": "fb1aefda-d285-4cb5-afac-1a135cf741cf",
    "name": "Ortiz - Volkman",
    "industry": "enhance killer relationships",
    "location": {
    "city": "North Zoey",
    "country": "Ghana"
    },
    "employees": 38988,
    "is_public": true
    },
    {
    "id": "42fd131e-28da-420f-9561-c4ea8bd80609",
    "name": "Reichert LLC",
    "industry": "empower generative mindshare",
    "location": {
    "city": "Lake Aaliyahville",
    "country": "Andorra"
    },
    "employees": 4881,
    "is_public": false
    },
    {
    "id": "6aeb71a8-8564-4ec3-b2d0-7fce9d0ae707",
    "name": "Adams - Nader",
    "industry": "harness enterprise synergies",
    "location": {
    "city": "South Calistaborough",
    "country": "Norway"
    },
    "employees": 81646,
    "is_public": false
    },
    {
    "id": "0958fe00-7db5-4334-81e7-f03619a1c4fe",
    "name": "Christiansen, Mann and Zieme",
    "industry": "drive cross-platform models",
    "location": {
    "city": "St. George",
    "country": "Democratic Republic of the Congo"
    },
    "employees": 52318,
    "is_public": true
    },
    {
    "id": "b82ab2e2-fc1f-49de-a998-fcd978cccac7",
    "name": "Streich - Bartell",
    "industry": "simplify impactful niches",
    "location": {
    "city": "Rockwall",
    "country": "Mauritania"
    },
    "employees": 80589,
    "is_public": true
    },
    {
    "id": "26561209-f5c7-4149-8d32-3fdb3dce0fbe",
    "name": "Schumm Inc",
    "industry": "utilize end-to-end ROI",
    "location": {
    "city": "Jackchester",
    "country": "Japan"
    },
    "employees": 97854,
    "is_public": false
    },
    {
    "id": "6a383de9-2342-4b48-ab76-01d0237f2fb7",
    "name": "Gutmann, Jast and Osinski",
    "industry": "visualize value-added architectures",
    "location": {
    "city": "West Vivian",
    "country": "Grenada"
    },
    "employees": 25155,
    "is_public": true
    },
    {
    "id": "110312ee-cc17-46bd-9c44-39bdbbbe8d46",
    "name": "Mayert - Runolfsdottir",
    "industry": "brand next-generation solutions",
    "location": {
    "city": "Adriannaton",
    "country": "Bermuda"
    },
    "employees": 52165,
    "is_public": false
    },
    {
    "id": "c5b1548c-9807-44d1-811d-f6c2709fe7fd",
    "name": "Bartell, Shanahan and Muller",
    "industry": "leverage turn-key architectures",
    "location": {
    "city": "Khalilchester",
    "country": "Egypt"
    },
    "employees": 60757,
    "is_public": false
    },
    {
    "id": "8f073b97-0d6b-4a6a-b895-5151fd72cfdc",
    "name": "Bahringer Inc",
    "industry": "syndicate integrated e-commerce",
    "location": {
    "city": "Coachella",
    "country": "Thailand"
    },
    "employees": 72413,
    "is_public": false
    },
    {
    "id": "0390773e-03ab-4902-a516-fb36a00153bc",
    "name": "Boyle, Hirthe and Morar",
    "industry": "engage customized metrics",
    "location": {
    "city": "North Shanoncester",
    "country": "Mayotte"
    },
    "employees": 21350,
    "is_public": false
    },
    {
    "id": "2aa8da68-7c47-4db1-9b8b-6db12fe681cf",
    "name": "Schaden and Sons",
    "industry": "extend cross-media channels",
    "location": {
    "city": "East Shayleechester",
    "country": "Jamaica"
    },
    "employees": 21241,
    "is_public": false
    },
    {
    "id": "4ad6c90b-e547-4eb8-97e7-add58a2d3f75",
    "name": "Lueilwitz Group",
    "industry": "scale generative metrics",
    "location": {
    "city": "Tiffanyfort",
    "country": "Sri Lanka"
    },
    "employees": 20038,
    "is_public": true
    },
    {
    "id": "fc2a0f19-1afd-4b96-99dd-5c8f52412d8c",
    "name": "Tillman - Langosh",
    "industry": "simplify decentralized interfaces",
    "location": {
    "city": "West Jamarcusstead",
    "country": "Azerbaijan"
    },
    "employees": 82338,
    "is_public": false
    },
    {
    "id": "9ae2e7fc-e122-4308-aab1-831f5116fc0f",
    "name": "Swift - Funk",
    "industry": "disintermediate strategic communities",
    "location": {
    "city": "Huelfurt",
    "country": "Panama"
    },
    "employees": 47257,
    "is_public": false
    },
    {
    "id": "7ee561a6-fc8c-4224-94b2-92548839c74c",
    "name": "Cole, Lubowitz and Kris",
    "industry": "enable extensible e-commerce",
    "location": {
    "city": "O&#x27;Keefemouth",
    "country": "United States Minor Outlying Islands"
    },
    "employees": 42318,
    "is_public": false
    },
    {
    "id": "c1fb3489-9b0e-49b3-a2b9-09f71b81649c",
    "name": "Gorczany - Conn",
    "industry": "target efficient architectures",
    "location": {
    "city": "Denver",
    "country": "Anguilla"
    },
    "employees": 5424,
    "is_public": true
    },
    {
    "id": "5ab476af-5de8-4fd7-aaef-1e3c5fbae232",
    "name": "O&#x27;Keefe, Harber and Effertz",
    "industry": "mesh turn-key communities",
    "location": {
    "city": "Glen Burnie",
    "country": "Faroe Islands"
    },
    "employees": 54036,
    "is_public": false
    },
    {
    "id": "6f41de97-e65f-4726-8306-455f35f36cbc",
    "name": "Reynolds - Feeney",
    "industry": "drive virtual interfaces",
    "location": {
    "city": "Romaguerabury",
    "country": "Japan"
    },
    "employees": 98268,
    "is_public": true
    },
    {
    "id": "9f0c0723-3fbb-493d-a735-7682c4da75fd",
    "name": "Larson Group",
    "industry": "evolve decentralized deliverables",
    "location": {
    "city": "Guaynabo",
    "country": "Bhutan"
    },
    "employees": 666,
    "is_public": true
    },
    {
    "id": "021ddfe8-6502-4c6c-b180-96f756c1b328",
    "name": "Gorczany, Gislason and Erdman",
    "industry": "drive visionary experiences",
    "location": {
    "city": "Vallieville",
    "country": "Philippines"
    },
    "employees": 39999,
    "is_public": true
    },
    {
    "id": "2b098ec1-02df-4e83-831a-02e11e30ebc6",
    "name": "Rohan, Rutherford and Gerhold",
    "industry": "architect intuitive ROI",
    "location": {
    "city": "Kathlyntown",
    "country": "Iraq"
    },
    "employees": 42814,
    "is_public": true
    },
    {
    "id": "0003e060-7d9f-4778-8b16-e6650c043c08",
    "name": "Bartoletti - Dickens",
    "industry": "generate collaborative large language models",
    "location": {
    "city": "Lednerstad",
    "country": "Guinea-Bissau"
    },
    "employees": 4401,
    "is_public": false
    },
    {
    "id": "6448e201-bd05-4b32-9506-830d60e15234",
    "name": "MacGyver, Fay and Predovic",
    "industry": "embrace value-added content",
    "location": {
    "city": "Watsonville",
    "country": "Antigua and Barbuda"
    },
    "employees": 1137,
    "is_public": false
    },
    {
    "id": "42a8dc2b-4fb3-4cc6-bbb9-18c4593551f3",
    "name": "Crona - Walsh",
    "industry": "deliver transparent applications",
    "location": {
    "city": "Fort Maude",
    "country": "Congo"
    },
    "employees": 87229,
    "is_public": true
    },
    {
    "id": "4dce5243-763e-488d-96ba-534a6231fbf6",
    "name": "O&#x27;Hara LLC",
    "industry": "revolutionize AI-driven niches",
    "location": {
    "city": "Botsfordshire",
    "country": "Democratic Republic of the Congo"
    },
    "employees": 3565,
    "is_public": true
    },
    {
    "id": "60acc3bf-68bd-4ce5-bb91-b95748aeb99d",
    "name": "Schiller LLC",
    "industry": "strategize seamless networks",
    "location": {
    "city": "North Antoinetteton",
    "country": "Libyan Arab Jamahiriya"
    },
    "employees": 65178,
    "is_public": true
    },
    {
    "id": "6e07f22d-a89c-4086-9012-37a3428f58ad",
    "name": "Witting, Kozey and McClure",
    "industry": "productize collaborative functionalities",
    "location": {
    "city": "Port Merle",
    "country": "Zimbabwe"
    },
    "employees": 9158,
    "is_public": true
    },
    {
    "id": "6dcb9d5c-7b06-45e3-b1da-374bab12ca81",
    "name": "Gerhold - Renner",
    "industry": "maximize plug-and-play relationships",
    "location": {
    "city": "Hellerside",
    "country": "Kazakhstan"
    },
    "employees": 10514,
    "is_public": false
    },
    {
    "id": "5d7bc8ac-3ec3-4f97-a04a-b485a497ac59",
    "name": "Okuneva Group",
    "industry": "cultivate world-class deliverables",
    "location": {
    "city": "Homenickville",
    "country": "Niger"
    },
    "employees": 16242,
    "is_public": true
    },
    {
    "id": "2a146fbf-9329-490a-aa2b-bbb9ee5c0fe0",
    "name": "Thompson, Fadel and Hilll",
    "industry": "innovate leading-edge interfaces",
    "location": {
    "city": "Jordynport",
    "country": "Monaco"
    },
    "employees": 49392,
    "is_public": false
    },
    {
    "id": "dc4dab88-ee57-4b53-bbe6-bddee4802d3c",
    "name": "Gleason - Renner",
    "industry": "deliver sticky mindshare",
    "location": {
    "city": "Faheyboro",
    "country": "Bolivia"
    },
    "employees": 72272,
    "is_public": true
    },
    {
    "id": "194fa8d9-7472-4fa3-99db-d9fa5e634f7c",
    "name": "Franey Inc",
    "industry": "deploy viral channels",
    "location": {
    "city": "West Ulises",
    "country": "Peru"
    },
    "employees": 50405,
    "is_public": false
    },
    {
    "id": "bbc8a773-8ac7-4dad-849a-8e2c86c2a519",
    "name": "Langworth - Rice",
    "industry": "evolve value-added solutions",
    "location": {
    "city": "Bayamon",
    "country": "Venezuela"
    },
    "employees": 79951,
    "is_public": false
    },
    {
    "id": "5db516a4-86b4-476c-93c3-45cecad0a3fe",
    "name": "Dach, Kovacek and Zieme",
    "industry": "revolutionize virtual niches",
    "location": {
    "city": "Rolfsonborough",
    "country": "Faroe Islands"
    },
    "employees": 98402,
    "is_public": false
    },
    {
    "id": "45872d55-d9db-4152-9b96-be05d7cd8083",
    "name": "Collins, Gibson and Beatty",
    "industry": "drive virtual supply-chains",
    "location": {
    "city": "Blockhaven",
    "country": "Nigeria"
    },
    "employees": 37227,
    "is_public": true
    },
    {
    "id": "a6afaa7f-dff8-4a63-9313-b3ea67816a3d",
    "name": "Greenfelder LLC",
    "industry": "grow extensible deliverables",
    "location": {
    "city": "Chapel Hill",
    "country": "Guinea"
    },
    "employees": 18093,
    "is_public": true
    },
    {
    "id": "54adeb64-a972-461b-bf30-4dd9bddaf765",
    "name": "Huel Group",
    "industry": "seize visionary niches",
    "location": {
    "city": "Arlington",
    "country": "Mozambique"
    },
    "employees": 44472,
    "is_public": false
    },
    {
    "id": "bf664e59-66b7-4fcc-9b5c-5016471c809a",
    "name": "Labadie - Kuhlman",
    "industry": "expedite leading-edge systems",
    "location": {
    "city": "Bellevue",
    "country": "United Kingdom"
    },
    "employees": 35568,
    "is_public": false
    },
    {
    "id": "05532445-ba57-4d33-864c-66291f93f69a",
    "name": "Moore, Paucek and Pacocha",
    "industry": "whiteboard intuitive large language models",
    "location": {
    "city": "Lake Nameside",
    "country": "Algeria"
    },
    "employees": 69245,
    "is_public": false
    },
    {
    "id": "888a334e-d376-42a7-835d-961b6fdc31c8",
    "name": "Steuber - Upton",
    "industry": "transform magnetic metrics",
    "location": {
    "city": "Huntsville",
    "country": "Palestine"
    },
    "employees": 7796,
    "is_public": true
    },
    {
    "id": "d4999576-e7a4-4cc8-9ad8-1a6e7e069532",
    "name": "Mante, Swaniawski and Gutkowski",
    "industry": "synthesize bleeding-edge supply-chains",
    "location": {
    "city": "McDermottbury",
    "country": "Egypt"
    },
    "employees": 62648,
    "is_public": false
    },
    {
    "id": "da538eae-5f5b-45ca-b2d1-ec939adc4a66",
    "name": "Vandervort - Schimmel",
    "industry": "strategize value-added convergence",
    "location": {
    "city": "Palo Alto",
    "country": "Barbados"
    },
    "employees": 84346,
    "is_public": true
    },
    {
    "id": "c9c5bc1f-e0c0-422a-b913-dc7ba75291ce",
    "name": "Quigley LLC",
    "industry": "grow impactful web services",
    "location": {
    "city": "East Darienview",
    "country": "Canada"
    },
    "employees": 70500,
    "is_public": false
    },
    {
    "id": "fbe06c62-71d3-46b8-9152-ab7e10c508dc",
    "name": "Tillman Inc",
    "industry": "revolutionize innovative deliverables",
    "location": {
    "city": "East Eldonville",
    "country": "Kazakhstan"
    },
    "employees": 15396,
    "is_public": true
    },
    {
    "id": "73a947a5-9513-41fd-87d8-4d7b10096d03",
    "name": "Cassin - Hoeger",
    "industry": "aggregate scalable blockchains",
    "location": {
    "city": "Hermanstad",
    "country": "Bulgaria"
    },
    "employees": 22049,
    "is_public": true
    },
    {
    "id": "26069013-0887-4e89-8b46-5a9edaaf33d1",
    "name": "Lindgren, Goodwin and Steuber",
    "industry": "maximize 24/7 lifetime value",
    "location": {
    "city": "Ziemeland",
    "country": "Mali"
    },
    "employees": 2332,
    "is_public": false
    },
    {
    "id": "827964d8-7302-4c4a-9e4d-0892c32f51c4",
    "name": "Mayert and Sons",
    "industry": "architect interactive blockchains",
    "location": {
    "city": "Strackebury",
    "country": "Nauru"
    },
    "employees": 73337,
    "is_public": false
    },
    {
    "id": "d7c896ab-2d89-4c4f-a5f1-204302e9739a",
    "name": "Walsh Inc",
    "industry": "leverage ubiquitous convergence",
    "location": {
    "city": "West Rowland",
    "country": "Iraq"
    },
    "employees": 20803,
    "is_public": true
    },
    {
    "id": "8a66efe3-195f-4672-a27d-6cf4ca1bb72f",
    "name": "Carter LLC",
    "industry": "reinvent next-generation lifetime value",
    "location": {
    "city": "Steveport",
    "country": "Dominica"
    },
    "employees": 24835,
    "is_public": true
    },
    {
    "id": "0a8bda96-c118-4e90-a0aa-1ecf2120ad31",
    "name": "Brown Inc",
    "industry": "enable efficient lifetime value",
    "location": {
    "city": "New Katharinamouth",
    "country": "Falkland Islands (Malvinas)"
    },
    "employees": 89882,
    "is_public": true
    },
    {
    "id": "44e6bcb6-9621-40ca-8ebb-46cad3390d62",
    "name": "Pouros and Sons",
    "industry": "unleash one-to-one channels",
    "location": {
    "city": "Wisokystead",
    "country": "San Marino"
    },
    "employees": 94083,
    "is_public": false
    },
    {
    "id": "9be6056c-f847-4597-ac19-d682e5163c9a",
    "name": "Mante Group",
    "industry": "incentivize smart schemas",
    "location": {
    "city": "West Deeland",
    "country": "Burkina Faso"
    },
    "employees": 84037,
    "is_public": true
    },
    {
    "id": "9512c4d8-dcf3-4985-b0cc-bf346de3eb08",
    "name": "Ryan - Thiel",
    "industry": "disintermediate strategic interfaces",
    "location": {
    "city": "Layneport",
    "country": "Bosnia and Herzegovina"
    },
    "employees": 15695,
    "is_public": false
    },
    {
    "id": "b67483f8-b808-4944-bae9-09a44db07f37",
    "name": "Orn, Emmerich and Schimmel",
    "industry": "evolve cross-platform architectures",
    "location": {
    "city": "Cyrilton",
    "country": "Nicaragua"
    },
    "employees": 15476,
    "is_public": true
    },
    {
    "id": "4265b399-7359-4311-88ff-d6013287d532",
    "name": "McDermott - Krajcik",
    "industry": "target mission-critical e-commerce",
    "location": {
    "city": "Loganfurt",
    "country": "Venezuela"
    },
    "employees": 39751,
    "is_public": true
    },
    {
    "id": "3217e96a-d70a-4130-9d1e-da23d0558c42",
    "name": "Krajcik, Tromp and Quigley",
    "industry": "syndicate collaborative users",
    "location": {
    "city": "Scottiestad",
    "country": "Mauritania"
    },
    "employees": 83595,
    "is_public": false
    },
    {
    "id": "6923f984-4e18-4c6e-ad14-35944b068058",
    "name": "Kuphal Inc",
    "industry": "engage integrated paradigms",
    "location": {
    "city": "North Brad",
    "country": "Mongolia"
    },
    "employees": 54583,
    "is_public": false
    },
    {
    "id": "cd21c409-f786-49e5-9f13-f416626cf0a6",
    "name": "Fritsch - White",
    "industry": "grow killer technologies",
    "location": {
    "city": "New Duanetown",
    "country": "Taiwan"
    },
    "employees": 45218,
    "is_public": false
    },
    {
    "id": "e99b4777-65b7-49a5-b8cf-ca92aedbdc2d",
    "name": "Hammes - Kovacek",
    "industry": "cultivate seamless networks",
    "location": {
    "city": "Bernierbury",
    "country": "Aruba"
    },
    "employees": 83559,
    "is_public": false
    },
    {
    "id": "a368e681-ef15-493c-9f40-199a1c4ebf9b",
    "name": "Lockman - Cassin",
    "industry": "reinvent extensible experiences",
    "location": {
    "city": "Lake Paigeshire",
    "country": "Albania"
    },
    "employees": 18237,
    "is_public": true
    },
    {
    "id": "3cabfe24-8a87-4ca8-b006-8a6d2c0882b5",
    "name": "Price Group",
    "industry": "gamify proactive networks",
    "location": {
    "city": "North Jarrodboro",
    "country": "Guam"
    },
    "employees": 48537,
    "is_public": false
    },
    {
    "id": "e77919d7-551c-4fbd-a507-0a90d9f5430f",
    "name": "Anderson - Fahey",
    "industry": "integrate strategic supply-chains",
    "location": {
    "city": "Millercester",
    "country": "Malta"
    },
    "employees": 36955,
    "is_public": true
    }
    ]
 const nopublicData = data.filter((company)=> company.is_public == false)
 const publicData = data.filter((company)=> company.is_public == true)





//use case
app.use(express.json())
app.use(cors({
    origin:"*",
    method:["POST", "GET", "DELETE", "PUT"],
    allowedHeaders:['Content-Type', 'Authorization']
}))




//endpoint definition
app.get("/companies", (req, res)=>{
    return res.status(200).json({data:data})
})

app.get("/companies/no_public", (req, res)=>{
    return res.status(200).json({data:nopublicData})
})
app.get("/companies/public", (req, res)=>{
    return res.status(200).json({data:publicData})
})
app.get("/public-comapanies/data/:search", (req, res)=>{
    try {
        const {search} = req.params;
        const companies = publicData.filter(company=>company.name.toLowerCase().includes(String(search).toLowerCase()))
        res.status(200).json({data:companies})
    } catch (error) {
        console.log("error occured:",error)
    }

})

app.get("/private-comapanies/data/:search", (req, res)=>{
    try {
        const {search} = req.params;
        const companies = nopublicData.filter(company=>company.name.toLowerCase().includes(String(search).toLowerCase()))
        res.status(200).json({data:companies})
    } catch (error) {
        console.log("error occured:",error)
    }

})

app.get("/sorted/private-comapanies", (req, res)=>{
    try {
        const companies = nopublicData.filter((a,b)=> a.employees - b.employees)
        res.status(200).json({data:companies})  
    } catch (error) {
     console.log("error occured:",error)
    }

})



//i am listening
app.listen(5100, ()=>{
    console.log("server currently running on port 5000...")
})