import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMenuCircleHorizontal = (
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
        <circle
            cx={16.75}
            cy={12.25}
            r={1.25}
            fill='currentColor'
            transform='rotate(90 16.75 12.25)'
        />
        <circle
            cx={11.75}
            cy={12.25}
            r={1.25}
            fill='currentColor'
            transform='rotate(90 11.75 12.25)'
        />
        <circle
            cx={6.75}
            cy={12.25}
            r={1.25}
            fill='currentColor'
            transform='rotate(90 6.75 12.25)'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMenuCircleHorizontal);
export default ForwardRef;
