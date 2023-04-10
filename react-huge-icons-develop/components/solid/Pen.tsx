import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPen = (
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
            d='M21.53 2.47a.75.75 0 0 1 0 1.06l-1.619 1.62a2.477 2.477 0 0 1-.448 2.89l-.794.793-3.502-3.502.794-.793a2.477 2.477 0 0 1 2.89-.45L20.47 2.47a.75.75 0 0 1 1.06 0Zm-3.922 7.424-3.502-3.502-8.483 8.483 3.502 3.502 8.483-8.483Zm-9.565 9.522-3.459-3.459a4.349 4.349 0 0 0-.82 1.714l-.585 2.551a.5.5 0 0 0 .6.6l2.55-.587a4.349 4.349 0 0 0 1.714-.82ZM19.224 9.389l-.554-.555-1.06 1.06.553.555a1.424 1.424 0 0 1 0 2.015L16.627 14a.75.75 0 0 0 1.06 1.06l1.538-1.537a2.924 2.924 0 0 0 0-4.135Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPen);
export default ForwardRef;
