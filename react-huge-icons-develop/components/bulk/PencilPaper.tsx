import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPencilPaper = (
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
            d='M8 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3V6ZM2 4.5a1.5 1.5 0 1 1 3 0v13.039a4 4 0 0 1-.672 2.219l-.412.618a.5.5 0 0 1-.832 0l-.412-.618A4 4 0 0 1 2 17.538V4.5Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M5 7H2V4.5a1.5 1.5 0 1 1 3 0V7Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.25 8a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPencilPaper);
export default ForwardRef;
