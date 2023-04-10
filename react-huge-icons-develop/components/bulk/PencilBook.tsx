import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPencilBook = (
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
        <path fill='currentColor' d='M19 3h-8a3 3 0 0 0-3 3v12h14V6a3 3 0 0 0-3-3Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.25 7a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M8 18a3 3 0 0 1 3-3h11v3a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3Z' />
        <path
            fill='currentColor'
            d='M2 4.5a1.5 1.5 0 1 1 3 0v13.167a4 4 0 0 1-.8 2.4l-.3.4a.5.5 0 0 1-.8 0l-.3-.4a4 4 0 0 1-.8-2.4V4.5Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M5 7H2V4.5a1.5 1.5 0 1 1 3 0V7Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgPencilBook);
export default ForwardRef;
