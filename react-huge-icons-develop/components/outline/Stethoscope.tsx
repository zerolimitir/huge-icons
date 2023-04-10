import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStethoscope = (
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
        <path stroke='currentColor' strokeWidth={1.5} d='M22 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M4 3v0a2 2 0 0 0-2 2v3a5 5 0 0 0 5 5v0a5 5 0 0 0 5-5V5a2 2 0 0 0-2-2v0'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M7 13v5.25A3.75 3.75 0 0 0 10.75 22v0a3.75 3.75 0 0 0 3.75-3.75v-5.5A2.75 2.75 0 0 1 17.25 10v0A2.75 2.75 0 0 1 20 12.75V14M10 2v2M4 2v2'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStethoscope);
export default ForwardRef;
