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
npm ci
npm run dev
```

Open the local URL printed in the terminal.

## GitHub Pages

Live app: https://bradleybeachoo-collab.github.io/paradise-nursery-/

Deployment uses GitHub Actions in `.github/workflows/deploy.yml`. Every push to
`main` installs the locked dependencies with `npm ci`, builds the Vite app and
publishes `dist` to GitHub Pages. In **Settings > Pages**, the build source must
be **GitHub Actions**.

The Vite base is `/paradise-nursery-/`, matching the repository name including
its final hyphen. `HashRouter` supports opening and refreshing all app routes.
Plant images are original SVG illustrations in `public/plants`.

To verify a production build locally:

```bash
npm ci
npm run build
npm run preview
```

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

## Coursera submission links

Use the links requested by your submission form:

| Item | Public link |
| --- | --- |
| Repository | [paradise-nursery-](https://github.com/bradleybeachoo-collab/paradise-nursery-) |
| Deployed application | [Paradise Nursery](https://bradleybeachoo-collab.github.io/paradise-nursery-/) |
| Product listing and Add to Cart | [ProductList.jsx](https://github.com/bradleybeachoo-collab/paradise-nursery-/blob/main/src/components/ProductList.jsx) |
| Shopping cart and totals | [CartItem.jsx](https://github.com/bradleybeachoo-collab/paradise-nursery-/blob/main/src/components/CartItem.jsx) |
| Redux cart actions | [CartSlice.jsx](https://github.com/bradleybeachoo-collab/paradise-nursery-/blob/main/src/redux/CartSlice.jsx) |
| About the nursery | [AboutUs.jsx](https://github.com/bradleybeachoo-collab/paradise-nursery-/blob/main/src/components/AboutUs.jsx) |
| Landing page and routes | [App.jsx](https://github.com/bradleybeachoo-collab/paradise-nursery-/blob/main/src/App.jsx) |
| Styling | [App.css](https://github.com/bradleybeachoo-collab/paradise-nursery-/blob/main/src/App.css) |
| Redux store | [store.js](https://github.com/bradleybeachoo-collab/paradise-nursery-/blob/main/src/redux/store.js) |
| React entry point | [main.jsx](https://github.com/bradleybeachoo-collab/paradise-nursery-/blob/main/src/main.jsx) |
