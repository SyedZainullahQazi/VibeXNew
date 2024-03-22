import axios from "axios";

const getCommentBy_API = async (jwtToken, commentId) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${jwtToken}`, 
    },
  };
  console.log(commentId +"askbdaksndsakbdasbsab");
  try {
    const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/catalogue/getCommentBy/${commentId}`, config);
    console.log(response.data);
    return response.data;
  }
  catch (error) {
    console.error('Error:', error);
  }
};

export default getCommentBy_API;
