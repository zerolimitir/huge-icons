import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFlashOff = (
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
            d='M19 10.5h-5V2l-3.925 5.015 6.537 6.536L19 10.5ZM4.53 3.47a.75.75 0 0 0-1.06 1.06l4.796 4.797L5 13.5h5V22l4.803-6.137 4.667 4.667a.75.75 0 1 0 1.06-1.06l-16-16Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlashOff);
export default ForwardRef;
