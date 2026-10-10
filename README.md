# Emerald Escapes

A responsive travel website showcasing City, Coastal and Countryside experiences in Ireland. Built as the first assessment for the Web Design module of the Higher Diploma in Computing.

**Live site:** [4marcosyndrome.github.io/Emerald-Escapes](https://4marcosyndrome.github.io/Emerald-Escapes/)

## Pages

| Page | File | Description |
| --- | --- | --- |
| Home | `index.html` | Landing page with a hero section introducing Emerald Escapes |
| Experiences | `experiences.html` | Cards generated from an XML file of places, with a search and filter section |
| Contact | `contact.html` | Contact page with an enquiry form |

## Features

- Responsive layout that adapts to mobile, tablet and desktop
- Glassmorphic navigation bar with a light/dark theme toggle
- Experience cards generated dynamically from an XML data file
- Search and filter section on the Experiences page
- Experiences grouped into three categories: **City**, **Coastal** and **Countryside**
- Accessible markup (semantic HTML, descriptive labels for background images)

## Built With

- HTML5
- CSS3
- JavaScript (vanilla)
- XML (experiences data)
- GitHub Pages (hosting) and GitHub Actions (deployment workflow)

## Project Structure

```
Emerald-Escapes/
├── .github/workflows/   # GitHub Pages deployment workflow
├── assets/              # Images, logo, stylesheets, scripts and data
├── index.html           # Home page
├── experiences.html     # Experiences page
├── contact.html         # Contact page
└── README.md
```

## Running Locally

1. Clone the repository:

```bash
   git clone https://github.com/4MarcoSyndrome/Emerald-Escapes.git
```

2. Open the project folder.

3. Serve it with a local web server rather than opening the files directly. Browsers block loading XML files from `file://`, so the Experiences page won't work otherwise. For example, with the VS Code **Live Server** extension, or:

```bash
   python -m http.server 8000
```

   Then visit `http://localhost:8000`.

## Design Notes

### Navbar

I used code from CodePen, [Modern Glassmorphic Navigation Bar with Theme Toggle](https://codepen.io/themrsami/pen/YPzvmyY), adjusted to my requirements.

### Colors

Based on the official colors of the [Irish flag](https://www.flagcolorcodes.com/ireland).

### Images

- Hero background photo from [Unsplash](https://unsplash.com/photos/sea-and-cliff-during-daytime-Xm5jDcBv_oE).
- Because CSS background images have no alt text, I added the description in the `aria-label` of the section, following [davidmacd.com](https://www.davidmacd.com/blog/alternate-text-for-css-background-images.html).
- The logo was generated with [Canva](https://www.canva.com/) as a .jpg and converted to .svg with [Convertio](https://convertio.co/).

## Deployment

Deployed on [GitHub Pages](https://4marcosyndrome.github.io/Emerald-Escapes/) from the `main` branch.

## Credits

- Navbar: [themrsami on CodePen](https://codepen.io/themrsami/pen/YPzvmyY)
- Hero photo: [Unsplash](https://unsplash.com/photos/sea-and-cliff-during-daytime-Xm5jDcBv_oE)
- Logo tools: [Canva](https://www.canva.com/), [Convertio](https://convertio.co/)
- Colors: [Flag Color Codes](https://www.flagcolorcodes.com/ireland)

## Author

- [4MarcoSyndrome](https://github.com/4MarcoSyndrome)
- [maxthor500](https://github.com/maxthor500)
