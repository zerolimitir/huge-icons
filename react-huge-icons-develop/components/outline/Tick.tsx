import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTick = (
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
            d='M5.469 12.414a.75.75 0 0 0-.938 1.172l.938-1.172Zm3.057 3.407-.468.586.468-.586Zm2.736-.224-.557-.501.557.501Zm8.296-8.095a.75.75 0 1 0-1.116-1.004l1.116 1.004ZM4.53 13.586l3.527 2.82.937-1.17-3.526-2.822-.938 1.172Zm7.289 2.513 7.738-8.597-1.116-1.004-7.737 8.598 1.115 1.003Zm-3.762.308a2.75 2.75 0 0 0 3.762-.308l-1.115-1.003a1.25 1.25 0 0 1-1.71.14l-.937 1.17Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTick);
export default ForwardRef;
