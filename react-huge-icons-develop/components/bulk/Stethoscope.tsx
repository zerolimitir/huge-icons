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
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M17.25 10.75a2 2 0 0 0-2 2v5.5a4.5 4.5 0 1 1-9 0V13a.75.75 0 0 1 1.5 0v5.25a3 3 0 1 0 6 0v-5.5a3.5 3.5 0 1 1 7 0V14a.75.75 0 0 1-1.5 0v-1.25a2 2 0 0 0-2-2Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path fill='currentColor' d='M22 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M3.25 2.354A2.751 2.751 0 0 0 1.25 5v3a5.75 5.75 0 0 0 11.5 0V5a2.75 2.75 0 0 0-2-2.646V4c.304.228.5.591.5 1v3a4.25 4.25 0 0 1-8.5 0V5c0-.409.196-.772.5-1V2.354Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M10 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-6 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 4 1.25Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStethoscope);
export default ForwardRef;
