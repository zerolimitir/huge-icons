import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMailFail = (
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
            d='M21.47 6.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-1.94-4.06a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3 1.06a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-4.06 1.94a.75.75 0 0 0 1.06 1.06l-1.06-1.06ZM6.45 11.4a.75.75 0 1 0-.9 1.2l.9-1.2Zm1.75 2.25.45-.6-.45.6Zm3.6 0 .45.6-.45-.6Zm2.65-1.05a.75.75 0 1 0-.9-1.2l.9 1.2Zm8.08-7.13-1.5-1.5-1.06 1.06 1.5 1.5 1.06-1.06Zm-1.5-1.5-1.5-1.5-1.06 1.06 1.5 1.5 1.06-1.06Zm.44-1.5-1.5 1.5 1.06 1.06 1.5-1.5-1.06-1.06Zm-1.5 1.5-1.5 1.5 1.06 1.06 1.5-1.5-1.06-1.06ZM5 7.75h10v-1.5H5v1.5ZM17.25 10v8h1.5v-8h-1.5ZM15 20.25H5v1.5h10v-1.5ZM2.75 18v-8h-1.5v8h1.5ZM5 20.25A2.25 2.25 0 0 1 2.75 18h-1.5A3.75 3.75 0 0 0 5 21.75v-1.5ZM17.25 18A2.25 2.25 0 0 1 15 20.25v1.5A3.75 3.75 0 0 0 18.75 18h-1.5ZM15 7.75A2.25 2.25 0 0 1 17.25 10h1.5A3.75 3.75 0 0 0 15 6.25v1.5ZM5 6.25A3.75 3.75 0 0 0 1.25 10h1.5A2.25 2.25 0 0 1 5 7.75v-1.5Zm.55 6.35 2.2 1.65.9-1.2-2.2-1.65-.9 1.2Zm6.7 1.65 2.2-1.65-.9-1.2-2.2 1.65.9 1.2Zm-4.5 0c1.333 1 3.167 1 4.5 0l-.9-1.2c-.8.6-1.9.6-2.7 0l-.9 1.2Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailFail);
export default ForwardRef;
