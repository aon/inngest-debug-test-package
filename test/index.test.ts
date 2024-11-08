import { beforeEach, describe, expect, it } from "vitest";
import { stepRunsTwice, stepThrows } from "../src";
import { InngestTestEngine } from "@inngest/test";

describe("step-throws", () => {
  const testEngine = new InngestTestEngine({
    function: stepThrows,
  });

  it("should throw if the step throws", async () => {
    const result = testEngine.execute();
    await expect(result).rejects.toThrow();
  });
});

describe("step-runs-twice", () => {
  const testEngine = new InngestTestEngine({
    function: stepRunsTwice,
  });

  it("should run the step twice", async () => {
    const result = testEngine.execute();
    await expect(result).resolves.toBeDefined();
  });
});
