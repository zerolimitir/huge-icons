import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLoadingDoted = (
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
            d='M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm7.928-12.268a2 2 0 1 1-2-3.464 2 2 0 0 1 2 3.464ZM3.34 17a2 2 0 1 0 3.464-2 2 2 0 0 0-3.464 2Zm14.588.732a2 2 0 1 1 2-3.464 2 2 0 0 1-2 3.464ZM3.34 7a2 2 0 1 0 3.464 2A2 2 0 0 0 3.34 7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLoadingDoted);
export default ForwardRef;
