import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTraining = (
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
            fillRule='evenodd'
            d='M6.75 4c0-.69.56-1.25 1.25-1.25h12c.69 0 1.25.56 1.25 1.25v6c0 .69-.56 1.25-1.25 1.25h-1a.75.75 0 0 0 0 1.5h1A2.75 2.75 0 0 0 22.75 10V4A2.75 2.75 0 0 0 20 1.25H8A2.75 2.75 0 0 0 5.25 4v1.5a.75.75 0 0 0 1.5 0V4ZM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm10.63-.594a.75.75 0 1 0-1.26-.811l-3.892 6.052a1.448 1.448 0 0 0-1.235.153L8 16.5V16a3 3 0 1 0-6 0v6h6v-2.32a2 2 0 0 0 .764-.283l4.027-2.142c.483-.301.728-.84.676-1.372l4.164-6.477ZM9.25 6a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8A.75.75 0 0 1 9.25 6ZM10 8.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTraining);
export default ForwardRef;
