import { Template } from "../models/Template.js";

export const getRandomTemplate =
  async () => {

    const templates =
      await Template.find({
        isActive: true,
      });

    if (!templates.length) {
      throw new Error(
        "No templates found"
      );
    }

    const randomIndex =
      Math.floor(
        Math.random() *
        templates.length
      );

    return templates[randomIndex];
  };