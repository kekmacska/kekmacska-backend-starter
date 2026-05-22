#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const templateDir = path.join(__dirname, "template");
const targetDir = process.cwd();

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

  for (const file of fs.readdirSync(src)) {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyRecursive(templateDir, targetDir);

console.log("✔ kekmacska-backend-starter created in", targetDir);