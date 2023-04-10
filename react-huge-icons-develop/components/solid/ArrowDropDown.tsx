import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowDropDown = (
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
            d='M15.518 6H8.482C6.938 6 5.977 7.674 6.755 9.008l3.517 6.03c.772 1.323 2.684 1.323 3.456 0l3.518-6.03C18.023 7.674 17.061 6 15.518 6Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowDropDown);
export default ForwardRef;
