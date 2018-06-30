import { User } from 'shared/models/user';
import { Post } from 'shared/models/post';

export interface Comment {
  _id?: string;
  content: string;
  parent_post?: any;
  parent_comment?: any;
  sub_comments?: Comment[];
  author?: User;
}
