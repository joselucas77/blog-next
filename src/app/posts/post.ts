export type PostID = number;

export type PostData = {
  id: PostID;
  attributes: PostAttributesData;
};

export type PostAttributesData = {
  title: string;
  content: PostContent[];
  slug: string;
  cover: PostCover;
  author: PostAuthor;
  category: PostCategory;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type PostContent = {
  type: string;
  children: PostText[];
};

export type PostText = {
  text: string;
  type: string;
};

export type PostAuthor = {
  data: {
    id: PostID;
    attributes: AuthorAttributesData;
  };
};

export type AuthorAttributesData = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type PostCategory = {
  data: {
    id: PostID;
    attributes: CategoryAttributesData;
  };
};

export type CategoryAttributesData = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type PostCover = {
  data: {
    id: PostID;
    attributes: PostCoverAttributes;
  };
};

export type PostCoverAttributes = {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    large: PostCoverFormat;
    medium: PostCoverFormat;
  };
  previewUrl: null;
  provider: string;
  createdAt: string;
  updatedAt: string;
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};
