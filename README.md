This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Weed Categories:


Product:
    - Product_ID (Primary Key)
    - Name
    - Description
    - Image_ID
    - Strain
    - Potency (e.g., AAA)
    - THC_levels
    - CBD_levels
    - category
    - subcategory
    - rating
    - available (boolean)
    - QTY

Weight:
    - Weight_ID (Primary Key)
    - Weight_Value (e.g., 1g, 3.5gs)

Price:
    - Product_ID (Foreign Key references Product)
    - Weight_ID (Foreign Key references Weight)
    - Price
    - Composite Primary Key (Product_ID, Weight_ID)

Product_ID | Weights
-----------|-------------------------------------------------
1000       | 1g
1001       | 1g, 3.5gs
1002       | 1g, 7gs
1003       | 1g, 14gs
1004       | 1g, 1oz
1005       | 1g, 3.5gs, 7gs
1006       | 1g, 3.5gs, 14gs
1007       | 1g, 3.5gs, 1oz
1008       | 1g, 7gs, 14gs
1009       | 1g, 7gs, 1oz
1010       | 1g, 14gs, 1oz
1011       | 1g, 3.5gs, 7gs, 14gs
1012       | 1g, 3.5gs, 7gs, 1oz
1013       | 1g, 3.5gs, 14gs, 1oz
1014       | 1g, 7gs, 14gs, 1oz
1015       | 1g, 3.5gs, 7gs, 14gs, 1oz
1016       | 3.5gs
1017       | 3.5gs, 7gs
1018       | 3.5gs, 14gs
1019       | 3.5gs, 1oz
1020       | 3.5gs, 7gs, 14gs
1021       | 3.5gs, 7gs, 1oz
1022       | 3.5gs, 14gs, 1oz
1023       | 3.5gs, 7gs, 14gs, 1oz
1024       | 7gs
1025       | 7gs, 14gs
1026       | 7gs, 1oz
1027       | 7gs, 14gs, 1oz
1028       | 14gs
1029       | 14gs, 1oz
1030       | 1oz
