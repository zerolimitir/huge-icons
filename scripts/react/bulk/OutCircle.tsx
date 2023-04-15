import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgOutCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.807 7.289c-.375.08-.605.481-.518.901.038.18.112.262 1.464 1.62l1.424 1.43h-6.15c-5.46 0-6.166.007-6.298.062a.748.748 0 0 0 0 1.396c.132.055.838.062 6.299.062h6.151l-1.425 1.43c-1.531 1.536-1.544 1.554-1.503 1.915a.739.739 0 0 0 1.049.578c.108-.05.842-.759 2.266-2.189 2.02-2.028 2.107-2.122 2.145-2.304a.935.935 0 0 0 0-.38c-.038-.182-.124-.275-2.144-2.3-1.157-1.16-2.159-2.134-2.226-2.164a.792.792 0 0 0-.534-.057'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOutCircle);
export default ForwardRef;
