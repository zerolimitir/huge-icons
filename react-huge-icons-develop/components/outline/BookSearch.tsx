import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookSearch = (
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
            d='M15.03 10.97a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-.06 2.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM14.25 9A2.25 2.25 0 0 1 12 11.25v1.5A3.75 3.75 0 0 0 15.75 9h-1.5ZM12 11.25A2.25 2.25 0 0 1 9.75 9h-1.5A3.75 3.75 0 0 0 12 12.75v-1.5ZM9.75 9A2.25 2.25 0 0 1 12 6.75v-1.5A3.75 3.75 0 0 0 8.25 9h1.5ZM12 6.75A2.25 2.25 0 0 1 14.25 9h1.5A3.75 3.75 0 0 0 12 5.25v1.5Zm1.97 5.28 1 1 1.06-1.06-1-1-1.06 1.06ZM7 2.75h10v-1.5H7v1.5ZM4.75 19V5h-1.5v14h1.5Zm14.5-14v11h1.5V5h-1.5ZM17 2.75A2.25 2.25 0 0 1 19.25 5h1.5A3.75 3.75 0 0 0 17 1.25v1.5ZM7 1.25A3.75 3.75 0 0 0 3.25 5h1.5A2.25 2.25 0 0 1 7 2.75v-1.5Zm0 15.5h13v-1.5H7v1.5ZM19.25 16v3h1.5v-3h-1.5ZM17 21.25H7v1.5h10v-1.5Zm-10 0A2.25 2.25 0 0 1 4.75 19h-1.5A3.75 3.75 0 0 0 7 22.75v-1.5ZM19.25 19A2.25 2.25 0 0 1 17 21.25v1.5A3.75 3.75 0 0 0 20.75 19h-1.5ZM7 15.25A3.75 3.75 0 0 0 3.25 19h1.5A2.25 2.25 0 0 1 7 16.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookSearch);
export default ForwardRef;
