import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBoard = (
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
            d='M7 9.25a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 2.5a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 2.5a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5ZM6.47 5.47a.75.75 0 0 0 1.06 1.06L6.47 5.47Zm4.116-3.056-.53-.53.53.53Zm2.828 0 .53-.53-.53.53Zm3.056 4.117a.75.75 0 1 0 1.06-1.061l-1.06 1.06ZM6 6.75h12v-1.5H6v1.5ZM21.25 10v8h1.5v-8h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18v-8h-1.5v8h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 6.75A3.25 3.25 0 0 1 21.25 10h1.5A4.75 4.75 0 0 0 18 5.25v1.5ZM6 5.25A4.75 4.75 0 0 0 1.25 10h1.5A3.25 3.25 0 0 1 6 6.75v-1.5Zm1 5.5h10v-1.5H7v1.5Zm0 4h10v-1.5H7v1.5Zm0 4h5v-1.5H7v1.5Zm.53-12.22 3.586-3.586-1.06-1.06L6.47 5.47l1.06 1.06Zm5.354-3.586L16.47 6.53l1.06-1.061-3.586-3.586-1.06 1.06Zm-1.768 0a1.25 1.25 0 0 1 1.768 0l1.06-1.06a2.75 2.75 0 0 0-3.889 0l1.061 1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoard);
export default ForwardRef;
