# Paradise Nursery

Paradise Nursery is my final React project for the Coursera front-end course. It's a simple houseplant shop where you can browse plants and add them to a shopping cart.

## What's included
- Home page with information about the nursery and a Get Started button
- 18 plants in three categories
- Add to Cart buttons that disable after adding a plant
- Cart with quantity controls, remove buttons and automatic totals
- React Router navigation and Redux Toolkit cart state
- A checkout button that displays a Coming Soon message

## Running the project

Install Node.js, then open a terminal in the project folder:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal.

## GitHub Pages

Create a **public repository named `paradise-nursery`**. The Vite base path is configured for this exact name.

```bash
npm install
npm run build
npm run deploy
```

In GitHub repository Settings > Pages, set the source to **Deploy from a branch**, branch **gh-pages**, folder **/(root)**. The site will be at `https://YOUR-USERNAME.github.io/paradise-nursery/`.

The project uses `HashRouter` so all three pages work when opened on GitHub Pages. The plant images are original simple SVG illustrations bundled with the project.

## Main files
- `src/App.jsx`: landing page and routes
- `src/components/AboutUs.jsx`: company information
- `src/App.css`: styles and landing page background
- `src/components/ProductList.jsx`: product cards and Add to Cart
- `src/components/CartItem.jsx`: cart page and totals
- `src/redux/CartSlice.jsx`: Redux cart actions
- `src/redux/store.js`: Redux store

## Notes
Prices are shown in Canadian dollars. Checkout is a demonstration only.
