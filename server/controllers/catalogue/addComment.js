import CATALOGUE_MODEL from "../../models/catalogue.js";

const AddComment = async (req, res) => {
  try {
    const catalogueId=req?.body?.catalogueId;
    const comment=req?.body?.comment;
    const userId=req?.body?.userId;

    console.log("alialialialialialialiali");
    console.log(comment,catalogueId,userId);
    console.log("alialialialialialialiali");


    const catalogue = await CATALOGUE_MODEL.findOne({ _id: catalogueId });
    if (!catalogue) {
      return res.status(404).json({ error: 'Catalogue not found' });
    }
    const NewComment={
    commentText: comment,
    replies: [],
    likes: [],
    commentBy:userId,
    }

    catalogue.comments.push(NewComment);
    await catalogue.save();

    return res.status(200).json({message: "Retrived"});
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default AddComment;
