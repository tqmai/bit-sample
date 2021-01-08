# Hatch Labs Next.js Starter

Created by: Tim Mai

Last updated: 1/8/20

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). In addition, it has the following packages:

- ESLint (for code quality concerns)
- Prettier (for code formatting concerns)
- TypeScript (for static type checking)
- lint-staged and husky (for pre-commit auto formatting)
- Figmagic (for accessing design tokens in Figma)

General Notes:

- I opted to use a stricter styleguide (Airbnb) to allow for more code consistency
- lint-staged prevents the user from committing code with errors
- lint-staged also automatically runs Prettier on any changed files while committing them
- If you see an eslint error in your tsconfig.json file, you can find a solution here: https://stackoverflow.com/questions/50432556/cannot-use-jsx-unless-the-jsx-flag-is-provided

Figmagic Notes:

- You need to add a `FIGMA_URL` and `FIGMA_TOKEN` to your `.env` file in your root folder
- Then run `figmagic` to get your design tokens, which will appear in a folder (/tokens) in the root (this works best if you install Figmagic globally first)
- More detailed instructions can be found here: https://github.com/mikaelvesavuori/figmagic#running-figmagic

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
