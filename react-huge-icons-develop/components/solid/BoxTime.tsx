import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBoxTime = (
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
            d='M17 2.062h1a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2h-5a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4h11ZM8 7.648V3.562h8v4.086c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0L9.707 8.355C9.077 8.985 8 8.539 8 7.648Zm12.959 10.935a3.48 3.48 0 1 1-6.959 0 3.48 3.48 0 0 1 6.959 0Zm-3.789-1.549a.5.5 0 0 1 .5.5v1.09l.801.001a.5.5 0 1 1 0 1h-1.3a.5.5 0 0 1-.5-.5v-1.591a.5.5 0 0 1 .5-.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoxTime);
export default ForwardRef;
