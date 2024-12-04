export interface User {
  username: string;
  email: string;
  password: string;
  name: string;
  profilePicture: string;
  bio: string;
  gender: string;
  followersCount: number;
  followingCount: number;
  isActive: boolean;
  posts: any[];
  comments: any[];
  likes: any[];
  following: any[];
  followers: any[];
}
