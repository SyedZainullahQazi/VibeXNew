import axios from "axios";

const getOneCatalogue_API = async (jwtToken, catalogueId) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwtToken}`, 
    },
  };
  try {
    const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/catalogue/get/${catalogueId}`, config);
    console.log(response.data);
    return response.data;
  }
  catch (error) {
    console.error('Error:', error);
  }
};

export default getOneCatalogue_API;
