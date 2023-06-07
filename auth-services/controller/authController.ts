import { Request, Response } from "express";
import { iUser } from "../utils/interface";
import crypto from "crypto";

let data: iUser[] = [];
export const register = (req: Request, res: Response): Response => {
  try {
    const ID = crypto.randomUUID();
    const { name, email, password } = req.body;
    const newUser = { id: ID, name, email, password };
    data.push(newUser);

    return res.status(200).json({
      message: "created successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Not found",
      data: error,
    });
  }
};
export const getUsers = (req: Request, res: Response): Response => {
  try {
    return res.status(200).json({
      message: "view users",
      data,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Not found",
      data: error,
    });
  }
};
export const singleUsers = (req: Request, res: Response): Response => {
  try {
    const { id } = req.params;
    const singleUser = data.filter((el: iUser) => {
      return el.id === id;
    });
    return res.status(200).json({
      message: "view users",
      data,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Not found",
      data: error,
    });
  }
};
export const loginUser = (req: Request, res: Response): Response => {
  try {
    const { email, password } = req.body;
    data.filter((el: iUser) => {
      return el.email === email;
    });

    return res.status(200).json({
      message: "view users",
      data,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Not found",
      data: error,
    });
  }
};
