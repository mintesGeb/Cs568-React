const express = require("express");
let jwt = require("jsonwebtoken");
const getDB = require("../utils/database").getDB;

const secret = "topSecret";

exports.login = async (req, res, next) => {
  try {
    const user = req.body;

    getDB()
      .collection("students")
      .findOne({ username: user.username, password: user.password })
      .then((data) => {
        if (data) {
          const token = jwt.sign(
            { username: data.username, role: data.role },
            secret
          );
          res.json({ token });
        } else {
          res.status(200).json({ error: "invalid username or password" });
        }
      });
  } catch (err) {
    next(err);
  }
};

exports.authorize = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    let token = authHeader.split(" ")[1];
    jwt.verify(token, secret, (err, user) => {
      if (err) {
        return res.status(403).json({ error: "forbidden" });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ error: "unauthorized" });
  }
};

exports.authorizeAdmin = (req, res, next) => {
  if (req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ error: "forbidden" });
  }
};
