import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgYen = (
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
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.55 2.4a.75.75 0 0 1 1.05.15l5.4 7.2 5.4-7.2a.75.75 0 0 1 1.2.9l-5.1 6.8H18a.75.75 0 1 1 0 1.5h-5.25v2.5H18a.75.75 0 1 1 0 1.5h-5.25V21a.75.75 0 1 1-1.5 0v-5.25H6a.75.75 0 1 1 0-1.5h5.25v-2.5H6a.75.75 0 1 1 0-1.5h4.5l-5.1-6.8a.75.75 0 0 1 .15-1.05Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgYen);
export default ForwardRef;
