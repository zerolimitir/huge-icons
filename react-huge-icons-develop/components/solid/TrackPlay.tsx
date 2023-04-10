import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrackPlay = (
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
            d='M16.961 13.736 8.992 18.29C7.66 19.052 6 18.09 6 16.554V7.446C6 5.911 7.659 4.948 8.992 5.71l7.97 4.554c1.343.767 1.343 2.705 0 3.473Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackPlay);
export default ForwardRef;
