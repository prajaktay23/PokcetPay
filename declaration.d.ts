// purpose: whenever you see an import like import MyIcon from './icon.svg', treat it as a React component that accepts SvgProps
// And TypeScript won’t complain — it knows .svg is a component.
declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
