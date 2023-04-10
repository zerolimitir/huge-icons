import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPostAdd = (
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
            d='M21.75 9.361a.75.75 0 0 0-1.5 0h1.5ZM13.446 2.75a.75.75 0 0 0 0-1.5v1.5Zm6.804 6.611V18h1.5V9.361h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V6h-1.5v12h1.5ZM7 2.75h6.446v-1.5H7v1.5Zm0 18.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM3.75 6A3.25 3.25 0 0 1 7 2.75v-1.5A4.75 4.75 0 0 0 2.25 6h1.5ZM8 6.25a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4 0h4v-1.5H8v1.5Zm0 3.5a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 0h8v-1.5H8v1.5Zm0 3.5a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 0h8v-1.5H8v1.5Z'
        />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M18 2v6m3-3h-6' />
    </svg>
);
const ForwardRef = forwardRef(SvgPostAdd);
export default ForwardRef;
