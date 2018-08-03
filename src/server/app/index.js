#!/usr/bin/env node

import express from "express"
import render from "./render"

const app = express()

require("dotenv").config()

// global midleware
app.use((req, res, next) => {
  // log
  const debugReq = require("debug")("app:req")
  debugReq(
    `${req.method} ${req.originalUrl} at ${new Date()
      .toISOString()
      .replace(/T/, " ")
      .replace(/\..+/, "")}`
  )
  next()
})

// routes
app.use("/", render)

export default app