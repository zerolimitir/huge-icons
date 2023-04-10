import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLandscapeLineCenter = (
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
            d='M12 2.25a.75.75 0 0 1 .75.75v4H18a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-5.25v4a.75.75 0 0 1-1.5 0v-4H6a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h5.25V3a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLandscapeLineCenter);
export default ForwardRef;
