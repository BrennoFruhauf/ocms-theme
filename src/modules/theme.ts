import scheme from './scheme'

/**
 * Generates a theme.
 *
 * @param t `Object` with data to create theme.
 * @returns `JSON` with theme created.
 */
const theme = (t: Theme): Scheme => {
	return Object.assign(
		{ name: t.name, type: t.scheme },
		scheme(t)
	)
}

export default theme