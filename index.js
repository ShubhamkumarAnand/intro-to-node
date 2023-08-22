#!/usr/bin/env node
import fs from 'node:fs'

const note = process.argv[2];

const newNote = {
  note,
  id: Date.now(),
};

console.log(newNote);
