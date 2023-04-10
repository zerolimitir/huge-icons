import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgActivity = (
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
            d='M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm4.685 5.695a.75.75 0 0 0-1.356-.03L7.536 11.25H6a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 .67-.415l1.29-2.578 3.355 7.548a.75.75 0 0 0 1.381-.026l1.812-4.529H18a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0-.696.472l-1.34 3.35-3.279-7.377Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgActivity);
export default ForwardRef;
