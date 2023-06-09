import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBatteryHorizontalSavingMode = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M3.58 6.047c-.721.138-1.381.801-1.536 1.545-.062.297-.062 8.519 0 8.816.157.75.798 1.391 1.548 1.548.3.062 14.516.062 14.816 0a2.062 2.062 0 0 0 1.548-1.548c.062-.297.062-8.519 0-8.816-.159-.762-.818-1.411-1.573-1.549-.307-.056-14.508-.052-14.803.004m7.825 2.334c.08.051.188.162.24.246.094.151.095.169.108 1.38l.012 1.228 1.228.012c1.211.013 1.229.014 1.38.108.242.151.36.363.36.648 0 .2-.019.267-.117.406-.231.329-.234.329-1.623.343l-1.228.012-.012 1.235-.013 1.234-.121.172c-.166.237-.346.334-.619.334s-.453-.097-.619-.334l-.121-.172-.013-1.234-.012-1.235-1.228-.012c-1.389-.014-1.392-.014-1.623-.343-.098-.138-.117-.206-.117-.402a.7.7 0 0 1 .345-.64l.162-.107 1.23-.013 1.231-.012.012-1.228c.013-1.203.015-1.23.106-1.376.233-.375.691-.484 1.052-.25m10.406.897a.883.883 0 0 0-.481.374c-.064.117-.071.318-.081 2.259-.008 1.491.002 2.181.034 2.298a.809.809 0 0 0 .192.316.742.742 0 0 0 1.245-.326c.028-.104.039-.878.031-2.288-.011-2.065-.014-2.135-.093-2.27a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBatteryHorizontalSavingMode);
export default ForwardRef;
