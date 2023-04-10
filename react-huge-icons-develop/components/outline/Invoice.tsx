import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgInvoice = (
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
            d='M7 2.75h10v-1.5H7v1.5ZM20.25 6v12h1.5V6h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V6h-1.5v12h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 2.75A3.25 3.25 0 0 1 20.25 6h1.5A4.75 4.75 0 0 0 17 1.25v1.5ZM7 1.25A4.75 4.75 0 0 0 2.25 6h1.5A3.25 3.25 0 0 1 7 2.75v-1.5Zm10 6.5a.75.75 0 0 0 0-1.5v1.5ZM7 6.25a.75.75 0 0 0 0 1.5v-1.5Zm10 0H7v1.5h10v-1.5Zm0 6.5a.75.75 0 0 0 0-1.5v1.5Zm-10-1.5a.75.75 0 0 0 0 1.5v-1.5Zm10 0H7v1.5h10v-1.5Zm-5 6.5a.75.75 0 0 0 0-1.5v1.5Zm-5-1.5a.75.75 0 0 0 0 1.5v-1.5Zm5 0H7v1.5h5v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInvoice);
export default ForwardRef;
