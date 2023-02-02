// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import type { GeneratedStyles } from '../../../utils/types'
import button from '../../shared/generated/button.module'

export default {
  iconBtnBase: {
    ...button.pandoBtn,
  },
  iconBtntnDefaultBorder: {
    ...button.pandoBtnBorder,
  },
  iconBtnDefaultRadius: {
    ...button.pandoBtnRadius,
  },
  actionIconButton: {
    backgroundColor: 'var(--ps-action-background)',
    color: 'var(--ps-action-text)',
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--ps-action-background-hover)',
    },
    '&:active:not(:disabled)': {
      backgroundColor: 'var(--ps-action-background-active)',
    },
  },
  defaultIconButton: {
    backgroundColor: 'var(--ps-background)',
    color: 'var(--ps-text)',
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--ps-background-hover)',
    },
    '&:active:not(:disabled)': {
      backgroundColor: 'var(--ps-background-active)',
    },
  },
  squareIconButton: {
    ...button.pandoBtn,
    ...button.pandoBtnBorder,
    ...button.pandoBtnRadius,
    borderRadius: '6px',
  },
  roundIconButton: {
    ...button.pandoBtn,
    ...button.pandoBtnBorder,
    borderRadius: '50%',
  },
  textIconButton: {
    ...button.pandoBtn,
    ...button.pandoBtnBorder,
    ...button.pandoBtnRadius,
    backgroundColor: 'transparent',
    color: 'var(--ps-action-text-inverse)',
    transition: 'transform 150ms ease-in-out',
    '&:hover:not(:disabled)': {
      // @ts-ignore
      ...button.pandoBtn['&:hover:not(:disabled)'],
      // @ts-ignore
      ...button.pandoBtnBorder['&:hover:not(:disabled)'],
      // @ts-ignore
      ...button.pandoBtnRadius['&:hover:not(:disabled)'],
      backgroundColor: 'transparent',
    },
  },
  mIconButton: {
    height: '2rem',
    minWidth: 'initial',
    width: '2rem',
  },
  lIconButton: {
    height: '3rem',
    minWidth: 'initial',
    width: '3rem',
  },
} satisfies GeneratedStyles
