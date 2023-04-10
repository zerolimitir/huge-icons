import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStrikethrough = (
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
            d='M3.25 12a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-3.375c.696.729 1.125 1.679 1.125 2.75 0 2.438-2.224 4.25-4.75 4.25s-4.75-1.812-4.75-4.25a.75.75 0 0 1 1.5 0c0 1.428 1.358 2.75 3.25 2.75s3.25-1.322 3.25-2.75-1.358-2.75-3.25-2.75H4a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.75 8.5c0-1.428 1.358-2.75 3.25-2.75s3.25 1.322 3.25 2.75a.75.75 0 0 0 1.5 0c0-2.438-2.224-4.25-4.75-4.25S8.25 6.062 8.25 8.5c0 .632.15 1.223.415 1.75h1.832c-.473-.488-.747-1.109-.747-1.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStrikethrough);
export default ForwardRef;
