# Periodic Table Website

An interactive, educational periodic table of elements built with HTML5, CSS3, and Vanilla JavaScript. Explore element classifications, historical discoveries, alchemical origins, and periodic trends — all in one responsive web application.

## Live Demo

https://periodic-table-website-3rfarierd-ffluck2004s-projects.vercel.app

## Features

- **Interactive Periodic Table** — Clickable table with color-coded element groups
- **Element Classification Filters** — Filter by metals, non-metals, metalloids, halogens, noble gases, and more
- **Block Navigation** — View s-block, d-block, p-block, and f-block elements
- **History Section** — Scientist profiles with image carousel and biographical info (Davy, Berzelius, Bunsen, Kirchhoff, Boisbaudran, Ramsay, Curie, Seaborg)
- **Alchemy Section** — Explore the historical roots of chemistry with alchemical symbols
- **Trends Section** — Visual guides for atomic radius, ionization energy, electronegativity, electron affinity, melting points, and oxidation states
- **Responsive Design** — Works on desktop and mobile devices
- **Smooth Navigation** — Fixed top navbar with page transitions

## Technologies Used

- **HTML5** — Semantic markup and structure
- **CSS3** — Flexbox, grid layouts, transitions, animations, responsive design
- **Vanilla JavaScript** — DOM manipulation, event handling, slider navigation
- **GitHub Pages / Vercel** — Deployment

## Project Structure

```
periodic-table-website/
├── index.html              # Redirects to periodic1.html
├── periodic1.html          # Main interactive periodic table
├── periodic1.css           # Main stylesheet
├── periodic1.js            # Main JavaScript
├── alchemy.html            # Alchemy history page
├── alchemy.css             # Alchemy page styles
├── history.html            # History page with scientist profiles
├── history.css             # History page styles
├── trends.html             # Periodic trends page
├── s-block.html            # s-block elements view
├── p-block.html            # p-block elements view
├── d-block.html            # d-block elements view
├── f-block.html            # f-block elements view
├── metals.html             # Metals filter view
├── non-metal.html          # Non-metals filter view
├── metalloid.html          # Metalloids filter view
├── halogen.html            # Halogens filter view
├── noble-gas.html          # Noble gases filter view
├── actinides.html          # Actinides filter view
├── lactinides.html         # Lanthanides filter view
├── clearfilter.html        # Full table (clear filters)
├── clearfilter2.html       # Full history table (clear filters)
├── davy.html               # Humphry Davy biography
├── berzelius.html          # Jöns Jacob Berzelius biography
├── bunsen.html             # Robert Bunsen biography
├── kirchhoff.html          # Gustav Kirchhoff biography
├── Boisbaudran.html        # Paul-Émile Lecoq de Boisbaudran biography
├── ramsay.html             # William Ramsay biography
├── curie.html              # Marie Curie biography
├── seaborg.html            # Glenn T. Seaborg biography
└── README.md               # Project documentation
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ffluck2004/periodic-table-website.git
   cd periodic-table-website
   ```

2. **Open locally**
   Open `index.html` in your browser, or serve with a local development server:
   ```bash
   npx serve .
   ```

   No build tools or package managers required.

## Usage

- Click the **Blocks** buttons (s, d, p, f) to highlight specific element blocks
- Use the **Classification** buttons to filter by element type (Metal, Non-Metal, etc.)
- Click **Clear Filters** to reset the table view
- Navigate to **History**, **Alchemy**, or **Trends** using the top navbar
- In the History section, use the arrow buttons to scroll through scientist profiles

## Future Improvements

- [ ] Add element detail cards with full properties on click
- [ ] Implement search functionality for quick element lookup
- [ ] Add a temperature slider to visualize states of matter at different temperatures
- [ ] Include electron configuration diagrams for each element
- [ ] Add quiz mode for educational testing
- [ ] Improve accessibility with ARIA labels and keyboard navigation
- [ ] Add dark mode toggle
- [ ] Progressive Web App (PWA) support for offline access

## License

This project is for educational purposes.
