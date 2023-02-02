// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import type { GeneratedStyles } from '../../../utils/types'
import states from '.././generated/states.module'

export default {
  pandoInput: {
    ...states.pandoDefaultStates,
    appearance: 'none',
    background: 'inherit',
    borderImage: 'initial',
    borderRadius: '6px',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: 'var(--ps-text-strong)',
    fontFamily: 'inherit',
    minWidth: '0',
    outline: 'transparent solid 2px',
    outlineOffset: '2px',
    paddingInlineEnd: '2.75rem',
    position: 'relative',
    transitionDuration: '150ms',
    transitionProperty: 'box-shadow, opacity, transform',
    width: '100%',
    '&::placeholder': {
      // @ts-ignore
      ...states.pandoDefaultStates['&::placeholder'],
      color: 'var(--ps-text-weak)',
      opacity: '1',
    },
    '&:disabled': {
      // @ts-ignore
      ...states.pandoDefaultStates['&:disabled'],
      background: 'var(--ps-background)',
      borderColor: 'var(--ps-background)',
    },
    "&:is(:disabled, [dataReadonly='true'])": {
      // @ts-ignore
      ...states.pandoDefaultStates["&:is(:disabled, [dataReadonly='true'])"],
      cursor: 'not-allowed',
    },
    "&:not(:disabled, [dataReadonly='true']):hover": {
      // @ts-ignore
      ...states.pandoDefaultStates[
        "&:not(:disabled, [dataReadonly='true']):hover"
      ],
      boxShadow: 'var(--ps-border-strong) 0 0 0 1px',
    },
    "&[dataInvalid='true']": {
      // @ts-ignore
      ...states.pandoDefaultStates["&[dataInvalid='true']"],
      borderColor: 'var(--ps-danger-border)',
      boxShadow: 'var(--ps-danger-border) 0 0 0 1px',
    },
  },
  pandoInputBorderColor: {
    borderColor: 'var(--ps-action-border)',
  },
  pandoInputPaddingStart: {
    paddingInlineStart: '1rem',
  },
} satisfies GeneratedStyles
