import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgReport = (
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
            d='M13.25 12a.75.75 0 0 0 1.5 0h-1.5Zm-4 0a.75.75 0 0 0 1.5 0h-1.5ZM10 9.25a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 3.5a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 1.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-5-16h10v-1.5H7v1.5ZM20.25 6v12h1.5V6h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V6h-1.5v12h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 2.75A3.25 3.25 0 0 1 20.25 6h1.5A4.75 4.75 0 0 0 17 1.25v1.5ZM7 1.25A4.75 4.75 0 0 0 2.25 6h1.5A3.25 3.25 0 0 1 7 2.75v-1.5ZM13.25 8v4h1.5V8h-1.5Zm-2.5 4V8h-1.5v4h1.5ZM12 6.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 5.25v1.5Zm0-1.5A2.75 2.75 0 0 0 9.25 8h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm-2 5.5h4v-1.5h-4v1.5Zm-2 5h8v-1.5H8v1.5Zm0 3h4v-1.5H8v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReport);
export default ForwardRef;
