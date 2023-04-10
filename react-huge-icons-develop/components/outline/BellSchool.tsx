import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBellSchool = (
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
            d='M16.73 5.89a.75.75 0 1 0 1.206-.893l-1.206.893Zm1.206 10.113a.75.75 0 1 0-1.206-.893l1.206.893ZM10.5 22h-.75c0 .414.336.75.75.75V22Zm10.75-11.5a1.75 1.75 0 0 1-1.75 1.75v1.5a3.25 3.25 0 0 0 3.25-3.25h-1.5Zm-1.75 1.75a1.75 1.75 0 0 1-1.75-1.75h-1.5a3.25 3.25 0 0 0 3.25 3.25v-1.5Zm-1.75-1.75c0-.966.784-1.75 1.75-1.75v-1.5a3.25 3.25 0 0 0-3.25 3.25h1.5Zm1.75-1.75c.966 0 1.75.784 1.75 1.75h1.5a3.25 3.25 0 0 0-3.25-3.25v1.5Zm-9 9.5a7.75 7.75 0 0 1-7.75-7.75h-1.5a9.25 9.25 0 0 0 9.25 9.25v-1.5ZM2.75 10.5a7.75 7.75 0 0 1 7.75-7.75v-1.5a9.25 9.25 0 0 0-9.25 9.25h1.5Zm7.75-7.75a7.738 7.738 0 0 1 6.23 3.14l1.206-.893A9.238 9.238 0 0 0 10.5 1.25v1.5Zm6.23 12.36a7.738 7.738 0 0 1-6.23 3.14v1.5a9.238 9.238 0 0 0 7.436-3.747l-1.206-.893Zm4.52-4.61c0 5.937-4.813 10.75-10.75 10.75v1.5c6.765 0 12.25-5.485 12.25-12.25h-1.5Zm-10 11.5v-3h-1.5v3h1.5Zm1.5-11.5a2.25 2.25 0 0 0-2.25-2.25v1.5a.75.75 0 0 1 .75.75h1.5ZM10.5 8.25a2.25 2.25 0 0 0-2.25 2.25h1.5a.75.75 0 0 1 .75-.75v-1.5ZM8.25 10.5a2.25 2.25 0 0 0 2.25 2.25v-1.5a.75.75 0 0 1-.75-.75h-1.5Zm2.25 2.25a2.25 2.25 0 0 0 2.25-2.25h-1.5a.75.75 0 0 1-.75.75v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBellSchool);
export default ForwardRef;
