import { ShopService } from "../services/shop.service.js";

const CreateShop = async (req, res) => {
  try {
    const result = await ShopService.CreateShop(req.body);
    res.status(200).json({
      status: "Create Shop successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
const GetShop = async (req, res) => {
  try {
    const result = await ShopService.GetShop();
    res.status(200).json({
      status: "Create Shop successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
const GetShopById = async (req, res) => {
  try {
    const result = await ShopService.GetShopById(req.params.id);
    res.status(200).json({
      status: "Create Shop successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const UpdateShop = async (req, res) => {
  try {
    const result = await ShopService.UpdateShop(req.params.id);
    res.status(200).json({
      status: "Update Shop successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const DeleteShop = async (req, res) => {
  try {
    const result = await ShopService.DeleteShop(req.params.id);
    res.status(200).json({
      status: "Delete Shop successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
export const ShopController = { CreateShop, GetShop, GetShopById, UpdateShop, DeleteShop };
