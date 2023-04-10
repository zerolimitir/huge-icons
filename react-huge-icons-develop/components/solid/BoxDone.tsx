import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBoxDone = (
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
            d='M17 2.062h1a4 4 0 0 1 4 4v7a2 2 0 0 1-2 2h-5a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4h11ZM8 7.648V3.562h8v4.086c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0L9.707 8.355C9.077 8.985 8 8.539 8 7.648Zm13.564 10.908a.75.75 0 1 0-1.128-.988l-2.87 3.28a.25.25 0 0 1-.345.03l-1.752-1.401a.75.75 0 1 0-.938 1.17l1.753 1.403a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoxDone);
export default ForwardRef;
