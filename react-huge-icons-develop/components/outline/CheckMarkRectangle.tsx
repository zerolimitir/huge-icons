import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCheckMarkRectangle = (
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
            d='M7.469 9.414a.75.75 0 1 0-.938 1.172l.938-1.172Zm3.057 3.407-.468.586.468-.586Zm2.736-.224-.557-.501.557.501Zm8.296-8.095a.75.75 0 1 0-1.116-1.004l1.116 1.004ZM22.75 9a.75.75 0 0 0-1.5 0h1.5ZM17 2.75a.75.75 0 0 0 0-1.5v1.5ZM6.531 10.586l3.527 2.82.937-1.17-3.526-2.822-.938 1.172Zm7.289 2.513 7.738-8.597-1.116-1.004-7.737 8.598 1.115 1.003Zm-3.762.308a2.75 2.75 0 0 0 3.762-.308l-1.115-1.003a1.25 1.25 0 0 1-1.71.14l-.937 1.17ZM1.25 6v12h1.5V6h-1.5ZM6 22.75h12v-1.5H6v1.5ZM22.75 18V9h-1.5v9h1.5ZM6 2.75h11v-1.5H6v1.5Zm12 20A4.75 4.75 0 0 0 22.75 18h-1.5A3.25 3.25 0 0 1 18 21.25v1.5ZM1.25 18A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5Zm1.5-12A3.25 3.25 0 0 1 6 2.75v-1.5A4.75 4.75 0 0 0 1.25 6h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCheckMarkRectangle);
export default ForwardRef;
