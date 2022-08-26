import * as path from "path";

const MAIN_ROOT: string = __dirname;
export const MACOS_EXTRA_PATH_DEV: string = path.join(MAIN_ROOT, '../../src/extraResources');
export const MACOS_EXTRA_PATH_PROD: string = path.join(MAIN_ROOT, '../../../extraResources');