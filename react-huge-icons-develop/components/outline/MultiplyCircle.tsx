import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMultiplyCircle = (
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
            d='M9.702 8.641a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm4.596 6.718a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm1.06-5.657a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-6.717 4.596a.75.75 0 0 0 1.06 1.06l-1.06-1.06ZM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5ZM8.641 9.702l5.657 5.657 1.06-1.06L9.703 8.64 8.643 9.7Zm5.657-1.06-5.657 5.656 1.06 1.06 5.658-5.656-1.061-1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMultiplyCircle);
export default ForwardRef;
