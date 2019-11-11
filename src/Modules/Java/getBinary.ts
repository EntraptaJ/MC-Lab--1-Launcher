// Lab/Lab#1/src/Modules/Java/getBinary.ts
import glob from 'globby';
import { javaFolder } from './JavaFolder';
import { resolve } from 'path';

export async function getJavaBinary(): Promise<string> {
  const path = await glob(`${javaFolder}/**/bin/java`);
  return resolve(path[0]);
}
