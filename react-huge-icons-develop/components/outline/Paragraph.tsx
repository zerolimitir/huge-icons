import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgParagraph = (
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
            d='M9.25 18a.75.75 0 0 0 1.5 0h-1.5ZM18 6.75a.75.75 0 0 0 0-1.5v1.5ZM13.25 18a.75.75 0 0 0 1.5 0h-1.5Zm-4-12v6h1.5V6h-1.5Zm0 6v6h1.5v-6h-1.5Zm.75-.75H9v1.5h1v-1.5Zm-1-4.5h1v-1.5H9v1.5Zm1 0h4v-1.5h-4v1.5Zm4 0h4v-1.5h-4v1.5ZM13.25 6v12h1.5V6h-1.5Zm-6.5 3A2.25 2.25 0 0 1 9 6.75v-1.5A3.75 3.75 0 0 0 5.25 9h1.5ZM9 11.25A2.25 2.25 0 0 1 6.75 9h-1.5A3.75 3.75 0 0 0 9 12.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgParagraph);
export default ForwardRef;
