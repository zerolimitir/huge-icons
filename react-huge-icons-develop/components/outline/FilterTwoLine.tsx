import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilterTwoLine = (
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
            d='M3 6.25a.75.75 0 0 0 0 1.5v-1.5Zm0 10a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm12 0a.75.75 0 0 0 0-1.5v1.5Zm-6-11.5a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-18 0h3v-1.5H3v1.5Zm0 10h6v-1.5H3v1.5Zm15 0h3v-1.5h-3v1.5Zm-3-10h6v-1.5h-6v1.5ZM17.25 17A2.25 2.25 0 0 1 15 19.25v1.5A3.75 3.75 0 0 0 18.75 17h-1.5ZM15 19.25A2.25 2.25 0 0 1 12.75 17h-1.5A3.75 3.75 0 0 0 15 20.75v-1.5ZM12.75 17A2.25 2.25 0 0 1 15 14.75v-1.5A3.75 3.75 0 0 0 11.25 17h1.5ZM15 14.75A2.25 2.25 0 0 1 17.25 17h1.5A3.75 3.75 0 0 0 15 13.25v1.5ZM11.25 7A2.25 2.25 0 0 1 9 9.25v1.5A3.75 3.75 0 0 0 12.75 7h-1.5ZM9 9.25A2.25 2.25 0 0 1 6.75 7h-1.5A3.75 3.75 0 0 0 9 10.75v-1.5ZM6.75 7A2.25 2.25 0 0 1 9 4.75v-1.5A3.75 3.75 0 0 0 5.25 7h1.5ZM9 4.75A2.25 2.25 0 0 1 11.25 7h1.5A3.75 3.75 0 0 0 9 3.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterTwoLine);
export default ForwardRef;
