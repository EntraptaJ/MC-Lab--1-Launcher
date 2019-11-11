// Lab/Lab#1/src/Modules/Java/getJava.ts
import { install } from './JDK';
import { pathExists, mkdirp } from 'fs-extra';
import { javaFolder } from './JavaFolder';
import { getJavaBinary } from './getBinary';

export async function getJava(): Promise<string> {
  const exists = await pathExists(`${javaFolder}/jre`);
  if (!exists) {
    await mkdirp(javaFolder);
    await install(8, { type: 'jre' });
  }

  return getJavaBinary();
}
