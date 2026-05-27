import mongoose from "mongoose";
import dotenv from "dotenv";
import { Template } from "../models/Template.js";

dotenv.config();

import dns from "dns";

dns.setServers([
  "8.8.8.8",
  "1.1.1.1",
]);

await mongoose.connect(
  process.env.MONGO_URI
);

await Template.deleteMany();

await Template.insertMany([
  {
    name: "SEO Template 1",

    subject:
      "Had a quick look at {{website}}",

    body: `Hi {{name}},

I was checking out {{website}} earlier and noticed there may be a few areas affecting how consistently the business appears online.

A few competitors in the same space seem to be positioning themselves more aggressively in search.

Not sure if this is something your team is actively working on, but I thought it was worth reaching out.

`,
  },

  {
    name: "SEO Template 2",

    subject:
      "A quick observation regarding {{website}}",

    body: `Hi {{name}},

Came across {{website}} while browsing businesses in your industry.

Your services look solid, though it feels like the online visibility could likely be performing much better.

There may be a few easy opportunities being missed currently.

Thought I'd reach out.

`,
  },

  {
    name: "SEO Template 3",

    subject:
      "Potential improvements for {{website}}",

    body: `Hi {{name}},

I spent a little time reviewing {{website}} and noticed a few areas where visibility and inquiry flow may not be performing as well as they could.

Usually even small SEO or website adjustments make a noticeable difference over time.

Wanted to connect briefly.

`,
  },

  {
    name: "SEO Template 4",

    subject:
      "{{website}} caught my attention",

    body: `Hi {{name}},

Your business came up while I was researching companies in the space.

One thing I noticed is that there may be room to improve how the business appears online, especially compared to others in the same niche.

Thought it made sense to reach out.

`,
  },

  {
    name: "SEO Template 5",

    subject:
      "Noticed something on {{website}}",

    body: `Hi {{name}},

I came across {{website}} and had a quick look through it.

The business itself looks promising, though there are a few areas where the current website and SEO setup may not be helping as much as they could.

These things usually compound quietly over time.

`,
  },

  {
    name: "SEO Template 6",

    subject:
      "Quick question regarding {{website}}",

    body: `Hi {{name}},

Not sure if this is something your team actively monitors, but while checking {{website}}, I noticed a few indicators that could be limiting organic reach and inquiry flow.

Sometimes even small technical or content improvements have a noticeable impact.

Happy to share thoughts if useful.

`,
  },

  {
    name: "SEO Template 7",

    subject:
      "{{website}} and online visibility",

    body: `Hi {{name}},

I recently came across {{website}} and wanted to reach out briefly.

It looks like there may be some untapped potential around visibility and lead acquisition online.

A few competitors in the space already seem to be benefiting from this.

Thought the conversation might be relevant.

`,
  },

  {
    name: "SEO Template 8",

    subject:
      "A few things I noticed on {{website}}",

    body: `Hi {{name}},

I was reviewing {{website}} earlier and noticed a few areas that may be affecting how consistently the business shows up online.

Usually these are things businesses don't notice until competitors start outranking them over time.

Wanted to introduce myself and connect.

`,
  },

  {
    name: "SEO Template 9",

    subject:
      "Could be worth reviewing {{website}}",

    body: `Hi {{name}},

I had a quick look at {{website}} and it seems like there may be some opportunities to improve both visibility and conversions over time.

A lot of businesses focus heavily on ads while overlooking organic search positioning.

Thought I'd mention it.

`,
  },

  {
    name: "SEO Template 10",

    subject:
      "Reaching out regarding {{website}}",

    body: `Hi {{name}},

I came across {{website}} during some industry research and wanted to connect.

There appear to be a few areas where search performance and website optimization could likely be improved over time.

Nothing dramatic — just small things that quietly impact lead flow and visibility.

Thought it made sense to reach out.

`,
  },
]);

console.log(
  "Templates Seeded Successfully"
);

process.exit();