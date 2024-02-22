import { useState, useEffect } from "react";
import {
  getAllBikePosts,
  createBikePost,
  updateBikePost,
  deleteBikePost,
  getBikePostById,
  getBikePostByCategory,
  getBikePostsByPriceRange,
} from "../services/bikePostService";

const useBikePosts = () => {
  //Add user axios later on
  const [bikePosts, setBikePosts] = useState([]);

  const handleGetBikePosts = async () => {
    const data = await getAllBikePosts();
    console.log(data);
    setBikePosts(data);
  };

  const handleAddBikePost = (bikePost) => {
    createBikePost(bikePost).then((data) => setBikePosts([...bikePosts, data]));
  };

  const handleUpdateBikePost = (id, bikePost) => {
    updateBikePost(id, bikePost);
  };

  const handleDeleteBikePost = (id) => {
    deleteBikePost(id);
  };

  const handleGetBikePostById = async (id) => {
    const data = await getBikePostById(id);
    setBikePosts([data]);
  };

  const handleGetBikePostByCategory = (category) => {
    getBikePostByCategory(category).then((data) => setBikePosts(data));
  };

  const handleGetBikePostsByPriceRange = (minPrice, maxPrice) => {
    getBikePostsByPriceRange(minPrice, maxPrice).then((data) =>
      setBikePosts(data)
    );
  };

  return {
    bikePosts,
    handleGetBikePosts,
    handleAddBikePost,
    handleUpdateBikePost,
    handleDeleteBikePost,
    handleGetBikePostById,
    handleGetBikePostByCategory,
    handleGetBikePostsByPriceRange,
  };
};

export default useBikePosts;