import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** Date custom scalar type */
  Date: any,
};



export type Auth = {
   __typename?: 'Auth',
  /** JWT Bearer token */
  token: Scalars['String'],
  user: User,
};

export type Comment = {
   __typename?: 'Comment',
  id: Scalars['String'],
  createdAt: Scalars['Date'],
  text: Scalars['String'],
  author: Profile,
  post: Post,
};

export type CreateCommentInput = {
  postId: Scalars['String'],
  text: Scalars['String'],
};

export type CreatePostInput = {
  text: Scalars['String'],
};

export type CreateUserInput = {
  username: Scalars['String'],
  email: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  password: Scalars['String'],
};


export type LoginInput = {
  email: Scalars['String'],
  password: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createUser: User,
  updateUser: User,
  updateUserPassword: User,
  deleteUser: Scalars['Boolean'],
  register: Auth,
  login: Auth,
  createComment: Comment,
  deleteComment: Comment,
  createPost: Post,
  deletePost: Post,
};


export type MutationCreateUserArgs = {
  data: CreateUserInput
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput,
  id: Scalars['String']
};


export type MutationUpdateUserPasswordArgs = {
  data: UpdateUserPasswordInput,
  id: Scalars['String']
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']
};


export type MutationRegisterArgs = {
  data: RegisterInput
};


export type MutationLoginArgs = {
  data: LoginInput
};


export type MutationCreateCommentArgs = {
  data: CreateCommentInput
};


export type MutationDeleteCommentArgs = {
  id: Scalars['String']
};


export type MutationCreatePostArgs = {
  data: CreatePostInput
};


export type MutationDeletePostArgs = {
  id: Scalars['String']
};

export type Post = {
   __typename?: 'Post',
  id: Scalars['String'],
  createdAt: Scalars['Date'],
  text: Scalars['String'],
  author: Profile,
  commentCount: Scalars['Float'],
  commentedBy?: Maybe<Array<Profile>>,
  comments: Array<Comment>,
};

export type Profile = {
   __typename?: 'Profile',
  id: Scalars['String'],
  createdAt: Scalars['Date'],
  username?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  bio?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  posts?: Maybe<Array<Post>>,
};

export type Query = {
   __typename?: 'Query',
  hello: Scalars['String'],
  uptime: Scalars['Float'],
  me: User,
  users: Array<User>,
  user: User,
  comments: Array<Comment>,
  posts: Array<Post>,
  userPosts: Array<Post>,
  post: Post,
  profiles: Array<Profile>,
  profile: Profile,
};


export type QueryHelloArgs = {
  name: Scalars['String']
};


export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  query?: Maybe<Scalars['String']>
};


export type QueryUserArgs = {
  id: Scalars['String']
};


export type QueryCommentsArgs = {
  postId: Scalars['String']
};


export type QueryUserPostsArgs = {
  userId: Scalars['String']
};


export type QueryPostArgs = {
  id: Scalars['String']
};


export type QueryProfileArgs = {
  username: Scalars['String']
};

export type RegisterInput = {
  username: Scalars['String'],
  email: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  password: Scalars['String'],
};

/** User role */
export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type UpdateUserInput = {
  username: Scalars['String'],
  email: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
};

export type UpdateUserPasswordInput = {
  password: Scalars['String'],
};

export type User = {
   __typename?: 'User',
  id: Scalars['String'],
  createdAt: Scalars['Date'],
  updatedAt: Scalars['Date'],
  email: Scalars['String'],
  username?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  role: Role,
};

export type UserDetailsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'username' | 'avatar' | 'email'>
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & UserDetailsFragment
  ) }
);

export type RegisterMutationVariables = {
  data: RegisterInput
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'Auth' }
    & Pick<Auth, 'token'>
  ) }
);

export type LoginMutationVariables = {
  data: LoginInput
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'Auth' }
    & Pick<Auth, 'token'>
  ) }
);

export type AuthorDetailsFragment = (
  { __typename?: 'Profile' }
  & Pick<Profile, 'id' | 'username' | 'avatar' | 'name'>
);

export type PostDetailsFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'text' | 'createdAt' | 'commentCount'>
  & { author: (
    { __typename?: 'Profile' }
    & AuthorDetailsFragment
  ) }
);

export type CommentDetailsFragment = (
  { __typename?: 'Comment' }
  & Pick<Comment, 'id' | 'text' | 'createdAt'>
  & { author: (
    { __typename?: 'Profile' }
    & AuthorDetailsFragment
  ) }
);

export type PostsQueryVariables = {};


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & PostDetailsFragment
  )> }
);

export type UserPostsQueryVariables = {
  userId: Scalars['String']
};


export type UserPostsQuery = (
  { __typename?: 'Query' }
  & { userPosts: Array<(
    { __typename?: 'Post' }
    & PostDetailsFragment
  )> }
);

export type PostQueryVariables = {
  id: Scalars['String']
};


export type PostQuery = (
  { __typename?: 'Query' }
  & { post: (
    { __typename?: 'Post' }
    & { comments: Array<(
      { __typename?: 'Comment' }
      & CommentDetailsFragment
    )> }
    & PostDetailsFragment
  ) }
);

export type CommentsQueryVariables = {
  postId: Scalars['String']
};


export type CommentsQuery = (
  { __typename?: 'Query' }
  & { comments: Array<(
    { __typename?: 'Comment' }
    & CommentDetailsFragment
  )> }
);

export type CreatePostMutationVariables = {
  data: CreatePostInput
};


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'Post' }
    & PostDetailsFragment
  ) }
);

export type CreateCommentMutationVariables = {
  data: CreateCommentInput
};


export type CreateCommentMutation = (
  { __typename?: 'Mutation' }
  & { createComment: (
    { __typename?: 'Comment' }
    & CommentDetailsFragment
  ) }
);

export type ProfileDetailsFragment = (
  { __typename?: 'Profile' }
  & Pick<Profile, 'id' | 'username' | 'avatar' | 'name' | 'bio' | 'location'>
);

export type ProfilesQueryVariables = {};


export type ProfilesQuery = (
  { __typename?: 'Query' }
  & { profiles: Array<(
    { __typename?: 'Profile' }
    & ProfileDetailsFragment
  )> }
);

export type ProfileQueryVariables = {
  username: Scalars['String']
};


export type ProfileQuery = (
  { __typename?: 'Query' }
  & { profile: (
    { __typename?: 'Profile' }
    & { posts: Maybe<Array<(
      { __typename?: 'Post' }
      & PostDetailsFragment
    )>> }
    & ProfileDetailsFragment
  ) }
);

export const UserDetailsFragmentDoc = gql`
    fragment userDetails on User {
  id
  name
  username
  avatar
  email
}
    `;
export const AuthorDetailsFragmentDoc = gql`
    fragment authorDetails on Profile {
  id
  username
  avatar
  name
}
    `;
export const PostDetailsFragmentDoc = gql`
    fragment postDetails on Post {
  id
  text
  createdAt
  commentCount
  author {
    ...authorDetails
  }
}
    ${AuthorDetailsFragmentDoc}`;
export const CommentDetailsFragmentDoc = gql`
    fragment commentDetails on Comment {
  id
  text
  createdAt
  author {
    ...authorDetails
  }
}
    ${AuthorDetailsFragmentDoc}`;
export const ProfileDetailsFragmentDoc = gql`
    fragment profileDetails on Profile {
  id
  username
  avatar
  name
  bio
  location
}
    `;
export const MeDocument = gql`
    query me {
  me {
    ...userDetails
  }
}
    ${UserDetailsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
    document = MeDocument;
    
  }
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
    document = RegisterDocument;
    
  }
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
  }
export const PostsDocument = gql`
    query posts {
  posts {
    ...postDetails
  }
}
    ${PostDetailsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PostsGQL extends Apollo.Query<PostsQuery, PostsQueryVariables> {
    document = PostsDocument;
    
  }
export const UserPostsDocument = gql`
    query userPosts($userId: String!) {
  userPosts(userId: $userId) {
    ...postDetails
  }
}
    ${PostDetailsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UserPostsGQL extends Apollo.Query<UserPostsQuery, UserPostsQueryVariables> {
    document = UserPostsDocument;
    
  }
export const PostDocument = gql`
    query post($id: String!) {
  post(id: $id) {
    ...postDetails
    comments {
      ...commentDetails
    }
  }
}
    ${PostDetailsFragmentDoc}
${CommentDetailsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PostGQL extends Apollo.Query<PostQuery, PostQueryVariables> {
    document = PostDocument;
    
  }
export const CommentsDocument = gql`
    query comments($postId: String!) {
  comments(postId: $postId) {
    ...commentDetails
  }
}
    ${CommentDetailsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CommentsGQL extends Apollo.Query<CommentsQuery, CommentsQueryVariables> {
    document = CommentsDocument;
    
  }
export const CreatePostDocument = gql`
    mutation createPost($data: CreatePostInput!) {
  createPost(data: $data) {
    ...postDetails
  }
}
    ${PostDetailsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePostGQL extends Apollo.Mutation<CreatePostMutation, CreatePostMutationVariables> {
    document = CreatePostDocument;
    
  }
export const CreateCommentDocument = gql`
    mutation createComment($data: CreateCommentInput!) {
  createComment(data: $data) {
    ...commentDetails
  }
}
    ${CommentDetailsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateCommentGQL extends Apollo.Mutation<CreateCommentMutation, CreateCommentMutationVariables> {
    document = CreateCommentDocument;
    
  }
export const ProfilesDocument = gql`
    query profiles {
  profiles {
    ...profileDetails
  }
}
    ${ProfileDetailsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ProfilesGQL extends Apollo.Query<ProfilesQuery, ProfilesQueryVariables> {
    document = ProfilesDocument;
    
  }
export const ProfileDocument = gql`
    query profile($username: String!) {
  profile(username: $username) {
    ...profileDetails
    posts {
      ...postDetails
    }
  }
}
    ${ProfileDetailsFragmentDoc}
${PostDetailsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ProfileGQL extends Apollo.Query<ProfileQuery, ProfileQueryVariables> {
    document = ProfileDocument;
    
  }