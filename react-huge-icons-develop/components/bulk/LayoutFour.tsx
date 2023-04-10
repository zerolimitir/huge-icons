import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLayoutFour = (
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
        <path fill='currentColor' d='M6 22a4 4 0 0 1-4-4v-6h10v10H6Z' />
        <path fill='currentColor' d='M18 22a4 4 0 0 0 4-4v-6H12v10h6Z' opacity={0.4} />
        <path fill='currentColor' d='M18 2a4 4 0 0 1 4 4v6H12V2h6Z' />
        <path fill='currentColor' d='M6 2a4 4 0 0 0-4 4v6h10V2H6Z' opacity={0.4} />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutFour);
export default ForwardRef;
