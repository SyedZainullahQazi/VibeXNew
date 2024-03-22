import axios from "axios";

const CatalogueCommentAdd_API = async (jwtToken,catalogueId,comment,userId) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwtToken}`, 
    },
  };
  try {
    console.log("qaziqaziqaziqaziqaziqaziqazi");
    console.log(userId);
    console.log("qaziqaziqaziqaziqaziqaziqazi");
    const response = await axios.post(`${import.meta.env.VITE_SERVER}/api/catalogue/addComment`,{catalogueId ,comment,userId},config)
    console.log(data);
    console.log(response.data);
    return response.data;
  }
  catch (error) {
    console.error('Error:', error);
  };
}


const CatalogueCommentGet_API=async (jwtToken,catalogueId)=>{
  const config = {
    headers: {
      'Authorization': `Bearer ${jwtToken}`, 
    },
  };
  console.log(catalogueId);
  try {
    const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/catalogue/getComments/${catalogueId}`, config);
    console.log(response.data);
    return response.data;
  }
  catch (error) {
    console.error('Error:', error);
  }
}
export {CatalogueCommentAdd_API,CatalogueCommentGet_API};