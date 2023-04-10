import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgInformation = (
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
        <circle cx={12} cy={12} r={10} fill='currentColor' opacity={0.4} />
        <path fill='currentColor' d='M13 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M10.25 10a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-6.25H11a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInformation);
export default ForwardRef;
