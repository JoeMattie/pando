import { menu } from '../../../../shared/src/featureFlags'
import { createClassProp } from '../../utils/helpers'
import { getDefaultMenuOptions, createMenuProps } from './shared'
import type { MenuOptions } from './types'
import styles from './menuCSS.module.css'

export function UNSAFE_getMenuProps(options?: MenuOptions) {
  const defaultOptions = getDefaultMenuOptions(options)
  const props = createMenuProps(defaultOptions)

  if (!menu) {
    return props
  }

  return {
    ...props,
    menu: {
      ...props.menu,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `ps-menu ${styles.menu}`,
        svelteClass: `menu`,
      }),
    },
    menuListItem: {
      ...props.menuListItem,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `ps-menu-listItem ${styles.menuListItem}`,
        svelteClass: `menuListItem`,
      }),
    },
    menuItem: {
      ...props.menuItem,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `ps-menu-item ${styles.menuItem}`,
        svelteClass: `menuItem`,
      }),
    },
  }
}
