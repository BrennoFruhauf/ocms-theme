import { mkdir, writeFile } from 'fs/promises'
import themes from './modules/themes'
import path from 'path'

/**
 * Creates directories and writes the theme object as JSON to a specified file path based on its name and type properties.
 * 
 * @param theme Theme data.
*/
const builder = (theme: Scheme) => {
	const file = `./themes/${theme.type}/${theme.name}.json`

	mkdir(path.dirname(file), { recursive: true })
		.then(() => writeFile(file, JSON.stringify(theme)))
}

/**
 * Asynchronously processes an array of themes using the themeBuilder function.
 * 
 * @returns a Promise that resolves when all operations are completed
 */
const build = () => Promise.all(themes.map(builder))

mkdir('./themes', { recursive: true }).then(build).catch(() => process.exit(1))