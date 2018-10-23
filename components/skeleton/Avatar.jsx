import classNames from 'classnames'
import PropTypes from '../_util/vue-types'
import { initDefaultProps, getOptionProps } from '../_util/props-util'

const skeletonAvatarProps = {
  prefixCls: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small', 'default']),
  shape: PropTypes.oneOf(['circle', 'square']),
}

export const SkeletonAvatarProps = PropTypes.shape(skeletonAvatarProps)

const Avatar = {
  props: initDefaultProps(skeletonAvatarProps, {
    prefixCls: 'ant-skeleton-avatar',
    size: 'large',
  }),
  render () {
    const { prefixCls, size, shape } = getOptionProps(this)

    const sizeCls = classNames({
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-sm`]: size === 'small',
    })

    const shapeCls = classNames({
      [`${prefixCls}-circle`]: shape === 'circle',
      [`${prefixCls}-square`]: shape === 'square',
    })

    return (
      <span class={classNames(prefixCls, sizeCls, shapeCls)} />
    )
  },
}

export default Avatar