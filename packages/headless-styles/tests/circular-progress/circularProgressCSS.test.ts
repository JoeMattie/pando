import { getCircularProgressProps } from '../../src'

describe('CircularProgress CSS', () => {
  const baseClass = 'pando-circular-progress'
  const ariaLabel = 'circular progress test'
  const a11yProps = {
    'aria-label': ariaLabel,
    'aria-valuemax': 100,
    'aria-valuemin': 0,
    'aria-valuenow': 0,
    role: 'progressbar',
  }
  const result = {
    containerProps: {
      ...a11yProps,
      className: `${baseClass} base`,
    },
    svgBoxProps: {
      className: `${baseClass}-box mSize determinate`,
      viewBox: '0 0 100 100',
    },
    baseCircleProps: {
      className: `${baseClass}-base circle`,
      cx: '50',
      cy: '50',
      r: '42',
      strokeWidth: '12px',
    },
    nowCircleProps: {
      className: `${baseClass}-now circleNow determinate`,
      cx: '50',
      cy: '50',
      r: '42',
      strokeWidth: '12px',
      strokeDashoffset: '66',
      strokeDasharray: '0 264',
    },
    labelProps: {
      className: `${baseClass}-label text`,
      value: '0%',
    },
  }

  test('should accept an ariaLabel', () => {
    expect(getCircularProgressProps({ ariaLabel: 'test aria label' })).toEqual({
      ...result,
      containerProps: {
        ...result.containerProps,
        'aria-label': 'test aria label',
      },
    })
  })

  test('should accept a kind type', () => {
    expect(
      getCircularProgressProps({ ariaLabel: ariaLabel, kind: 'determinate' })
    ).toEqual(result)
    expect(
      getCircularProgressProps({ ariaLabel, kind: 'indeterminate' })
    ).toEqual({
      ...result,
      containerProps: {
        'aria-label': ariaLabel,
        role: 'status',
        className: `${baseClass} base`,
      },
      svgBoxProps: {
        ...result.svgBoxProps,
        className: `${baseClass}-box mSize indeterminate`,
      },
      nowCircleProps: {
        ...result.nowCircleProps,
        className: `${baseClass}-now circleNow indeterminate`,
      },
    })
  })

  test('should accept a xs size type', () => {
    expect(getCircularProgressProps({ ariaLabel, size: 'xs' })).toEqual({
      ...result,
      svgBoxProps: {
        ...result.svgBoxProps,
        className: `${baseClass}-box xsSize determinate`,
      },
    })
  })

  test('should accept a m size type', () => {
    expect(getCircularProgressProps({ ariaLabel, size: 'm' })).toEqual({
      ...result,
      svgBoxProps: {
        ...result.svgBoxProps,
        className: `${baseClass}-box mSize determinate`,
      },
    })
  })

  test('should accept a list of classNames', () => {
    expect(
      getCircularProgressProps({
        ariaLabel,
        classNames: ['test', 'test2'],
      })
    ).toEqual({
      ...result,
      containerProps: {
        ...result.containerProps,
        className: `${baseClass} base test test2`,
      },
    })
  })
})
