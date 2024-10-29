#!/usr/bin/env node

const { Command } = require('commander');
const transform = require('./commands/transform');

const program = new Command();

program.name('vptp-parser').description('Visual Paradigm test plan parser');

program
  .command('transform')
  .argument('<inputFile>', 'Input file path')
  .option('-o, --output <outputFolder>', 'Output folder path', 'out')
  .option(
    '-f, --format <format>',
    'Format to transform requirements into',
    'html'
  )
  .action(transform);

program.parse();
