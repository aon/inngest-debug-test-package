import { Inngest } from "inngest";
import fs from "fs";
export const inngest = new Inngest({
  id: "afippi",
  eventKey: process.env.INNGEST_EVENT_KEY,
});

export const stepThrows = inngest.createFunction(
  {
    id: "step-throws",
  },
  [],
  async ({ step }) => {
    await step.run("throw-error", () => {
      console.log("Throwing error");
      throw new Error("This is an error");
    });
  }
);

export const stepRunsTwice = inngest.createFunction(
  {
    id: "step-runs-twice",
  },
  [],
  async ({ step }) => {
    await step.run("run-twice", () => {
      console.log("Step that runs twice");
    });

    await step.run("this-only-runs-once", () => {
      console.log("This only runs once");
    });
  }
);
