import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgEye = (
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
            d='m2.87 14.147-.544.517.544-.517Zm0-4.294-.544-.517.544.517Zm18.26 4.294.544.517-.544-.517Zm0-4.294.544-.517-.544.517Zm-.543 3.777c-1.94 2.041-5.107 4.62-8.587 4.62v1.5c4.151 0 7.702-3.012 9.674-5.086l-1.087-1.034ZM12 18.25c-3.48 0-6.647-2.579-8.587-4.62l-1.087 1.034C4.298 16.738 7.85 19.75 12 19.75v-1.5Zm-8.587-7.88C5.353 8.329 8.52 5.75 12 5.75v-1.5c-4.151 0-7.702 3.012-9.674 5.086l1.087 1.034ZM12 5.75c3.48 0 6.647 2.579 8.587 4.62l1.087-1.034C19.702 7.262 16.15 4.25 12 4.25v1.5Zm-8.587 7.88a2.335 2.335 0 0 1 0-3.26L2.326 9.336a3.835 3.835 0 0 0 0 5.328l1.087-1.034Zm18.26 1.034a3.835 3.835 0 0 0 0-5.328l-1.086 1.034c.884.93.884 2.33 0 3.26l1.087 1.034ZM14.25 12A2.25 2.25 0 0 1 12 14.25v1.5A3.75 3.75 0 0 0 15.75 12h-1.5ZM12 14.25A2.25 2.25 0 0 1 9.75 12h-1.5A3.75 3.75 0 0 0 12 15.75v-1.5ZM9.75 12A2.25 2.25 0 0 1 12 9.75v-1.5A3.75 3.75 0 0 0 8.25 12h1.5ZM12 9.75A2.25 2.25 0 0 1 14.25 12h1.5A3.75 3.75 0 0 0 12 8.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEye);
export default ForwardRef;
