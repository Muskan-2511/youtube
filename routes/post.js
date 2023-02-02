import express, { Router } from 'express';

import{ 
    addVideos,
    updateVideos,
    deleteVideos,
    getAllVideos,
    getMyVideos,
    addComment} from '../controller/post-controller.js';

const route = express.Router();
import auth from "../middleware/auth.js";

route.post('/uploadVideo',auth,addVideos);
route.post('/updateVideo/:id',auth,updateVideos);
route.post('/deleteVideo',auth,deleteVideos);
route.get('/getAllVideo',auth,getAllVideos);
route.post('/getMyVideo',auth, getMyVideos);
route.put('/addComment/:id',auth,addComment);

export default route;