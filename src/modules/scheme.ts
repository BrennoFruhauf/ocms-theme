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

	transform(draft, (key: string, value: Color) => colorize(colors, key, value))

	return draft;
}

/**
 * Colorization transformation.
 *
 * @param colors A tuple containing arrays of colors.
 * @param value Key value with color position and alpha.
 * @returns RRGGBBAA | RRGGBB color in the hex format.
 */
const colorize = (colors: [string[], string[]], key: string, value: Color) => {
	const color: string = keyToCheck.some(k => k === key) ? checkContrast(colors, value) : colors[value.array][value.position]
	return chroma(color).alpha(value.alpha ?? 1).hex()
}

/**
 * Array containing predefined keys related to check color contrast.
 *
 * @type `String[]`
 */
const keyToCheck: string[] = [
	'activityBarBadge.foreground',
	'statusBar.foreground',
	'menu.selectionForeground',
	'button.foreground',
	'inputOption.activeForeground',
	'badge.foreground',
	'terminalCursor.foreground',
	'notificationCenterHeader.foreground'
]

/**
 * Checks the contrast between two colors based on specific conditions.
 *
 * @param c A tuple containing two color arrays.
 * @param v Color information.
 * @returns `String` with color suitable contrast based on the conditions.
 */
const checkContrast = (c: [string[], string[]], v: Color): string => chroma.contrast(c[v.array][v.position], c[0][0]) < 2 ? c[1][0] : c[v.array][v.position]

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
		object[key] = transformation.apply(this, [key, object[key]]) || object[key]
	}
	return object
}

export default scheme;