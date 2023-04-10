import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMouse = (
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
            d='M11.25 5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 8a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5ZM9 5.75h6v-1.5H9v1.5ZM18.25 9v6h1.5V9h-1.5Zm-12.5 6V9h-1.5v6h1.5ZM12 21.25A6.25 6.25 0 0 1 5.75 15h-1.5A7.75 7.75 0 0 0 12 22.75v-1.5ZM18.25 15A6.25 6.25 0 0 1 12 21.25v1.5A7.75 7.75 0 0 0 19.75 15h-1.5ZM15 5.75A3.25 3.25 0 0 1 18.25 9h1.5A4.75 4.75 0 0 0 15 4.25v1.5Zm-6-1.5A4.75 4.75 0 0 0 4.25 9h1.5A3.25 3.25 0 0 1 9 5.75v-1.5Zm3.75.75V2h-1.5v3h1.5Zm0 5V8h-1.5v2h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMouse);
export default ForwardRef;
