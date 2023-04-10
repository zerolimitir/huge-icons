import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHeadphonesSilent = (
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
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='m2 2 20 20' />
        <path
            fill='currentColor'
            d='M8.25 16v2h1.5v-2h-1.5Zm-4.5 2v-2h-1.5v2h1.5ZM6 20.25A2.25 2.25 0 0 1 3.75 18h-1.5A3.75 3.75 0 0 0 6 21.75v-1.5ZM8.25 18A2.25 2.25 0 0 1 6 20.25v1.5A3.75 3.75 0 0 0 9.75 18h-1.5ZM6 13.75A2.25 2.25 0 0 1 8.25 16h1.5A3.75 3.75 0 0 0 6 12.25v1.5Zm0-1.5A3.75 3.75 0 0 0 2.25 16h1.5A2.25 2.25 0 0 1 6 13.75v-1.5Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M21.687 18.687c.041-.223.063-.452.063-.687v-2a3.75 3.75 0 0 0-5.854-3.104l1.093 1.093A2.25 2.25 0 0 1 20.25 16v1.251l1.438 1.437Zm-4.656 1.344 1.656 1.656A3.75 3.75 0 0 1 14.25 18v-.75l1.719 1.719c.221.464.598.84 1.062 1.062Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.862 4.862A8.25 8.25 0 0 1 20.25 12v4.75h1.5V12A9.75 9.75 0 0 0 12 2.25a9.704 9.704 0 0 0-5.23 1.52l1.092 1.092Zm-3.238.762 1.064 1.064A8.217 8.217 0 0 0 3.75 12v4.75h-1.5V12a9.71 9.71 0 0 1 2.374-6.376Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHeadphonesSilent);
export default ForwardRef;
