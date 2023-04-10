import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSwitch = (
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
        <path fill='currentColor' d='M16 6a6 6 0 0 1 0 12H8A6 6 0 0 1 8 6h8Z' opacity={0.4} />
        <path fill='currentColor' d='M22 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgSwitch);
export default ForwardRef;
