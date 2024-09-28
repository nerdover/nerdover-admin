import { ToolType } from './tool-type';

type ToolInfo = {
  type: ToolType;
  icon: string;
};

export const Tools: ToolInfo[] = [
  {
    type: ToolType.Paragraph,
    icon: 'text_fields',
  },
  {
    type: ToolType.Image,
    icon: 'image',
  },
  {
    type: ToolType.Codeblock,
    icon: 'code',
  }
];
