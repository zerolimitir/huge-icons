import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMailDelay = (
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
            d='M7.253 11.69a.75.75 0 1 0-.9 1.2l.9-1.2Zm1.75 2.25-.45.6.45-.6Zm3.6 0 .45.6-.45-.6Zm2.65-1.05a.75.75 0 1 0-.9-1.2l.9 1.2Zm-2.765-4.85a.75.75 0 0 0 0-1.5v1.5Zm7.065 1.815a.75.75 0 0 0-1.5 0h1.5Zm-1.5.434v8h1.5v-8h-1.5Zm-2.25 10.25h-10v1.5h10v-1.5Zm-12.25-2.25v-8h-1.5v8h1.5Zm2.25 2.25a2.25 2.25 0 0 1-2.25-2.25h-1.5a3.75 3.75 0 0 0 3.75 3.75v-1.5Zm12.25-2.25a2.25 2.25 0 0 1-2.25 2.25v1.5a3.75 3.75 0 0 0 3.75-3.75h-1.5ZM5.803 6.54a3.75 3.75 0 0 0-3.75 3.75h1.5a2.25 2.25 0 0 1 2.25-2.25v-1.5Zm.55 6.35 2.2 1.65.9-1.2-2.2-1.65-.9 1.2Zm6.7 1.65 2.2-1.65-.9-1.2-2.2 1.65.9 1.2Zm-4.5 0c1.333 1 3.166 1 4.5 0l-.9-1.2c-.8.6-1.9.6-2.7 0l-.9 1.2Zm-2.75-6.5h6.685v-1.5H5.803v1.5Zm13 1.816h-.75v.434h1.5v-.434h-.75Z'
        />
        <path
            fill='currentColor'
            d='M17.209 5.009a.75.75 0 0 0-1.5 0h1.5Zm-.75 1.5h-.75c0 .414.336.75.75.75v-.75Zm1.5.75a.75.75 0 0 0 0-1.5v1.5Zm1.75-.75a3.25 3.25 0 0 1-3.25 3.25v1.5a4.75 4.75 0 0 0 4.75-4.75h-1.5Zm-3.25 3.25a3.25 3.25 0 0 1-3.25-3.25h-1.5a4.75 4.75 0 0 0 4.75 4.75v-1.5Zm-3.25-3.25a3.25 3.25 0 0 1 3.25-3.25v-1.5a4.75 4.75 0 0 0-4.75 4.75h1.5Zm3.25-3.25a3.25 3.25 0 0 1 3.25 3.25h1.5a4.75 4.75 0 0 0-4.75-4.75v1.5Zm-.75 1.75v1.5h1.5v-1.5h-1.5Zm.75 2.25h1.5v-1.5h-1.5v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailDelay);
export default ForwardRef;
