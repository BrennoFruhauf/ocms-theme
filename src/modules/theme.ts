import generatePalette from './palette'
import scheme from './scheme'

/**
 * Generates a theme.
 *
 * @param t `Object` with data to create theme.
 * @returns `JSON` with theme created.
 */
const theme = (t: Theme): Scheme => {
	const colors = generatePalette(t)
	return Object.assign(
		{ name: t.name, type: t.scheme },
		scheme(colors, t.override)
	)
}

export default theme