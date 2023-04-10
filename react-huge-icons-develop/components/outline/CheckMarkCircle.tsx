import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCheckMarkCircle = (
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
            d='M16.625 3.987a.75.75 0 1 0 .75-1.298l-.75 1.298Zm5.448 4.25a.75.75 0 1 0-1.405.526l1.405-.526ZM7.469 9.414a.75.75 0 1 0-.938 1.172l.938-1.172Zm3.057 3.407-.468.586.468-.586Zm2.736-.224-.557-.501.557.501Zm8.296-8.095a.75.75 0 1 0-1.116-1.004l1.116 1.004ZM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75c1.686 0 3.265.45 4.625 1.237l.75-1.298A10.704 10.704 0 0 0 12 1.25v1.5Zm8.668 6.013A9.228 9.228 0 0 1 21.25 12h1.5c0-1.322-.24-2.59-.677-3.763l-1.405.526ZM6.53 10.586l3.527 2.82.937-1.17-3.526-2.822-.938 1.172Zm7.289 2.513 7.738-8.597-1.116-1.004-7.737 8.598 1.115 1.003Zm-3.762.308a2.75 2.75 0 0 0 3.762-.308l-1.115-1.003a1.25 1.25 0 0 1-1.71.14l-.937 1.17Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCheckMarkCircle);
export default ForwardRef;
