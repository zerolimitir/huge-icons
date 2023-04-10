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
            fillRule='evenodd'
            d='M11.505 7.928a.25.25 0 0 1 .239-.178H21a.75.75 0 0 0 0-1.5h-9.256a1.75 1.75 0 0 0-1.676 1.247l-2.217 7.39a.25.25 0 0 1-.44.078L5.9 12.95c-.33-.44-.85-.7-1.4-.7H3a.75.75 0 0 0 0 1.5h1.5a.25.25 0 0 1 .2.1l1.511 2.015c.862 1.149 2.664.828 3.077-.547l2.217-7.39Zm7.147 4.36a.75.75 0 0 0-1.061-1.061L16 12.818l-1.591-1.591a.75.75 0 0 0-1.06 1.06l1.59 1.592-1.59 1.59a.75.75 0 0 0 1.06 1.061L16 14.94l1.591 1.59a.75.75 0 1 0 1.06-1.06l-1.59-1.591 1.59-1.591Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSquareRoot);
export default ForwardRef;
