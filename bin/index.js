#! /usr/bin/env node
import chalkAnimation from "chalk-animation";

chalkAnimation.glitch("Critical Error (An unknown error has occurred.)");

setTimeout(() => chalkAnimation.glitch("Please reboot immediately"), 3000);

process.exit(0);
