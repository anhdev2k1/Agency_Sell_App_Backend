import { ProductService } from "../services/product.service.js";

const GetProducts = async (req, res) => {
  try {
    const result = await ProductService.GetProducts()
    res.status(200).json({
        status: "Get all products successfully!!",
        data: result
    })
  } catch (error) {
    res.status(401).json(error);
  }
};
const GetProductById = async (req, res) => {
  try {
    const result = await ProductService.GetProductById(req.params.id)
    res.status(200).json({
        status: "Get product successfully!!",
        data: result
    })
  } catch (error) {
    res.status(401).json(error);
  }
};
const CreateProduct = async (req, res) => {
  try {
    const result = await ProductService.CreateProduct(req.body)
    res.status(200).json({
        status: "Create product successfully!!",
        data: result
    })
  } catch (error) {
    res.status(401).json(error);
  }
};
const UpdateProduct = async (req, res) => {
  try {
    const result = await ProductService.UpdateProduct(req.body)
    res.status(200).json({
        status: "Update product successfully!!",
        data: result
    })
  } catch (error) {
    res.status(401).json(error);
  }
};
const DeleteProduct = async (req, res) => {
  try {
    const result = await ProductService.DeleteProduct(req.params.id)
    res.status(200).json({
        status: "Delete product successfully!!",
        data: result
    })
  } catch (error) {
    res.status(401).json(error);
  }
};
export const ProductController = { GetProducts, GetProductById, CreateProduct, UpdateProduct, DeleteProduct };
