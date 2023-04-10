import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBriefcase = (
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
            d='M8.75 3.75A2.25 2.25 0 0 1 11 1.5h2a2.25 2.25 0 0 1 2.25 2.25v1h-6.5v-1Zm-1.5 1v-1A3.75 3.75 0 0 1 11 0h2a3.75 3.75 0 0 1 3.75 3.75v1H18a4 4 0 0 1 4 4V11h-8.145a2 2 0 0 0-3.71 0H2V8.75a4 4 0 0 1 4-4h1.25Zm6.605 7.75H22v4.25a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V12.5h8.145a2 2 0 0 0 3.71 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcase);
export default ForwardRef;
