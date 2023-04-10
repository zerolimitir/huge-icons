import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMultiplyRectangle = (
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
            d='M9.702 8.641a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm4.596 6.718a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm1.06-5.657a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-6.717 4.596a.75.75 0 0 0 1.06 1.06l-1.06-1.06ZM6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Zm2.641 8.452 5.657 5.657 1.06-1.06L9.703 8.64 8.643 9.7Zm5.657-1.06-5.657 5.656 1.06 1.06 5.658-5.656-1.061-1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMultiplyRectangle);
export default ForwardRef;
