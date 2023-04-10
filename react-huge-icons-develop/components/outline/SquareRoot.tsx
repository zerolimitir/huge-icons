import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSquareRoot = (
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
            d='M3 12.25a.75.75 0 0 0 0 1.5v-1.5Zm2.3 1.15-.6.45.6-.45Zm1.511 2.015.6-.45-.6.45Zm1.758-.312-.718-.216.718.216Zm2.217-7.39-.718-.216.718.216ZM21 7.75a.75.75 0 0 0 0-1.5v1.5Zm-2.348 4.538a.75.75 0 0 0-1.061-1.061l1.06 1.06Zm-5.304 3.182a.75.75 0 1 0 1.061 1.06l-1.06-1.06Zm4.243 1.06a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-3.182-5.303a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM3 13.75h1.5v-1.5H3v1.5Zm1.7.1 1.511 2.015 1.2-.9L5.9 12.95l-1.2.9Zm4.588 1.468 2.217-7.39-1.437-.43-2.217 7.389 1.437.431Zm2.456-7.568H21v-1.5h-9.256v1.5Zm-.24.178a.25.25 0 0 1 .24-.178v-1.5a1.75 1.75 0 0 0-1.676 1.247l1.437.431Zm-5.293 7.937c.862 1.149 2.664.828 3.077-.547l-1.437-.431a.25.25 0 0 1-.44.078l-1.2.9ZM4.5 13.75a.25.25 0 0 1 .2.1l1.2-.9c-.33-.44-.85-.7-1.4-.7v1.5Zm13.091-2.523-4.243 4.243 1.061 1.06 4.243-4.242-1.061-1.061Zm1.06 4.243-4.242-4.243-1.06 1.06 4.242 4.243 1.06-1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSquareRoot);
export default ForwardRef;
