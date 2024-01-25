import chroma from 'chroma-js'
import merge from 'lodash.merge'
import base from '../base/base'

/**
 * Generates a scheme.
 *
 * @param colors A tuple containing arrays of colors.
 * @param override Overrides for default scheme values.
 * @returns `JSON` with color scheme created.
 */
const scheme = (colors: [string[], string[]], override: Scheme | null = null) => {
	const draft: Scheme = base()

	if (override != null) merge(draft, override)

	transform(draft, (value: Color) => colorize(colors, value))

	return draft;
}

/**
 * Colorization transformation.
 *
 * @param colors A tuple containing arrays of colors.
 * @param value Key value with color position and alpha.
 * @returns RRGGBBAA | RRGGBB color in the hex format.
 */
const colorize = (colors: [string[], string[]], value: Color) => chroma(colors[value.array][value.position]).alpha(value.alpha ?? 1).hex()

/**
 * Deep object transformer.
 *
 * @param object The object that the transformation function will be applied.
 * @param transformation The transformation function to be applied.
 * @returns `Object` transform applied.
 */
const transform = (object: Record<string, any>, transformation: Function) => {
	for (let key in object) {

		if (object[key] !== null && (typeof object[key] === 'object' && !object[key].hasOwnProperty('array'))) {
			object[key] = transform(object[key], transformation)
			continue
		}

		if (typeof object[key] !== 'object') continue
		object[key] = transformation.apply(this, [object[key]]) || object[key]
	}
	return object
}

export default scheme;