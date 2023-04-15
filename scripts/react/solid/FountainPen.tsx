import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFountainPen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.58 2.047C5.707 2.214 5 3.087 5 4c0 .92.69 1.768 1.592 1.956.298.062 10.518.062 10.816 0C18.31 5.768 19 4.92 19 4c0-.932-.71-1.791-1.617-1.957-.306-.055-10.509-.052-10.803.004M6.496 7.54a367.56 367.56 0 0 0-1.389 4.34c-.068.242-.084.416-.084.9-.001.533.011.644.11 1 .127.46.359.965.573 1.246a954.05 954.05 0 0 0 5.44 6.613l.094.099-.001-3.939-.001-3.939-.243-.139c-1.291-.74-1.31-2.651-.035-3.419.351-.211.608-.28 1.04-.28.432 0 .689.069 1.04.28 1.275.768 1.256 2.679-.035 3.419l-.243.139-.001 3.939c-.001 3.871 0 3.937.075 3.86.17-.176 5.391-6.534 5.518-6.719.357-.521.596-1.26.633-1.96.039-.743.047-.712-.879-3.571l-.612-1.892-5.493-.008c-3.634-.006-5.498.005-5.507.031'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFountainPen);
export default ForwardRef;
