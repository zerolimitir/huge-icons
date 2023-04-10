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
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M3.5 3A1.5 1.5 0 0 0 2 4.5v1.75h3V4.5A1.5 1.5 0 0 0 3.5 3ZM2 7.75v9.917a4 4 0 0 0 .8 2.4l.3.4a.5.5 0 0 0 .8 0l.3-.4a4 4 0 0 0 .8-2.4V7.75H2ZM8 18a3 3 0 0 1 3-3h11v3a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3ZM19 3h-8a3 3 0 0 0-3 3v8.646a4.484 4.484 0 0 1 3-1.146h11V6a3 3 0 0 0-3-3Zm-7 2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6ZM11.25 10a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPencilBook);
export default ForwardRef;
