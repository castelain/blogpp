import { User } from 'shared/models/user';
import ObjectId from 'bson-objectid';

export interface Post {
  title: string;
  content: string;
  _id: string;
  author: User;
  comments: Comment[];
}
