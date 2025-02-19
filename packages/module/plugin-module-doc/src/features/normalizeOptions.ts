import type { Options } from '../types';

export const normalizeOptions = (options: Options): Required<Options> => {
  const {
    languages = ['zh'],
    doc = {},
    isProduction = process.env.NODE_ENV === 'production',
    appDir = process.cwd(),
    entries = {},
    previewMode = 'web',
    apiParseTool = 'react-docgen-typescript',
    parseToolOptions = {},
  } = options;
  return {
    languages,
    doc,
    isProduction,
    appDir,
    entries,
    previewMode,
    apiParseTool,
    parseToolOptions,
  };
};
