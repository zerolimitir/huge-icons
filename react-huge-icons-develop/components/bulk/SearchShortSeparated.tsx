import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSearchShortSeparated = (
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
            cx={11.5}
            cy={11.5}
            r={9.5}
            fill='currentColor'
            transform='rotate(-180 11.5 11.5)'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M19.47 19.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSearchShortSeparated);
export default ForwardRef;
