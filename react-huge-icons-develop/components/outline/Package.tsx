import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackage = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <rect width={12} height={12} x={6} y={6} stroke='currentColor' strokeWidth={1.5} rx={3} />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 2v1m0 18v1m8.071-18.071-.707.707M4.636 19.364l-.707.707M22 12h-1m-8-3h-2m-8 3H2m18.071 8.071-.707-.707M4.636 4.636l-.707-.707'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackage);
export default ForwardRef;
