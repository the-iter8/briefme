# Brief Me 📓 V2 Hosted at 
<br />
- https://briefme-the-iter8.vercel.app/

A web application built with a scalable codebase that displays an assortment of customizable trinkets meticulously designed to offer swift and precise daily digests. Or in simple words Your Daily Digest Condensed in 1 screen.

Ever got so occupied, that you forgot to take your daily source of information? Well, Just open Brief me on your Laptop and glance over all the daily digest information that matters you the most. It displays information like Weather, On This Day, Stock Prices, Metal Prices etc. in form of modules so that you can access all of the quick and small but important information, at one place.

## Features

- 🔑 [Google Authentication](https://firebase.google.com/docs/auth) & Storage with [Firebase](https://firebase.google.com/) 🔥
- ⚡ NextJS [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration):
  - 🚀 Faster & efficient: generates content at server-side
  - 💰 lower server costs: 1 API call per widget/day\*
  - 🚫 No stale data in pre-rendered pages.
- 🖱️ Drag & Drop widget to customize and retain the layout.
- 💾 User preference retention with Firestore
  - 💻 Stores custom layouts for displaying the widgets.
  - 🎨 Stores the preference of different widgets.
- 🍞 [React Toastified](https://www.npmjs.com/package/react-toastify) - Shows a notification for each update made on the page.
- 🔄 [SWR](https://swr.vercel.app/) (Stale-While-Revalidate) for volatile data like weather reports.
- 📖 User friendly quick guide on how to use the application.

`*some of the widgets use realtime fetching having multiple calls per day.`

## Widgets that we currently deliver 📖-

| Name               | Source                     |
| ------------------ | -------------------------- |
| BhagwadGita Quotes | 🙏🏼 Shree Bhagavad Gita API |
| On This Day        | 🗓️ Wikimedia Commons API   |
| Weather Now        | ☁️ Open Weather API        |
| Stock Prices       | 💹 Alpha Vantage           |
| Metal Prices       | 💰 Gold Price Live API     |
| Youtube Brief      | 💰 Youtube Data API        |

## Changelog

### V2

**Fixed bugs:**

- Fixed Bhagwadgita Quote not triggering on 30th of the month.

**Redesign**

- Redesigned the whole UI, to NeuBrutalism UI. 
- Added some click sound and changed the font to [Inconsolata](https://fonts.google.com/specimen/Inconsolata)
- Checkout branch version/v1 to check the older version.


**SSR/ISR rebalance. (Coming Soon)**

- Added an external CronJob that handles the revalidation for the API fetching. Removed revalidate period inside getStaticProps. 
- ISR with revalidation period set to 1 day, the revalidation period start when the "getStaticProps" function is triggered. So for example, if a user visits the website at 2:30 PM it will serve the same data till 2:30 PM of the next day, only then on the first request it rebuilds the page and serves the fresh data to the second request.


## Tech Stack & Design

**Client:** NextJS

**Backend:** Node, Firebase

**UI library:** Material Ui

**Icons:** MUi Icons

**Design:** Figma: [Here is the design layout](https://www.figma.com/file/td1AGvWkqiQVVrfPDi8IH6/Brief-me?node-id=0-1)

**Misc Libraries:** SWR, Swiper, SupaDemo, React-Grid-Layout, React-Toastify.

## FAQ ❓🙋‍♂️

#### Only 5 widgets, is that it?

❌ No, We are planning to add more widgets soon.

#### Can I add a custom widget?

✔️ You can submit your widget request by contacting 📧 [randomdweller.me@gmail.com](mailto:example@example.com)

## Feedback

If you found any issues while using my application, please do let me know by creating an issue in the issue section here in github.com.

## Known Bugs 🐛👀-

🐌 After logging in there is a delay in displaying the widgets.
-🎨 UI needs improvement and color scheme does not go well.

---

Made with ❤️ by iter8 in India.
