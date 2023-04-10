import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgExam = (
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
            d='M10.25 12a.75.75 0 0 0 1.5 0h-1.5Zm-4 0a.75.75 0 0 0 1.5 0h-1.5ZM7 9.25a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4 3.5a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 1.5a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5Zm2-12a.75.75 0 0 0 0 1.5v-1.5Zm3 1.5a.75.75 0 0 0 0-1.5v1.5ZM16.25 6a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM6 2.75h12v-1.5H6v1.5ZM20.25 5v14h1.5V5h-1.5ZM18 21.25H6v1.5h12v-1.5ZM3.75 19V5h-1.5v14h1.5ZM6 21.25A2.25 2.25 0 0 1 3.75 19h-1.5A3.75 3.75 0 0 0 6 22.75v-1.5ZM20.25 19A2.25 2.25 0 0 1 18 21.25v1.5A3.75 3.75 0 0 0 21.75 19h-1.5ZM18 2.75A2.25 2.25 0 0 1 20.25 5h1.5A3.75 3.75 0 0 0 18 1.25v1.5ZM6 1.25A3.75 3.75 0 0 0 2.25 5h1.5A2.25 2.25 0 0 1 6 2.75v-1.5ZM10.25 9v3h1.5V9h-1.5Zm-2.5 3V9h-1.5v3h1.5ZM9 7.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 9 6.25v1.5Zm0-1.5A2.75 2.75 0 0 0 6.25 9h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm-2 4.5h4v-1.5H7v1.5Zm0 5h10v-1.5H7v1.5Zm0 3h5v-1.5H7v1.5Zm7-10.5h3v-1.5h-3v1.5ZM14.75 6v3h1.5V6h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgExam);
export default ForwardRef;
