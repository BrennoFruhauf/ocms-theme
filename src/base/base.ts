import colors from "./colors"
import tokenColors from "./tokenColors"

/**
 * Defines the base color scheme.
 *
 * @return `Object` with the base color scheme.
 */
const base = (): Scheme => {
	return Object.assign(
		colors(),
		tokenColors()
	)
}

export default base