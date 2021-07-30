#!/usr/bin/env node
// Imports
// ---------------------------------------------------
require("dotenv").config({ path: "../.env" });
const { getPersons } = require("./requests.js");
const { Command } = require("commander");
const chalk = require("chalk");
const program = new Command();

// General variables
// ---------------------------------------------------
const apiKey = process.env.API_KEY;

/* -------------------------------------------------------------------------- */
/*                                    Test                                    */
/* -------------------------------------------------------------------------- */
console.log("This is the API key: ", chalk.blue(apiKey));

// General
// ---------------------------------------------------
program.version("0.0.1").description("MovieDb database using CLI");

// Commands
//---------------------------------------------------
program
  .command("get-persons")
  .description("Make a network request to fetch most popular persons")
  .requiredOption("--page <num>", "The page of persons data results to fetch")
  .requiredOption("-p, --popular", "Fetch the popular persons")
  .action((options) => {
    console.log(chalk.yellow.bold("Get persons at page: "), options.page);
    getPersons(options.page).then((result) => {
      console.log(result.results[0].name);
    });
  });

program
  .command("get-person")
  .description("Make a network request to fetch the data of a single person")
  .action(function handleAction() {
    console.log("hello-world");
  });

program
  .command("get-movies")
  .description("Make a network request to fetch movies")
  .action(function handleAction() {
    console.log("hello-world");
  });

program
  .command("get-movie")
  .description("Make a network request to fetch the data of a single person")
  .action(function handleAction() {
    console.log("hello-world");
  });

// error on unknown commands

program.parse(process.argv);
