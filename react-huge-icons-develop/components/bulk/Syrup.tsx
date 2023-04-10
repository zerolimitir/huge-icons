import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSyrup = (
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
            d='M7 3.5A1.5 1.5 0 0 1 8.5 2h7a1.5 1.5 0 0 1 0 3h-7A1.5 1.5 0 0 1 7 3.5Z'
        />
        <path
            fill='currentColor'
            d='M6 12.14a4 4 0 0 1 1.781-3.327l.328-.22A2 2 0 0 0 9 6.93V5h6v1.93a2 2 0 0 0 .89 1.664l.329.219A4 4 0 0 1 18 12.14V18a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-5.86Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M15 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgSyrup);
export default ForwardRef;
