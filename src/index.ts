#!/usr/bin/env node
import inquirer from "inquirer";
import fs from "fs/promises";
import path from "path";

type Choices = "react" | "node";

async function main() {
  const chosenFramework = await inquirer.prompt<{ framework: Choices }>([
    {
      type: "list",
      message: "Select the framework your using: ",
      name: "framework",
      choices: ["react", "node"],
    },
  ]);

  const tsconfigString = await getTsConfigs(chosenFramework);

  const cwd = process.cwd();
  await fs.writeFile(cwd + "/tsconfig.json", tsconfigString);
  console.log("tsconfig.json successfully created!");

  async function getTsConfigs({ framework }: { framework: Choices }) {
    const node = await fs.readFile(
      path.resolve(__dirname, "../config/node.json")
    );

    const react = await fs.readFile(
      path.resolve(__dirname, "../config/react.json")
    );

    return { node, react }[framework];
  }
}

main();
