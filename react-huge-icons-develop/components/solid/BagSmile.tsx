import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBagSmile = (
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
            d='M8.25 5a3.75 3.75 0 0 1 7.5 0v1.01a4 4 0 0 1 3.688 3.494l1 8A4 4 0 0 1 16.468 22H7.532a4 4 0 0 1-3.969-4.496l1-8A4 4 0 0 1 8.25 6.01V5Zm6 0v1h-4.5V5a2.25 2.25 0 1 1 4.5 0Zm1.118 11.653a.75.75 0 1 0-.736-1.306c-1.138.64-1.913.902-2.632.903-.718.001-1.493-.255-2.63-.902a.75.75 0 1 0-.74 1.304c1.22.694 2.268 1.1 3.373 1.098 1.104-.002 2.15-.412 3.365-1.097Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBagSmile);
export default ForwardRef;
