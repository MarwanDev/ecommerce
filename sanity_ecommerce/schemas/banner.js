export default {
  name: "banenr",
  title: "Banenr",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "buttonText",
      title: "ButtonText",
      type: "string",
    },
    {
        name: 'product',
        title: 'Product',
        type: 'string',
    },
    {
        name: 'desc',
        title: 'Desc',
        type: 'string',
    },
    {
        name: 'smallText',
        title: 'SmallText',
        type: 'string',
    },
    {
        name: 'midText',
        title: 'Midtext',
        type: 'string',
    },
    {
        name: 'largeText1',
        title: 'Largetext1',
        type: 'string',
    },
    {
        name: 'largeText2',
        title: 'Largetext2',
        type: 'string',
    },
    {
        name: 'discount',
        title: 'Discount',
        type: 'string',
    },
    {
        name: 'saleTime',
        title: 'SaleTime',
        type: 'string',
    },
  ],
};
