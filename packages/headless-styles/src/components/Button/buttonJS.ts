import { createJSProps, transformStyles } from '../../utils/helpers'
import {
  createButtonProps,
  getButtonClasses,
  getDefaultButtonOptions,
} from './shared'
import type { ButtonOptions } from './types'
import styles from './generated/buttonCSS.module'

type StylesKey = keyof typeof styles

export function getJSButtonProps(options?: ButtonOptions) {
  const defaultOptions = getDefaultButtonOptions(options)
  const props = createButtonProps(defaultOptions)
  const { sentimentClass, sizeClass, usageClass } =
    getButtonClasses(defaultOptions)
  const btnStyles = {
    ...styles.btnBase,
    ...styles[sentimentClass as StylesKey],
    ...styles[usageClass as StylesKey],
    ...styles[sizeClass as StylesKey],
  }
  const iconProps = defaultOptions.icon && {
    ...props.iconOptions,
    icon: {
      ...props.icon,
      ...createJSProps(transformStyles(styles.btnIcon), styles.btnIcon),
    },
  }

  return {
    ...props,
    ...iconProps,
    button: {
      ...props.button,
      ...createJSProps(transformStyles(btnStyles), btnStyles),
    },
  }
}
