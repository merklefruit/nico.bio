import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string", // posts/evm-from-scratch
      resolve: (post) => `/articles/${post._raw.flattenedPath.split("/")[1]}`,
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the project",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the project",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the project",
      required: true,
    },
    skills: {
      type: "list",
      of: {
        type: "string",
      },
      description: "The skills used in the project",
      required: true,
    },
    link: {
      type: "string",
      description: "The link to the project",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (project) =>
        `/projects/${project._raw.flattenedPath.split("/")[1]}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project],
});
