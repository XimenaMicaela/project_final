const crypto = require("crypto")

const secret = crypto.randomBytes(32).toString("hex")

console.log(secret) // 34f70117374d447c0f81de5df16fc21b2e78b23af274e86e2c8f789b3ca4e9ad