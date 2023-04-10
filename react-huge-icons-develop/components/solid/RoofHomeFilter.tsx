import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoofHomeFilter = (
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
            d='M3.64 18.01c0 2.204 1.87 3.99 4.18 3.99h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878ZM7.25 12a.75.75 0 0 1 .75-.75h1.25V11a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0v-.25H8a.75.75 0 0 1-.75-.75Zm4.75-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Zm2.75 5V16a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-.25H16a.75.75 0 0 0 0-1.5h-1.25Zm-6.75 0a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H8Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeFilter);
export default ForwardRef;
