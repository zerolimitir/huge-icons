import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMenuCircleVertical = (
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
        <circle cx={12.25} cy={7.25} r={1.25} fill='currentColor' />
        <circle cx={12.25} cy={12.25} r={1.25} fill='currentColor' />
        <circle cx={12.25} cy={17.25} r={1.25} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgMenuCircleVertical);
export default ForwardRef;
