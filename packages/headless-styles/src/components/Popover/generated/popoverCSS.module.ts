// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import type { GeneratedStyles } from '../../../utils/types'
import tooltip from '../../shared/generated/tooltip.module'

export default {
  popoverWrapper: {
    ...tooltip.pandoTooltipWrapper,
  },
  popover: {
    ...tooltip.pandoTooltipBase,
    animationDelay: '100ms',
    maxWidth: 'none',
    minWidth: '17.5em',
    textAlign: 'start',
    zIndex: '1500',
    "&[dataExpanded='true']": {
      // @ts-ignore
      ...tooltip.pandoTooltipBase["&[dataExpanded='true']"],
      display: 'inline-block',
    },
  },
  popoverContent: {
    ...tooltip.pandoTooltipContentBase,
    backgroundColor: 'var(--ps-surface-weak)',
    borderColor: 'var(--ps-border)',
    borderRadius: '6px',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow:
      '0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)',
    color: 'var(--ps-text)',
    fontFamily: 'inherit',
    fontSize: '0.75rem',
    fontVariationSettings: "'wght' 400",
    fontWeight: '400',
    lineHeight: '1.25',
    padding: '1rem 2.5rem 1rem 1rem',
    '&::after': {
      // @ts-ignore
      ...tooltip.pandoTooltipContentBase['&::after'],
      content: "''",
      backgroundColor: 'var(--ps-surface-weak)',
      borderColor: 'transparent transparent var(--ps-border) var(--ps-border)',
      borderStyle: 'solid',
      borderWidth: '1px',
      display: 'block',
      fontSize: '0.75rem',
      height: '1em',
      position: 'absolute',
      width: '1em',
      zIndex: '1500',
    },
  },
  popoverContentWithHeading: {
    ...tooltip.pandoTooltipContentBase,
    backgroundColor: 'var(--ps-surface-weak)',
    borderColor: 'var(--ps-border)',
    borderRadius: '6px',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow:
      '0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)',
    color: 'var(--ps-text)',
    fontFamily: 'inherit',
    fontSize: '0.75rem',
    fontVariationSettings: "'wght' 400",
    fontWeight: '400',
    lineHeight: '1.25',
    padding: '1rem 2.5rem 1rem 1rem',
    '&::after': {
      // @ts-ignore
      ...tooltip.pandoTooltipContentBase['&::after'],
      content: "''",
      backgroundColor: 'var(--ps-surface-weak)',
      borderColor: 'transparent transparent var(--ps-border) var(--ps-border)',
      borderStyle: 'solid',
      borderWidth: '1px',
      display: 'block',
      fontSize: '0.75rem',
      height: '1em',
      position: 'absolute',
      width: '1em',
      zIndex: '1500',
    },
    paddingTop: '0',
  },
  popoverHeader: {
    alignItems: 'center',
    display: 'flex',
    fontVariationSettings: "'wght' 700",
    fontWeight: '700',
    minHeight: '2.5rem',
    whiteSpace: 'nowrap',
  },
  popoverCloseButtonWrapper: {
    alignItems: 'center',
    display: 'flex',
    height: '2.5rem',
    position: 'absolute',
    right: '0',
    top: '0',
    zIndex: '1501',
  },
  popoverTrigger: {
    ...tooltip.pandoTooltipTrigger,
    appearance: 'none',
    background: 'none',
    border: 'none',
    borderRadius: '6px',
    color: 'var(--ps-text)',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    outline: 'none',
    "&[ariaExpanded='true'] + [dataPopover]": {
      // @ts-ignore
      ...tooltip.pandoTooltipTrigger["&[ariaExpanded='true'] + [dataPopover]"],
      display: 'inline-block',
    },
  },
} satisfies GeneratedStyles
