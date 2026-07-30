// Enhanced anatomical data with more detailed information like the reference platforms
const anatomyData = [
    // Bones (Huesos)
    {
        id: 1,
        name: "Femur",
        category: "bone",
        subcategory: "Lower Limb",
        description: "The femur is the longest, strongest and heaviest bone in the human body. It is located in the thigh, articulating proximally with the acetabulum of the pelvis (forming the hip joint) and distally with the tibia and patella (forming the knee joint).",
        details: {
            location: "Thigh (lower limb)",
            joints: "Hip (proximal) and knee (distal)",
            characteristics: "Long bone, cylindrical diaphysis, proximal extremity with head, neck and trochanters, distal extremity with condyles",
            function: "Body weight support, locomotion, insertion point for powerful muscles",
            clinical_importance: "Common fractures in high-energy trauma; osteoporosis particularly affects the femoral neck"
        },
        imageUrl: "https://placehold.co/400x300/ecf0f1/34495e?text=Femur",
        keywords: ["femur", "thigh", "long bone", "leg", "hip", "knee", "skeleton", "lower limb"],
        tags: ["bone", "lower-limb", "inferior-extremity"]
    },
    {
        id: 2,
        name: "Humerus",
        category: "bone",
        subcategory: "Upper Limb",
        description: "The humerus is the longest bone of the upper limb. It extends from the shoulder joint (glenoescápula) to the elbow joint (humeroulnar and humerorradial articulation).",
        details: {
            location: "Arm (upper limb)",
            joints: "Shoulder (proximal) and elbow (distal)",
            characteristics: "Long bone, spherical head for glenoescápular articulation, trochites for rotator cuff insertion, trochlea and capitulum for elbow articulation",
            function: "Arm movement, insertion point for shoulder and arm muscles, force transmission",
            clinical_importance: "Common fractures from falls on shoulder or outstretched hand; glenoescápular dislocation"
        },
        imageUrl: "https://placehold.co/400x300/ecf0f1/34495e?text=Humerus",
        keywords: ["humerus", "arm", "shoulder", "elbow", "upper limb", "skeleton"],
        tags: ["bone", "upper-limb", "superior-extremity"]
    },
    {
        id: 3,
        name: "Radius",
        category: "bone",
        subcategory: "Forearm",
        description: "The radius is one of the two bones of the forearm, located laterally (thumb side). It rotates around the ulna during pronation and supination movements.",
        details: {
            location: "Forearm, lateral side (thumb)",
            joints: "Elbow (proximal) and wrist (distal)",
            characteristics: "Disc-shaped head articulated with humeral condyle, tuberosity for biceps brachii insertion, distal styloid",
            function: "Participates in elbow flexion/extension, forearm pronation/supination, wrist movements",
            clinical_importance: "Colles fracture (distal end) common in falls on outstretched hand"
        },
        imageUrl: "https://placehold.co/400x300/ecf0f1/34495e?text=Radius",
        keywords: ["radius", "forearm", "thumb", "pronation", "supination", "wrist", "elbow"],
        tags: ["bone", "forearm", "upper-limb"]
    },
    {
        id: 4,
        name: "Ulna",
        category: "bone",
        subcategory: "Forearm",
        description: "The ulna is the medial bone of the forearm, located on the pinky side. It acts as a stable axis around which the radius rotates during pronation and supination.",
        details: {
            location: "Forearm, medial side (pinky)",
            joints: "Elbow (proximal) and wrist (distal)",
            characteristics: "Olecranon process forms the elbow point, radial notch receives the radial head, distal styloid",
            function: "Elbow stability, insertion point for forearm muscles, participates in wrist movements",
            clinical_importance: "Olecranon fracture common in direct falls on elbow; cubital tunnel syndrome"
        },
        imageUrl: "https://placehold.co/400x300/ecf0f1/34495e?text=Ulna",
        keywords: ["ulna", "forearm", "pinky", "elbow", "wrist", "olecranon"],
        tags: ["bone", "forearm", "upper-limb"]
    },
    {
        id: 5,
        name: "Sternum",
        category: "bone",
        subcategory: "Trunk",
        description: "The sternum is a flat bone located in the anterior midline of the thorax. It consists of three parts: manubrium, body (gladiolus) and xiphoid process.",
        details: {
            location: "Thorax, anterior midline",
            joints: "Clavicles (clavicle) in the manubrium, ribs 1-7 via costal cartilage",
            characteristics: "Manubrium (superior), body or gladiolus (middle), xiphoid process (inferior, cartilaginous in youth)",
            function: "Protection of thoracic organs (heart, great vessels), insertion point for neck and trunk muscles, mediastinum protection",
            clinical_importance: "Sternal puncture for bone marrow; pain in Tietze syndrome; fractures in anterior trauma"
        },
        imageUrl: "https://placehold.co/400x300/ecf0f1/34495e?text=Sternum",
        keywords: ["sternum", "chest", "thorax", "flat bone", "ribs", "clavicle"],
        tags: ["bone", "trunk", "thorax"]
    },

    // Nerves (Nervios)
    {
        id: 6,
        name: "Sciatic Nerve",
        category: "nerve",
        subcategory: "Peripheral Nerve",
        description: "The sciatic nerve is the longest and thickest nerve in the human body. It originates from the sacral plexus (roots L4-S3) and passes through the greater sciatic foramen to descend through the posterior thigh region, where it divides into the tibial and common peroneal nerves.",
        details: {
            origin: "Sacral plexus (L4-S3)",
            pathway: "Exits pelvis through greater sciatic foramen, passes under piriformis muscle, travels through posterior thigh region",
            terminal_branches: "Tibial nerve and common peroneal nerve (in popliteal fossa)",
            function: "Innervates posterior thigh musculature and entire leg and foot (except medial leg area)",
            sensitivity: "Leg and foot (except medial leg area and thenar eminence of foot)",
            clinical_importance: "Sciatica (compression or irritation, frequently from L4-L5 or L5-S1 disc herniation); piriformis syndrome"
        },
        imageUrl: "https://placehold.co/400x300/ecf0f1/34495e?text=Sciatic+Nerve",
        keywords: ["sciatic", "nerve", "leg", "gluteal", "thigh", "spine", "sacral", "peripheral nerve"],
        tags: ["nerve", "peripheral-nerve", "lower-limb", "sacral-plexus"]
    },
    {
        id: 7,
        name: "Median Nerve",
        category: "nerve",
        subcategory: "Peripheral Nerve",
        description: "The median nerve originates from the brachial plexus (roots C5-T1) and travels through the arm and forearm. In the wrist, it passes through the carpal tunnel to innervate the thenar eminence and first 3.5 fingers.",
        details: {
            origin: "Brachial plexus (C5-T1, mainly C6-T1)",
            pathway: "Arm (anterior compartment), forearm (deep then superficial), wrist (through carpal tunnel)",
            branches: "Muscular branches in forearm, palmar cutaneous branch, thenar branch (motor), palmar digital branches (sensory)",
            function: "Innervates thenar muscles (opponens, short flexor of thumb, adductor pollicis), first two lumbricals; sensitivity in palm of hand and digits 1,2,3 and radial side of 4",
            sensitivity: "Palm of hand, thumb, index, middle and radial side of ring finger",
            clinical_importance: "Carpal tunnel syndrome (compression in transverse carpal ligament); injury in shoulder dislocation"
        },
        imageUrl: "https://placehold.co/400x300/ecf0f1/34495e?text=Median+Nerve",
        keywords: ["median", "nerve", "hand", "wrist", "carpal tunnel", "fingers", "arm", "forearm"],
        tags: ["nerve", "peripheral-nerve", "upper-limb", "brachial-plexus"]
    },
    {
        id: 8,
        name: "Ulnar Nerve",
        category: "nerve",
        subcategory: "Peripheral Nerve",
        description: "The ulnar nerve originates from the brachial plexus (roots C8-T1) and travels through the upper limb. It is known for passing behind the medial epicondyle of the humerus ('funny bone') and through the Guyon's canal in the wrist.",
        details: {
            origin: "Brachial plexus (C8-T1)",
            pathway: "Arm (posterior then medial), forearm (medial), wrist (through Guyon's canal), hand",
            branches: "Muscular branches in forearm, palmar cutaneous branch, dorsal branches of hand, deep and superficial palmar branches",
            function: "Innervates most intrinsic hand muscles (interossei, lumbricals, thumb adductors, deep flexor of pinky and ring); sensitivity in ulnar side of hand",
            sensitivity: "Pinky and half of ring finger (palm and dorsum), back of hand (digits 4 and 5)",
            clinical_importance: "Guyon's canal syndrome (compression in wrist); cubital tunnel syndrome (compression behind medial epicondyle); injury in distal humerus fractures"
        },
        imageUrl: "https://placehold.co/400x300/ecf0f1/34495e?text=Ulnar+Nerve",
        keywords: ["ulnar", "nerve", "hand", "wrist", "elbow", "pinky finger", "ring finger", "arm", "forearm"],
        tags: ["nerve", "peripheral-nerve", "upper-limb", "brachial-plexus"]
    },
    {
        id: 9,
        name: "Phrenic Nerve",
        category: "nerve",
        subcategory: "Peripheral Nerve",
        description: "The phrenic nerve originates in the cervical plexus (roots C3, C4, C5 - 'C3, C4, C5 keep the diaphragm alive') and is the principal motor and sensory innervator of the diaphragm, essential for respiration.",
        details: {
            origin: "Cervical plexus (C3-C5, mainly C4)",
            pathway: "Descends in neck behind internal carotid artery and in front of anterior scalene muscle, enters thorax between subclavian and subclavian vein",
            branches: "Pericardiac branches, bronchial branches (in lung)",
            function: "Motor innervation of diaphragm (principal muscle of inspiration); serosal sensitivity of diaphragmatic pleura and pericardium",
            clinical_importance: "High cervical lesion (C3-C5) can cause respiratory arrest; irritation causes hiccup (singultus); referred pain to shoulder (via C3-C4)"
        },
        imageUrl: "https://placehold.co/400x300/ecf0f1/34495e?text=Phrenic+Nerve",
        keywords: ["phrenic", "nerve", "diaphragm", "respiration", "neck", "cervical plexus", "breathing"],
        tags: ["nerve", "peripheral-nerve", "trunk", "cervical-plexus", "respiration"]
    },

    // Muscles (Músculos)
    {
        id: 10,
        name: "Biceps Brachii",
        category: "muscle",
        subcategory: "Upper Limb",
        description: "The biceps brachii is a muscle of the anterior arm compartment with two heads (short and long). It is the main supinator of the forearm and a powerful flexor of the elbow and shoulder.",
        details: {
            origin: "Long head: supraglenoid tubercle of scapula; Short head: coracoid process of scapula",
            insertion: "Radial tuberosity of radius and bicipital aponeurosis (deep fascia of forearm)",
            action: "Strong elbow flexion, forearm supination, weak shoulder flexion and abduction",
            innervation: "Musculocutaneous nerve (C5-C6)",
            vascularization: "Brachial artery",
            clinical_importance: "Distal tendon rupture ('popeye sign'); long head tendinitis; injury in throwing sports"
        },
        imageUrl: "https://placehold.co/400x300/ecf0f1/34495e?text=Biceps",
        keywords: ["biceps", "arm", "muscle", "flexion", "supination", "elbow", "shoulder", "arm"],
        tags: ["muscle", "upper-limb", "arm", "flexor"]
    },
    {
        id: 11,
        name: "Triceps Brachii",
        category: "muscle",
        subcategory: "Upper Limb",
        description: "The triceps brachii is the only muscle of the posterior arm compartment. It has three heads (long, lateral and medial) and is the main elbow extensor.",
        details: {
            origin: "Long head: infraglenoid tubercle of scapula; Lateral head: posterior humeral surface above radial groove; Medial head: posterior humeral surface below radial groove",
            insertion: "Olecranon of ulna",
            action: "Elbow extension; long head also contributes to shoulder adduction and extension",
            innervation: "Radial nerve (C6-C8)",
            vascularization: "Brachial artery (via collateral arteries)",
            clinical_importance: "Distal tendon rupture; radial nerve injury (wrist drop); overload in pushing sports"
        },
        imageUrl: "https://placehold.co/400x300/ecf0f1/34495e?text=Triceps",
        keywords: ["triceps", "arm", "muscle", "extension", "elbow", "shoulder", "arm"],
        tags: ["muscle", "upper-limb", "arm", "extensor"]
    },
    {
        id: 12,
        name: "Quadriceps Femoris",
        category: "muscle",
        subcategory: "Lower Limb",
        description: "The quadriceps femoris is the great knee extensor muscle, located in the anterior thigh compartment. It consists of four heads: rectus femoris, vastus lateralis, vastus medialis and vastus intermedius.",
        details: {
            origin: "Rectus femoris: anterior inferior iliac spine; Vastus lateralis: intertrochanteric line and linea aspéritud of femur; Vastus medialis: intertrochanteric line and linea aspéritud of femur; Vastus intermedius: anterior and lateral femoral surface",
            insertion: "Tibial tuberosity via patellar tendon",
            action: "Knee extension (all heads); hip flexion (only rectus femoris)",
            innervation: "Femoral nerve (L2-L4)",
            vascularization: "Deep femoral artery",
            clinical_importance: "Weakness in femoral nerve or femoral lesions; rectus femoris tendon tear; vastus medialis/vastus lateralis imbalance in patellar syndrome"
        },
        imageUrl: "https://placehold.co/400x300/ecf0f1/34495e?text=Quadriceps",
        keywords: ["quadriceps", "femoral", "muscle", "thigh", "extension", "knee", "leg"],
        tags: ["muscle", "lower-limb", "thigh", "extensor"]
    },
    {
        id: 13,
        name: "Hamstrings",
        category: "muscle",
        subcategory: "Lower Limb",
        description: "The hamstrings are a group of three muscles situated in the posterior thigh compartment: biceps femoris (long and short head), semitendinosus and semimembranosus. They are the main knee flexors and hip extensors.",
        details: {
            origin: "Biceps femoris (long): ischial tuberosity; (short): linea aspéritud of femur; Semitendinosus: ischial tuberosity; Semimembranosus: ischial tuberosity",
            insertion: "Biceps femoris: lateral tibial head and lateral collateral ligament; Semitendinosus: medial tibial surface; Semimembranosus: medial tibial condyle",
            action: "Knee flexion; hip extension (all except short head of biceps femoris)",
            innervation: "Sciatic nerve (tibial for semitendinosus and semimembranosus; common peroneal for long head of biceps femoral)",
            vascularization: "Inferior gluteal arteries and perforating branches of deep femoral artery",
            clinical_importance: "Common injuries in running and jumping sports ('pulled hamstring'); imbalance with quadriceps contributes to ligamentous knee injuries"
        },
        imageUrl: "https://placehold.co/400x300/ecf0f1/34495e?text=Hamstrings",
        keywords: ["hamstrings", "muscle", "thigh", "flexion", "extension", "hip", "knee", "leg"],
        tags: ["muscle", "lower-limb", "thigh", "flexor", "hip-extensor"]
    },
    {
        id: 14,
        name: "Diaphragm Muscle",
        category: "muscle",
        subcategory: "Trunk",
        description: "The diaphragm is a dome-shaped muscle that separates the thoracic cavity from the abdominal cavity. It is the principal muscle of inspiration, whose contraction increases thoracic cavity volume.",
        details: {
            origin: "Sternal part (xiphoid), costal part (costal cartilages 7-12) and lumbar part (lumbar crura and arches)",
            insertion: "Central tendon (phrenic center)",
            action: "Contraction → flattening → increased vertical diameter of thoracic cavity → inspiration",
            innervation: "Phrenic nerve (C3-C5)",
            vascularization: "Superior phrenic arteries (from internal thoracic) and inferior phrenic arteries (from aorta)",
            clinical_importance: "Spasm → hiccup (singultus); paralysis → respiratory difficulty; hiatal hernia (abdominal esophageal portion passes through diaphragm)"
        },
        imageUrl: "https://placehold.co/400x300/ecf0f1/34495e?text=Diaphragm",
        keywords: ["diaphragm", "muscle", "respiration", "thorax", "abdomen", "inspiration"],
        tags: ["muscle", "trunk", "respiration", "diaphragm"]
    },

    // Ligaments (Ligamentos)
    {
        id: 15,
        name: "Anterior Cruciate Ligament (ACL)",
        category: "ligament",
        subcategory: "Knee",
        description: "The anterior cruciate ligament is one of the two cruciate ligaments of the knee. It extends from the anterior intercondylar area of the tibia to the medial surface of the lateral femoral condyle. Its main function is to prevent anterior translation of the tibia relative to the femur and provide rotational stability.",
        details: {
            origin: "Anterior intercondylar area of tibia",
            insertion: "Medial surface of lateral femoral condyle",
            function: "Prevents anterior tibial translation on femur; contributes to knee rotational stability; proprioception",
            length: "Approximately 3-4 cm",
            clinical_importance: "One of the most common knee ligament injuries; frequent rupture in pivoting and jumping sports (football, basketball, skiing); often requires surgical reconstruction"
        },
        imageUrl: "https://placehold.co/400x300/ecf0f1/34495e?text=ACL",
        keywords: ["ligament", "cruciate", "anterior", "knee", "femur", "tibia", "stability", "joint"],
        tags: ["ligament", "knee", "joint", "stability"]
    },
    {
        id: 16,
        name: "Posterior Cruciate Ligament (PCL)",
        category: "ligament",
        subcategory: "Knee",
        description: "The posterior cruciate ligament is the strongest of the knee ligaments. It extends from the posterior intercondylar area of the tibia to the lateral surface of the medial femoral condyle. Its main function is to prevent posterior translation of the tibia relative to the femur.",
        details: {
            origin: "Posterior intercondylar area of tibia",
            insertion: "Lateral surface of medial femoral condyle",
            function: "Prevents posterior tibial translation on femur; supports joint in flexion; prevents hyperflexion",
            length: "Approximately 3-4 cm (stronger and thicker than ACL)",
            clinical_importance: "Less frequent than ACL injuries; occurs in direct trauma to flexed tibia (e.g., knee hitting dashboard) or forced hyperflexion"
        },
        imageUrl: "https://placehold.co/400x300/ecf0f1/34495e?text=PCL",
        keywords: ["ligament", "cruciate", "posterior", "knee", "femur", "tibia", "stability"],
        tags: ["ligandment", "knee", "joint", "stability"]
    },
    {
        id: 17,
        name: "Medial Collateral Ligament (MCL)",
        category: "ligament",
        subcategory: "Knee",
        description: "The medial collateral ligament (also called tibial collateral ligament) is a broad, flat ligament located on the medial aspect of the knee. It extends from the medial femoral condyle to the medial tibial surface, several centimeters below the joint line.",
        details: {
            origin: "Medial femoral condyle",
            insertion: "Medial tibial surface, 4-6 cm distal to joint line",
            function: "Resists valgus forces (those that tend to open the knee inward); stabilizes external tibial rotation in flexion",
            components: "Superficial (proper) and deep (unique type, attaches to medial meniscus)",
            clinical_importance: "Frequent injury in valgus contact (football tackle); often associated with medial meniscus and/or ACL injury ('unhappy triad')"
        },
        imageUrl: "https://placehold.co/400x300/ecf0f1/34495e?text=MCL",
        keywords: ["ligament", "collateral", "medial", "knee", "femur", "tibia", "valgus", "stability"],
        tags: ["ligament", "knee", "joint", "stability"]
    },
    {
        id: 18,
        name: "Lateral Collateral Ligament (LCL)",
        category: "ligament",
        subcategory: "Knee",
        description: "The lateral collateral ligament (also called fibular collateral ligament) is a strong fibrous cord located on the lateral aspect of the knee. It extends from the lateral femoral epicondyle to the head of the fibula.",
        details: {
            origin: "Lateral femoral epicondyle",
            insertion: "Head of fibula",
            function: "Resists varus forces (those that tend to open the knee outward); stabilizes internal tibial rotation in extension",
            length: "Approximately 5-6 cm",
            clinical_importance: "Less common than MCL injury; occurs in direct varus force or combined with poplitear arcuate ligament and/or posterior cruciate ligament injury"
        },
        imageUrl: "https://placehold.co/400x300/ecf0f1/34495e?text=LCL",
        keywords: ["ligament", "collateral", "lateral", "knee", "femur", "fibula", "varus", "stability"],
        tags: ["ligament", "knee", "joint", "stability"]
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsGrid = document.getElementById('results');

// Initialize the page with all results
document.addEventListener('DOMContentLoaded', () => {
    displayResults(anatomyData);
    // Focus on search input when page loads
    searchInput.focus();
});

// Event listeners
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Common filler words that shouldn't be required to match on their own
const STOPWORDS = new Set([
    'a', 'an', 'the', 'of', 'in', 'on', 'for', 'to', 'and', 'that', 'is',
    'its', 'with', 'which', 'who', 'de', 'la', 'el', 'los', 'las', 'del',
    'que', 'y', 'en', 'para', 'con'
]);

// Build the searchable text for each field separately (kept apart so field-level
// weighting and word-boundary checks are meaningful)
function getSearchableFields(item) {
    return {
        name: item.name.toLowerCase(),
        keywords: item.keywords.join(' ').toLowerCase(),
        category: `${item.category} ${item.subcategory}`.toLowerCase(),
        description: item.description.toLowerCase(),
        details: Object.values(item.details || {}).join(' ').toLowerCase()
    };
}

// How much a match in each field counts toward relevance
const FIELD_WEIGHTS = { name: 5, keywords: 4, category: 3, description: 2, details: 1 };

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Very light "stemming": for longer words, also try shortened roots so that
// e.g. "extends" can still find "extension", "preventing" can still find "prevents".
// English has irregular derivations, so we try a couple of candidate roots rather
// than betting on just one rule.
function getStemCandidates(token) {
    const candidates = new Set([token]);
    if (token.length > 5) {
        candidates.add(token.slice(0, token.length - 2)); // naive chop
        const suffixes = ['ations', 'ation', 'ing', 'ers', 'ies', 'es', 'ed', 's'];
        for (const suf of suffixes) {
            if (token.endsWith(suf) && token.length - suf.length >= 4) {
                candidates.add(token.slice(0, token.length - suf.length));
                break;
            }
        }
    }
    return Array.from(candidates);
}

function looseIncludes(text, token) {
    return getStemCandidates(token).some(candidate => text.includes(candidate));
}

// Search function
function performSearch() {
    const rawQuery = searchInput.value.trim().toLowerCase();

    if (rawQuery === '') {
        displayResults(anatomyData);
        return;
    }

    const meaningfulWords = rawQuery.split(/\s+/).filter(w => w && !STOPWORDS.has(w));
    // If the query was made up entirely of stopwords, fall back to the raw query
    const tokens = meaningfulWords.length > 0 ? meaningfulWords : [rawQuery];

    const scored = anatomyData.map(item => {
        const fields = getSearchableFields(item);
        const allText = Object.values(fields).join(' ');

        // Short/medium queries (the common case) require every word to be found —
        // this is what keeps results precise. Only long, full-sentence descriptions
        // (this app's headline feature) get some slack, since a couple of filler
        // words in a sentence may simply not appear in the data.
        const requiredMatches = tokens.length <= 3
            ? tokens.length
            : Math.max(3, Math.ceil(tokens.length * 0.5));
        const matchedTokens = tokens.filter(token => looseIncludes(allText, token));
        if (matchedTokens.length < requiredMatches) return null;

        let score = 0;
        matchedTokens.forEach(token => {
            const wholeWordRegex = new RegExp(`\\b${escapeRegex(token)}`, 'i');
            Object.entries(fields).forEach(([fieldName, text]) => {
                const weight = FIELD_WEIGHTS[fieldName] || 1;
                if (wholeWordRegex.test(text)) {
                    score += weight; // exact word match, full confidence
                } else if (looseIncludes(text, token)) {
                    score += weight * 0.4; // matched via root/substring, lower confidence
                }
            });
        });

        // small bonus if the full query appears verbatim anywhere
        if (allText.includes(rawQuery)) score += 15;

        return { item, score };
    }).filter(Boolean);

    scored.sort((a, b) => b.score - a.score);

    displayResults(scored.map(s => s.item));
}

// Display results function
function displayResults(items) {
    // Clear previous results
    resultsGrid.innerHTML = '';

    if (items.length === 0) {
        showNoResultsMessage();
        return;
    }

    // Create and append result cards
    items.forEach(item => {
        const card = createResultCard(item);
        resultsGrid.appendChild(card);
    });

    // Add animation classes after a brief delay to ensure DOM is ready
    setTimeout(() => {
        const cards = resultsGrid.querySelectorAll('.result-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.05}s`;
        });
    }, 10);
}

// Show no results message
function showNoResultsMessage() {
    resultsGrid.innerHTML = `
        <div class="no-results">
            <h3>No results found</h3>
            <p>Try different or more specific terms.</p>
            <p>Examples: "long bone of thigh", "nerve that innervates diaphragm", "muscle that extends knee"</p>
        </div>
    `;
}

// Create result card element
function createResultCard(item) {
    const card = document.createElement('div');
    card.className = 'result-card';

    // Create image element
    const imageDiv = document.createElement('div');
    imageDiv.className = 'result-image loading';

    const img = document.createElement('img');
    img.src = item.imageUrl;
    img.alt = `${item.name} - anatomical illustration`;
    img.onload = () => {
        imageDiv.classList.remove('loading');
        imageDiv.classList.add('loaded');
    };
    img.onerror = () => {
        // Keep placeholder if image fails to load
        imageDiv.classList.remove('loading');
    };

    imageDiv.appendChild(img);

    // Create content
    const contentDiv = document.createElement('div');
    contentDiv.className = 'result-content';

    // Header
    const headerDiv = document.createElement('div');
    headerDiv.className = 'result-header';

    const nameH2 = document.createElement('h2');
    nameH2.className = 'result-name';
    nameH2.textContent = item.name;

    const categorySpan = document.createElement('span');
    categorySpan.className = 'result-category';
    categorySpan.textContent = formatCategory(item.category, item.subcategory);

    headerDiv.appendChild(nameH2);
    headerDiv.appendChild(categorySpan);

    // Description
    const descP = document.createElement('p');
    descP.className = 'result-description';
    descP.textContent = item.description;

    // Footer with additional info
    const footerDiv = document.createElement('div');
    footerDiv.className = 'result-footer';

    // Add key details
    const detailsItems = Object.entries(item.details || {});
    if (detailsItems.length > 0) {
        const detailsList = document.createElement('div');
        detailsList.style.display = 'grid';
        detailsList.style.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
        detailsList.style.gap = '0.5rem';
        detailsList.style.fontSize = '0.9rem';
        detailsList.style.color = 'var(--text-light)';

        detailsItems.forEach(([key, value]) => {
            const itemDiv = document.createElement('div');
            itemDiv.style.display = 'flex';
            itemDiv.style.flexDirection = 'column';

            const label = document.createElement('strong');
            label.textContent = `${key}: `;

            const valueSpan = document.createElement('span');
            valueSpan.textContent = String(value);

            itemDiv.appendChild(label);
            itemDiv.appendChild(valueSpan);
            detailsList.appendChild(itemDiv);
        });

        footerDiv.appendChild(detailsList);
    }

    // Assemble card
    contentDiv.appendChild(headerDiv);
    contentDiv.appendChild(descP);
    contentDiv.appendChild(footerDiv);

    card.appendChild(imageDiv);
    card.appendChild(contentDiv);

    return card;
}

// Helper function to format category display
function formatCategory(category, subcategory) {
    const categoryMap = {
        'bone': 'Bone',
        'nerve': 'Nerve',
        'muscle': 'Muscle',
        'ligament': 'Ligament'
    };

    const base = categoryMap[category] || category;
    return subcategory ? `${base} - ${subcategory}` : base;
}

// Initialize with some sample searches to demonstrate functionality
// This runs after a short delay to avoid interfering with user interaction
setTimeout(() => {
    // Optional: Show a tip or featured item
    // For now, just ensure focus is on search
    searchInput.focus();
}, 500);

// Add keyboard shortcut hint
document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        searchInput.focus();
    }
});

// Add subtle animation to search button on hover
searchBtn.addEventListener('mouseenter', () => {
    searchBtn.style.transform = 'scale(1.05)';
});

searchBtn.addEventListener('mouseleave', () => {
    searchBtn.style.transform = 'scale(1)';
});

searchBtn.addEventListener('mousedown', () => {
    searchBtn.style.transform = 'scale(0.98)';
});

searchBtn.addEventListener('mouseup', () => {
    searchBtn.style.transform = 'scale(1.05)';
});