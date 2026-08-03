# Anatomy Study Platform for Physical Therapy

An interactive web platform designed to help physical therapy students and healthcare professionals learn and review human body parts (bones, nerves, muscles, ligaments) through intuitive searches based on position, function or characteristics.

Inspired by leading platforms like BioDigital, Visible Body and Kenhub, this tool offers a modern and professional educational experience.

## Enhanced Features

- **Intelligent Semantic Search**: Describe the location, function or characteristic of an anatomical structure and find relevant matches (e.g: "muscle that extends the knee", "nerve that innervates the diaphragm")
- **Detailed Information**: Each result includes complete description, precise location, joints, innervation, vascularization and clinical importance
- **Professional Categorization**: Structures organized by type (bone, nerve, muscle, ligament) and anatomical subcategory
- **Modern Professional Design**: Clean interface inspired by high-quality medical platforms
- **Responsive Design**: Works perfectly on desktop, tablet and mobile
- **Visual Feedback**: Smooth animations and loading states for better user experience
- **Keyboard Accessibility**: Full keyboard navigation (use "/" to focus search)

## Information Architecture

Each anatomical structure includes:
- **Name**: Official name and common terms
- **Classification**: Tissue type and anatomical subcategory
- **General Description**: Clear and concise overview of the structure
- **Anatomical Details**:
  - Precise location in the body
  - Joints (for bones) or innervation (for nerves/muscles)
  - Distinctive structural characteristics
  - Main function
  - Innervation and vascularization (when applicable)
  - Clinical relevance for physical therapy
- **Visual Reference**: Descriptive illustration (currently placeholders - replace with real images)
- **Search Keywords**: Associated terms to improve search detection

## How to Use

1. Open `index.html` in your preferred modern browser (Chrome, Firefox, Safari, Edge)
2. Click in the search field or press spacebar "/" to focus directly on search
3. Type a description of the structure you're looking for:
   - By location: "long bone of thigh", "muscle in posterior arm"
   - By function: "muscle that extends knee", "nerve that innervates diaphragm"
   - By characteristic: "ligament that prevents anterior tibial translation"
   - By direct name: "femur", "sciatic nerve"
4. Press Enter or click the search button
5. Explore results with detailed information

### Effective Search Examples:
- `"muscle that flexes the elbow"` → Biceps brachii
- `"nerve that innervates the diaphragm"` → Phrenic nerve
- `"anterior cruciate ligament of knee"` → ACL
- `"arm bone"` → Humerus
- `"diaphragm muscle, main inspiration muscle"` → Diaphragm
- `"structure connecting femur to tibia preventing anterior displacement"` → ACL

## Project Structure

```
anatomy_study_platform/
├── index.html          # Main platform structure
├── style.css           # Modern responsive design
├── script.js           # Search logic, anatomical data and interactivity
└── README.md           # This file
```

## Customization and Expansion

### Adding New Anatomical Structures

Edit `script.js` and add new objects to the `anatomyData` array following this format:

```javascript
{
  id: [unique number],
  name: "Structure name",
  category: "bone|nerve|muscle|ligament",
  subcategory: "Specific anatomical subcategory (e.g: Upper Limb, Peripheral Nerve)",
  description: "Clear and concise 1-2 sentence description",
  details: {
    "Location": "Precise description of where it's located",
    "Joints": "For bones: what it articulates with",
    "Innervation": "For nerves/muscles: what nerve innervates it",
    "Function": "Main function in the body",
    "Clinical Importance": "Relevance for physical therapy practice"
    // Add other fields as needed per structure type
  },
  imageUrl: "URL of illustrative image (recommended: rights-free sources)",
  keywords: ["word1", "word2", "word3"], // Terms to improve search
  tags: ["tag1", "tag2"] // For filtering and categorization
}
```

### Image Recommendations

To replace placeholders with real illustrations:

1. **Recommended Rights-Free Sources:**
   - [Wikimedia Commons](https://commons.wikimedia.org/) - Search for CC0 or CC-BY licensed images
   - [OpenStax Anatomy and Physiology](https://openstax.org/books/anatomy-and-physiology/pages/1-introduction)
   - [NIH 3D Print Exchange](https://3dprint.nih.gov/) (for 3D printable models)
   - [Anatomy Next](https://www.anatomynext.com/) (has educational resources)

2. **Recommended Format and Size:**
   - Format: JPG or WebP for photographs, SVG for vector illustrations
   - Size: Web optimized (max 200-300KB per image)
   - Dimensions: 400x300px or similar proportion for consistency

3. **Attribution (if required):**
   - Include small credit on image or in acknowledgments section
   - Example: "Image: [Name], via [Source] under [License] license"

### Future Enhancement Suggestions

- Implement dark mode to reduce visual fatigue
- Add study mode with flashcards (memory cards)
- Incorporate self-assessment quizzes
- Add filtering by body region (head, trunk, extremities)
- Integration of simple 3D models using libraries like Three.js
- Favorites/bookmark system for frequently consulted structures
- Night mode and text size adjustments for accessibility

## Technologies Used

- **HTML5** - Semantic and accessible structure
- **CSS3** - Modern design with variables, flexbox, grid and animations
- **JavaScript ES6** - Search logic, data handling and interactivity without frameworks
- **Responsive Design** - Mobile-first approach with breakpoints at 768px and 480px

## 3D Model Viewer

Each result card includes a "View in 3D" button that loads an interactive 3D model of the matching body system (skeletal, muscular, nervous, or joint/ligament), streamed from **[Sketchfab](https://sketchfab.com/)**.

- Muscular, nervous, and joint/ligament models are sourced from **[Z-Anatomy](https://www.z-anatomy.com/)**, an open-source anatomy atlas, licensed **CC BY-SA**.
- The skeletal model is sourced from a separately-published Sketchfab model by **l.kuzyakin** ("Human Skeleton Highresolution model").
- Attribution and license (when known) are shown automatically in the app whenever a model is opened, and must be preserved if you redistribute this project.
- These are whole body system models rather than one model per structure, so the viewer shows the full system (e.g. the entire skeleton) — rotate and zoom to find the specific structure you're studying.
- Only one 3D viewer runs at a time (opening a new one closes the previous) to avoid overloading mobile browsers with multiple WebGL contexts.
- **This feature requires an internet connection.** Everything else in this app works fully offline, but the 3D models are streamed from Sketchfab and are not cached for offline use.

## Privacy and Data Usage

This application is completely static and runs 100% client-side:
- No personal data is collected or transmitted by this app's own code
- No cookies or tracking technologies are used by this app
- All search processing happens in the user's browser
- Can be used completely offline after initial load, **except for the "View in 3D" feature**, which loads content from Sketchfab.com on demand (subject to Sketchfab's own privacy policy)

## License and Usage

This project is free for educational use. You may:
- Use for personal study or teaching
- Modify and adapt to specific needs
- Distribute in educational environments
- Improve and share more anatomical content

**Recommendation:** If using this material in formal educational context, consider acknowledging its use and, if making significant improvements, share them with the educational community.

## Support and Feedback

If you have suggestions to improve this platform, find errors or wish to contribute additional anatomical content, please don't hesitate to contact or contribute to the project.

Success in your physical therapy studies!