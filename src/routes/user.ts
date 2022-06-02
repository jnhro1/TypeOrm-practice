
import { Router } from 'express';
// import UserController from '../app/controllers/UserController';

const router = Router();

// Get all users
router.get('/', (req, res) => {
  res.send("hello")
});
// router.post('/', UserController.addNew);

export default router;