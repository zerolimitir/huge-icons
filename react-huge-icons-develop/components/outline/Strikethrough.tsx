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
            d='M9.75 15.5a.75.75 0 0 0-1.5 0h1.5ZM13 11.25a.75.75 0 0 0 0 1.5v-1.5Zm0 1.5c1.892 0 3.25 1.322 3.25 2.75h1.5c0-2.438-2.224-4.25-4.75-4.25v1.5Zm3.25 2.75c0 1.428-1.358 2.75-3.25 2.75v1.5c2.526 0 4.75-1.812 4.75-4.25h-1.5ZM13 18.25c-1.892 0-3.25-1.322-3.25-2.75h-1.5c0 2.438 2.224 4.25 4.75 4.25v-1.5Z'
        />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M4 12h16' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.75 8.5c0-1.428 1.358-2.75 3.25-2.75s3.25 1.322 3.25 2.75a.75.75 0 0 0 1.5 0c0-2.438-2.224-4.25-4.75-4.25S8.25 6.062 8.25 8.5c0 .632.15 1.223.415 1.75h1.832c-.473-.488-.747-1.109-.747-1.75Zm3.957 3.25H9.94c.84.63 1.92 1 3.061 1a.75.75 0 0 0 .707-1Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStrikethrough);
export default ForwardRef;
