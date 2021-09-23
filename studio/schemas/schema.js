// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "mySchema",

  // Then proceed to concatenate our document types (just one, for now)
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      // This is the display name for the type
      title: "Lodash Method",

      // The identifier for this document type used in the api's
      name: "lodash_method",

      // Documents have the type 'document'. Your schema may describe types beyond documents
      // but let's get back to that later.
      type: "document",

      // Now we proceed to list the fields of our document
      fields: [
        {
          title: "Method Name", // The display name for this field
          name: "method_name", // The identifier for this field used in the api's
          type: "string", // The type of this field
        },
        {
          title: "Links",
          name: "links",
          type: "string",
        },
        {
          title: "Description",
          name: "description",
          type: "string",
        },
        {
          title: "Arguments",
          name: "arguments",
          type: "string",
        },
        {
          title: "Returns",
          name: "returns",
          type: "string",
        },
        {
          title: "Example",
          name: "example",
          type: "string",
        },
        {
          title: "Category",
          name: "category",
          type: "string",
        },

        {
          title: "Search Helpers",
          name: "search_helpers",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          title: "Featured On",
          name: "featured_on",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          title: "Related Methods",
          name: "related_methods",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          title: "Lodash Version",
          name: "lodash_version",
          type: "string",
        },
      ],
    },
  ]),
});
